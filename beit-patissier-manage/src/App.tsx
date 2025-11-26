import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/Products'
import AddProduct from './pages/AddProduct'

function App() {
 
  return (
    <> 
  
      <BrowserRouter>
            <div className="h-screen w-screen flex flex-row-reverse">
              <Sidebar />
              <main className="flex-1 p-4 pr-40">
                <Routes>
                  {/* <Route path="/" element={<h1 className="text-2xl font-bold">ברוכים הבאים למערכת TechUp</h1>} />
                  
                  */}


                  {/* <Route element={<ProtectedRoute />}> */}
                  {/* אבטחת ניתוב למנהל בלבד */}
                    <Route path="/מוצרים" element={<ProductsPage />} />
                    {/* </Route> */}
                </Routes>
              </main>
             
            </div>
               <AddProduct />
      </BrowserRouter>
      
    </>
  )
}

export default App
