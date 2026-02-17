# Automatizacion (Next.js + shadcn/ui)

Landing optimizada para conversión con checkout por suscripción PayPal y activación automática de acceso por webhook.

## Requisitos

- Node.js 20+
- npm 10+
- Cuenta PayPal Business (Sandbox o Live)

## Desarrollo local

```bash
npm install
npm run dev
```

App en `http://localhost:3000`.

## Variables de entorno

Usa `.env.example` como base.

```bash
cp .env.example .env.local
```

Variables clave:

- `PAYPAL_ENV`: `sandbox` o `live`
- `PAYPAL_CLIENT_ID`: client id PayPal
- `PAYPAL_CLIENT_SECRET`: secret PayPal
- `NEXT_PUBLIC_PAYPAL_CLIENT_ID`: normalmente igual a `PAYPAL_CLIENT_ID`
- `PAYPAL_WEBHOOK_ID`: id del webhook creado en PayPal
- `PAYPAL_PLAN_TIER1_ID`, `PAYPAL_PLAN_TIER2_ID`, `PAYPAL_PLAN_TIER3_ID`
- `SUBSCRIPTION_STORE_PATH`: ruta JSON para estado local (`./data/subscriptions.json`)

## Crear Product + Plans en PayPal

Script admin incluido:

```bash
npm run paypal:bootstrap
```

Salida esperada:

- `PAYPAL_PRODUCT_ID`
- `PAYPAL_PLAN_TIER1_ID`
- `PAYPAL_PLAN_TIER2_ID`
- `PAYPAL_PLAN_TIER3_ID`

Puedes ajustar precios con:

- `PAYPAL_PRICE_TIER1`
- `PAYPAL_PRICE_TIER2`
- `PAYPAL_PRICE_TIER3`

## Rutas principales

- Landing: `/{lang}` (`es`, `en`, `pt`)
- Checkout: `/checkout?plan=tier2&lang=es`
- Success: `/success`
- Cancel: `/cancel`

## Webhooks PayPal

Endpoint:

- `POST /api/paypal/webhook`

El endpoint:

- verifica firma (`v1/notifications/verify-webhook-signature`)
- actualiza estado de suscripción y entitlement
- persiste: `userId/email/paypalCustomerId/subscriptionId/status/currentPeriodEnd/planTier`

Eventos esperados:

- `BILLING.SUBSCRIPTION.ACTIVATED`
- `BILLING.SUBSCRIPTION.CANCELLED`
- `BILLING.SUBSCRIPTION.EXPIRED`
- `BILLING.SUBSCRIPTION.SUSPENDED`
- `BILLING.SUBSCRIPTION.PAYMENT.FAILED`
- `PAYMENT.SALE.COMPLETED`

## Entitlements / gating básico

- `GET /api/entitlements?email=...&requiredTier=tier2`
- `GET /api/subscriptions/:subscriptionId`

Regla base:

- `ACTIVE` y `GRACE` permiten acceso
- `INACTIVE` bloquea acceso
- comparación de planes por tier (`tier3` >= `tier2` >= `tier1`)

## Tracking mínimo implementado

- `landing_view`
- `hero_click_primary_cta`
- `pricing_view`
- `plan_select_[tier]`
- `checkout_start`
- `checkout_success`
- `checkout_cancel`
- `faq_open`

## Seguridad React / RSC

Comandos de verificación:

```bash
npm ls react react-dom next react-server-dom-webpack react-server-dom-turbopack react-server-dom-parcel
npm audit
```

## QA Checklist

- [ ] Hero con H1 claro + 1 CTA principal + 1 CTA secundario discreto
- [ ] Pricing máximo 3 planes y uno recomendado
- [ ] `/checkout`, `/success`, `/cancel` operativos
- [ ] Botón PayPal crea suscripción y retorna `subscription_id`
- [ ] Webhook verificado por firma y estado persistido
- [ ] Endpoint de entitlement responde acceso por plan
- [ ] Eventos de tracking disparan en cada interacción clave
- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run build`

## Nota de despliegue

Si despliegas con `next export` o sin backend Node, mueve `/api/paypal/webhook` y `/api/paypal/checkout-complete` a un microservicio/serverless con persistencia real (Postgres/KV) y conserva las mismas variables de entorno.

## Guest Checkout (tarjeta sin cuenta PayPal)

Puede aparecer según país, moneda, configuración de cuenta y evaluación de riesgo de PayPal. No se garantiza en todos los pagos.
