import {createRoot} from 'react-dom/client'
import Table from './Components/LoopsInJSX/Table'
import Parent from './Components/LoopsInArray/Parent'
import Clock from '../../Scenario-based-tasks/src/Components/DigitalClock/Clock'

createRoot(document.getElementById("root")).render(
  <>
    <Table/>
    <Parent/>
    <Clock/>
  </>
)