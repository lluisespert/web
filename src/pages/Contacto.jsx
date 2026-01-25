
import React from 'react'
import Contact3D from '../components/Contact3D'
import '../estilos/estilos.css';

function Contacto() {
	return (
		<main style={{ display: 'flex', justifyContent: 'center', padding: '3rem 1rem' }}>
			<div style={{ maxWidth: 900, width: '100%' }}>
				<Contact3D />
			</div>
		</main>
	)
}
export default Contacto;