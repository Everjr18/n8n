# Landing WhatsApp-first para consultorios

Proyecto en Next.js + TypeScript + Tailwind + shadcn/ui, enfocado en convertir visitas en conversaciones calificadas por WhatsApp.

## Objetivo

- Mensaje claro en 3-5 segundos: reducir ausencias y llenar agenda.
- CTA dominante en toda la landing: `Hablar por WhatsApp`.
- Cierre comercial manual por diagnostico en WhatsApp (sin checkout, sin suscripciones automaticas).

## Flujo de secciones

1. Hero
2. Proof / Resultados
3. Que automatizamos
4. Paquetes
5. Como funciona
6. FAQ
7. CTA final

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui

## Desarrollo local

```bash
npm install
npm run dev
```

App local en [http://localhost:3000](http://localhost:3000).

## Tracking implementado (sin librerias pesadas)

Eventos:

- `landing_view`
- `hero_whatsapp_click`
- `pricing_view`
- `package_whatsapp_click_starter`
- `package_whatsapp_click_pro`
- `package_whatsapp_click_full`
- `faq_open`

Implementacion:

- `window.dataLayer` (si existe)
- `window.gtag` (si existe)
- `CustomEvent("landing:track")`

## Mensajes de WhatsApp por paquete

- Starter:
  - `"Hola, tengo un consultorio y quiero automatizar respuesta + confirmacion de citas. Me interesa Starter..."`
- Pro:
  - `"Hola, quiero reducir ausencias con confirmacion + recordatorios + seguimiento. Me interesa Pro..."`
- Full:
  - `"Hola, quiero el sistema completo (lead->cita->recordatorio->post-cita). Me interesa Full..."`

## Nota de datos

- No se inventan metricas.
- Los mini-casos usan placeholders para que completes resultados reales.
- Solo se contemplan datos operativos (nombre, contacto, estado de cita).
- No se almacenan datos clinicos sensibles.

## QA rapido

- Hero muestra H1 + CTA sin scroll excesivo en movil.
- No hay overflow horizontal.
- Solo hay un CTA principal repetido estrategicamente.
- FAQ abre/cierra con teclado y mouse.
- Eventos se disparan en hero, paquetes, pricing y FAQ.
