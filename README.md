# WorkBoard

Monorepo:

- `frontend/` - Expo (React Native) app (iOS/Android)
- `backend/` - Firebase Cloud Functions (Express API)

## Prereqs

- Node.js LTS
- Firebase CLI (`npm i -g firebase-tools`)
- Expo CLI (`npx expo` is enough)

## Local setup

### Frontend

```bash
npm i
npm run frontend:start
```

### Backend

```bash
npm i
npm run backend:serve
```

## Cloudinary setup (backend)

Recommended (production): set Firebase Functions config:

```bash
firebase functions:config:set cloudinary.cloud_name="..." cloudinary.api_key="..." cloudinary.api_secret="..."
```

Local emulator: copy `backend/functions/.env.example` to `backend/functions/.env` and fill values.

## Deployment

### Backend (Firebase)

```bash
npm run backend:deploy
```

### Frontend

Expo mobile builds should be done with EAS.
If you want a web build, run:

```bash
npm run frontend:web:build
```

Then deploy the produced `frontend/dist` (or `frontend/web-build`) to a static host.

## Render.com (frontend web) notes

Render works best for the web export only:

- **Build command**: `npm run frontend:web:build`
- **Publish directory**: `frontend/dist`
