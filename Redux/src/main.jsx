import {Provider} from "react-redux"
import { createRoot } from 'react-dom/client'
import store from "./redux/store.js"
import App from "./Redux_Example/App.jsx"

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>,
)
