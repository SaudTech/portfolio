import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

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
    </div>
  )
}

export default App