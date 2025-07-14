"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Whatsapp() {
	return (
		<section id="whatsapp">
			<FloatingWhatsApp
				phoneNumber="+573053335489"
				accountName="Automatizaciones con n8n"
				allowEsc
				notification
				notificationSound
				chatMessage="Hola!! bienvenido al chat de automatizaciones ¿Como puedo ayudarte?"
				placeholder="Escribe tu consulta"
				statusMessage="Generalmente responden rapido"
			/>
		</section>
	);
}
