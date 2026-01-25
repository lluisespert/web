import React, { useRef, useState } from 'react';
import '../estilos/estilos.css';

export default function Contact3D() {
  const cardRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleMove(e) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const dx = (x - cx) / cx
    const dy = (y - cy) / cy
    const rotY = dx * 8
    const rotX = -dy * 8
    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`
  }

  function handleLeave() {
    const card = cardRef.current
    if (!card) return
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(s => ({ ...s, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', text: 'Por favor completa todos los campos.' })
      return
    }
    
    setStatus({ type: 'sending', text: 'Enviando...' })
    
    // Enviar datos al servidor PHP
    fetch('/src/controlador/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setStatus({ type: 'success', text: 'Mensaje enviado. ¡Gracias!' })
          setForm({ name: '', email: '', message: '' })
        } else {
          setStatus({ type: 'error', text: data.error || 'Error al enviar el email.' })
        }
      })
      .catch(error => {
        console.error('Error:', error)
        setStatus({ type: 'error', text: 'Error en la conexión. Intenta de nuevo.' })
      })
  }

  return (
    <div className="contact-3d-wrapper">
      <div
        className="contact-3d-container"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        aria-hidden="false"
      >
        <div className="contact-card" ref={cardRef}>
          <div className="card-face card-front">
            <h2>Contacto</h2>
            <p className="muted">¿Tienes un proyecto? Hablemos.</p>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label>
                Nombre
                <input name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                Email
                <input name="email" type="email" value={form.email} onChange={handleChange} required />
              </label>
              <label>
                Mensaje
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} />
              </label>
              <div className="form-actions">
                <button type="submit">Enviar</button>
              </div>
              {status && (
                <div className={`form-status ${status.type}`}>{status.text}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
