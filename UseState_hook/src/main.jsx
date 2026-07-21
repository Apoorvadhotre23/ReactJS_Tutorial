
import { createRoot } from 'react-dom/client'
import Counter from './Components/Counter.jsx'
import ToggleFeature from './Components/ToggleFeature.jsx'
import ChangeText from './Components/ChangeText.jsx'
import ToggleTheam from './Components/ToggleTheam.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Counter/>
    <ToggleFeature/>
    <ChangeText/>
    <ToggleTheam/>
  </>
)
