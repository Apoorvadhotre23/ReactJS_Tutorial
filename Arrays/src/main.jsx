import {createRoot} from 'react-dom/client'
import Table from './Components/LoopsInJSX/Table'
import Parent from './Components/LoopsInArray/Parent'
import MainPage from './Components/NestedLoop/MainPage'


createRoot(document.getElementById("root")).render(
  <>
    <Table/>
    <Parent/>
    <MainPage/>
  </>
)