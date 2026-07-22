
import { createRoot } from 'react-dom/client'
import UserParent from './Components/Example1/UserParent.jsx'
import Example2Parent from './Components/Example2/Example2Parent.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <UserParent/>
    <Example2Parent/>
  </>
)
