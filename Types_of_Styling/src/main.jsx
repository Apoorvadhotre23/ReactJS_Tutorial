
import { createRoot } from 'react-dom/client'
import UserCard from './Components/Inline_CSS/UserCard'



createRoot(document.getElementById('root')).render(
  <>
    <h3 style={{textAlign:"center"}}>User Details</h3>
    <UserCard/>
  </>,
)
