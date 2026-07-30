
import { createRoot } from 'react-dom/client'
import UserCard from './Components/Inline_CSS/UserCard'
import Dynamic from './Components/Dynamic_&_Conditional_Style/Dynamic'
import ConditinalStyle from './Components/Dynamic_&_Conditional_Style/ConditinalStyle'
import External from './Components/External_css/External'



createRoot(document.getElementById('root')).render(
  <>
    <h3 style={{textAlign:"center"}}>User Details</h3>
    <UserCard/>
    <hr />
    <Dynamic/>
    <hr />
    <ConditinalStyle/>
    <hr />
    <External/>
    
  </>,
)
