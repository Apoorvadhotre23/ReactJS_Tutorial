
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainPageD from './Component/Dynamic Router/MainPageD.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainPageD/>
  </BrowserRouter>,
)
