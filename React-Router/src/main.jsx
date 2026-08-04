
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Mainpage from './Component/Router_3/Mainpage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Mainpage/>
  </BrowserRouter>,
)
