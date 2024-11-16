import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import AllNotes from './components/AllNotes.jsx'
import ViewNote from './components/ViewNote.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element= {<App/>} >
    <Route path='' element = {<Home/>}/>
    <Route path='all-notes' element = {<AllNotes/>}/>
    <Route path='all-notes/:id' element={<ViewNote/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
    <ToastContainer/>
  </Provider>,
)
