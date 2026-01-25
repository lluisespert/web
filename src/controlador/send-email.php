<?php
// Permitir peticiones desde cualquier origen (CORS)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Si es una petición OPTIONS, devolver ok
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit();
}

// Obtener datos JSON del body
$data = json_decode(file_get_contents('php://input'), true);

// Validar que existan los datos necesarios
if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Datos incompletos']);
    exit();
}

// Sanitizar datos
$name = htmlspecialchars(trim($data['name']));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(trim($data['message']));

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email inválido']);
    exit();
}

// Validar que no estén vacíos
if (empty($name) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Los campos no pueden estar vacíos']);
    exit();
}

// IMPORTANTE: Cambiar esto a tu email real
$recipient_email = 'espertcuquerellalluis@gmail.com'; // ← CAMBIAR AQUÍ

// Preparar el email
$subject = "Nuevo mensaje de contacto de: $name";
$body = "Has recibido un nuevo mensaje de contacto.\n\n";
$body .= "Nombre: $name\n";
$body .= "Email: $email\n";
$body .= "Mensaje:\n$message\n";

// Headers del email
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Intentar enviar el email
try {
    if (mail($recipient_email, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Email enviado exitosamente'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'error' => 'No se pudo enviar el email. Intenta más tarde.'
        ]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Error al procesar tu solicitud: ' . $e->getMessage()
    ]);
}
?>
