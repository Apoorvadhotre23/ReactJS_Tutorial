
import { createRoot } from 'react-dom/client'
import Counter from './Components/Counter.jsx'
import ToggleFeature from './Components/ToggleFeature.jsx'
import ChangeText from './Components/ChangeText.jsx'
import ToggleTheam from './Components/ToggleTheam.jsx'
import Show_Hide_password from './Components/Show_Hide_password.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Counter/>
    <hr />
    <ToggleFeature/>
    <hr />
    <ChangeText/>
    <hr />
    <ToggleTheam/>
    <hr />
    <Show_Hide_password/>
    <hr />
  </>
)
