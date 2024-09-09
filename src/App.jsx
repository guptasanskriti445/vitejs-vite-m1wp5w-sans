import { Button } from 'flowbite-react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import DefaultFooter from './components/DefaultFooter';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import LoginForm from './pages/login/LoginForm';
import RegistationForm from './pages/register/RegistationForm';
function App() {
  const [isLogin, setIsLogin] = useState(true);
  const user = useSelector((state) => state.auth.user);
  return (
    <>
    
      <div className="max-w-screen-2xl mx-auto md:px-4">
        <Header />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default App;
