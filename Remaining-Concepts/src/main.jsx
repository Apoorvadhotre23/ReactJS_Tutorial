
import { createRoot } from 'react-dom/client'
import DrivedState from './Components/DerivedState/DerivedState'
import CartTotal from './Components/DerivedState/CartTotal'
import Parent_liftState from './Components/Lifting_State/Parent_liftState'
import App2 from './Components/Lifting_State/Lifting_state_ex2/App2'
import Object from './Components/Updating_Objects/Object'


createRoot(document.getElementById('root')).render(
  <>
    <DrivedState/>
    <hr />
    <CartTotal/>
    <hr />
    <Parent_liftState/>
    <hr />
    <App2/>
    <hr />
    <Object/>
  </>,
)
