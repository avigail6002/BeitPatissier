import './App.css'
import { Sidebar } from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductsPage } from './pages/Products'
import DialogTest from "./pages/DialogTest"

export function App() {
  return (
    <>
      <BrowserRouter>
        <div className="h-screen w-screen flex flex-row-reverse">
          <Sidebar />
          <main className="flex-1 p-4 pr-40">
            <Routes>
              {/* <Route path="/" element={<h1 className="text-2xl font-bold">ברוכים הבאים למערכת TechUp</h1>} />
                  
                  */}

              {/* אבטחת ניתוב למנהל בלבד */}
              {/* <Route element={<ProtectedRoute />}> */}
              
                <Route path="/" element={<Login />} />
                <Route path="/מוצרים" element={<ProductsPage />} />              
              {/* </Route> */}
              <Route path="/dialog-test" element={<DialogTest />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}
