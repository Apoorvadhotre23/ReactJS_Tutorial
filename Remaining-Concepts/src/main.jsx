
import { createRoot } from 'react-dom/client'
import DrivedState from './Components/DerivedState/DerivedState'
import CartTotal from './Components/DerivedState/CartTotal'


createRoot(document.getElementById('root')).render(
  <>
    <DrivedState/>
    <hr />
    <CartTotal/>
  </>,
)
