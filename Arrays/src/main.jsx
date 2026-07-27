import {createRoot} from 'react-dom/client'
import Table from './Components/LoopsInJSX/Table'
import Parent from './Components/LoopsInArray/Parent'

createRoot(document.getElementById("root")).render(
  <>
    <Table/>
    <Parent/>
  </>
)