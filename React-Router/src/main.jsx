
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Main_nested_page2 from './Component/Nested_Router_2/Main_nested_page2.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Main_nested_page2/>
  </BrowserRouter>,
)
