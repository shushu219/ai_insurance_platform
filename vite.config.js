import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ai_insurance_platform/', // 為了上傳github加的
  plugins: [react()],
})
