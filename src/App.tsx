import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home/Home'
import DefaultLayout from "./DefaultLayout";
import CompanyProjects from "./pages/CompanyProjects";
import Loader from "./components/Loader";
import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {
  return (
    <div>
      <Loader />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:companyName" element={<CompanyProjects />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </div>
  )
}

export default App