# Portfolio SPA

A modern, responsive Single Page Application portfolio built with Angular and Firebase.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v18.0.2)
- Firebase CLI

### Installation

1. Clone the repository
```bash
git clone [your-repository-url]
cd portfolio-spa
```

2. Install dependencies
```bash
npm install
```

3. Install Firebase tools globally
```bash
npm install -g firebase-tools
```

### Development

Start the development server:
```bash
ng serve
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Firebase Local Development

Run Firebase emulators:
```bash
firebase emulators:start
```

## 🛠️ Build

### Production Build

```bash
ng build
```
Build artifacts will be stored in the `dist/` directory.

### SSR Build

```bash
npm run build:ssr
npm run serve:ssr
```

## 🧪 Testing

### Running Unit Tests

```bash
ng test
```
Executes unit tests via [Karma](https://karma-runner.github.io).

### Running End-to-End Tests

```bash
ng e2e
```

## 🧹 Project Cleanup

### Windows

Run the cleanup script:
```bash
clean.bat
```

Or manually:
```bash
rmdir /s /q dist
rmdir /s /q .angular
rmdir /s /q coverage
rmdir /s /q node_modules
rmdir /s /q .firebase
del /f /q debug.log
del /f /q firebase-debug.log
del /f /q ui-debug.log
```

### Unix/MacOS

```bash
rm -rf dist/
rm -rf .angular/
rm -rf coverage/
rm -rf node_modules/
rm -rf .firebase/
rm -f debug.log
rm -f firebase-debug.log
rm -f ui-debug.log
```

## 📁 Project Structure

```
portfolio-spa/
├── src/
│   ├── app/
│   ├── assets/
│   └── environments/
├── functions/
├── firebase.json
└── angular.json
```

## 🔧 Configuration

### Environment Variables

Create environment files in `src/environments/`:
- `environment.ts` for development
- `environment.prod.ts` for production

### Firebase Configuration

Update Firebase configuration in:
- `firebase.json`
- `.firebaserc`

## 📦 Dependencies

- Angular v18.0.2
- Firebase
- Angular Universal (SSR)

## 🚀 Deployment

### Deploy to Firebase

1. Build the project:
```bash
ng build
```

2. Deploy to Firebase:
```bash
firebase deploy
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

