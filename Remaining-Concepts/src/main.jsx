
import { createRoot } from 'react-dom/client'
import DrivedState from './Components/DerivedState/DerivedState'
import CartTotal from './Components/DerivedState/CartTotal'
import Parent_liftState from './Components/Lifting_State/Parent_liftState'


createRoot(document.getElementById('root')).render(
  <>
    <DrivedState/>
    <hr />
    <CartTotal/>
    <hr />
    <Parent_liftState/>
  </>,
)
