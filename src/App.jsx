import { RouterProvider } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from './components/global/router/AppRouter'
import { Bounce, ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <RouterProvider router={AppRouter} />
    </>
  )
}

export default App
