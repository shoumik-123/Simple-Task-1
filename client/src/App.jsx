import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CreatePage from "./pages/CreatePage.jsx";
import {Navigate, redirect, Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import StudentListPage from "./pages/StudentListPage.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";
import Loader from "./components/Loader.jsx";

function App() {

  return (
    <>

      <BrowserRouter>
          <Routes>
              <Route path = "/create" element ={<CreatePage/>}/>
              <Route path = "/list" element ={<StudentListPage/>}/>
              <Route path = "/update/:id" element ={<UpdatePage/>}/>
              <Route path="*" element={<Navigate to="/create" />} />

          </Routes>
        <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
          <Loader/>
      </BrowserRouter>
    </>
  )
}

export default App
