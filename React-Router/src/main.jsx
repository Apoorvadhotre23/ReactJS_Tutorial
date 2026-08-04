
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Main_nested_page from './Component/Nested_Router/Main_nested_page.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Main_nested_page/>
  </BrowserRouter>,
)
