
import { createRoot } from 'react-dom/client'
import MainPage from './Component/Router/MainPage.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <MainPage/>
  </BrowserRouter>,
)
