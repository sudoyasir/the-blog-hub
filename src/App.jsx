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
            <Route path='/' Component={Home} />
            <Route path='/blog/:id' Component={Blog} />
            <Route path='admin/login' Component={AdminLogin} />
            <Route path='admin/dashboard' Component={AdminDashboard} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
