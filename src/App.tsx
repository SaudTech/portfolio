import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home/Home'
import DefaultLayout from "./DefaultLayout";
import Project from "./pages/Project/index";


const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vizzhy" element={<Project.Vizzhy />} />
            <Route path="/drvoxel" element={<Project.DrVoxel />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </div>
  )
}

export default App