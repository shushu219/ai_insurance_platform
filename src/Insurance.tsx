import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OtherModel from './InsuranceComponents/OtherModel.tsx'
import ModelDetail from './InsuranceComponents/ModelDetail.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/ai_insurance_platform/">
      <Routes>
        <Route path="/" element={<OtherModel />} />
        <Route path="/model/:id" element={<ModelDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
