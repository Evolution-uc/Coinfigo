/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],

  
    // "compilerOptions": {
    // //   "strict" : true,
    // //   "module": "esnext",
    // //   "target": "es6",
    // //   "jsx": "react",
    // //   "esModuleInterop": true,
    // //   "skipLibCheck": true,
    // //   "forceConsistentCasingInFileNames": true
    // // },
    // // "include": ["src/**/*"]
  
  
}

