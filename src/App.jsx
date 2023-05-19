import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/home/index'
import Blog from '../src/pages/blog/index'
import AdminLogin from './pages/admin/adminLogin';
import AdminDashboard from './pages/admin/dashboard';

function App() {
  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/the-blog-hub' Component={Home} />
            <Route path='/the-blog-hub/blog/:id' Component={Blog} />
            <Route path='/the-blog-hub/admin/login' Component={AdminLogin} />
            <Route path='/the-blog-hub/admin/dashboard' Component={AdminDashboard} />
          </Routes>

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
