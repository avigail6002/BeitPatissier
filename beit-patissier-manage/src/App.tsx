import './App.css'
import { Sidebar } from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductsPage } from './pages/Products'
import DialogTest from "./pages/DialogTest"
import { GoogleOAuthProvider } from '@react-oauth/google'
import Login from './pages/login'


const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <BrowserRouter>
          <div className="h-screen w-screen flex flex-row-reverse">
            <Sidebar />
            <main className="flex-1 p-4 pr-40">
              <Routes>
                <Route path="/" element={<Login/>} />
                {/* <Route path="/" element={<h1 className="text-2xl font-bold">ברוכים הבאים למערכת TechUp</h1>} />
                  
                  */}


              {/* <Route element={<ProtectedRoute />}> */}
              {/* אבטחת ניתוב למנהל בלבד */}
                              <Route path="/" element={<Login />} />
              <Route path="/מוצרים" element={<ProductsPage />} />
              {/* </Route> */}
              <Route path="/dialog-test" element={<DialogTest />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
        </GoogleOAuthProvider>

    </>
  );
}
