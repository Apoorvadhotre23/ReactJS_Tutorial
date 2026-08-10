
import { createRoot } from 'react-dom/client'
import CurdMain from './Components/CURD Operations/CurdMain.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <CurdMain/>
  </BrowserRouter>,
)
