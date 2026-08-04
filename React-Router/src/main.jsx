
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainPage2 from './Component/Router_2/MainPage2.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <MainPage2/>
  </BrowserRouter>,
)
