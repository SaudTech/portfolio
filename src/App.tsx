import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home/Home'
import DefaultLayout from "./DefaultLayout";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </div>
  )
}

export default App