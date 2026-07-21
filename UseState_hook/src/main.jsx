
import { createRoot } from 'react-dom/client'
import Counter from './Components/Counter.jsx'
import ToggleFeature from './Components/ToggleFeature.jsx'
import ChangeText from './Components/ChangeText.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Counter/>
    <ToggleFeature/>
    <ChangeText/>
  </>
)
