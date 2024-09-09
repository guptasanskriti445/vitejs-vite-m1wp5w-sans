import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import LoginForm from './pages/login/LoginForm';
// import RegistationForm from './pages/register/RegistationForm';
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const user = useSelector((state) => state.auth.user);
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img
          src="/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          TypingCat
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/registation">
        <Button>Get started</Button>
        </Link>
        {isLogin ? (
              <>
               <Link to="/typing-speed-test">
        <Button>Get started</Button>
        </Link>
              </>
            ) : (
              <>
                {/* Already have an account?{' '} */}
                <Button  onClick={() => setIsLogin(true)}>
                Get started
                </Button>
              </>
            )}
        <Navbar.Toggle />
        {/* <div className="App">
      {user ? (
        <h2>Welcome, {user.username}!</h2>
      ) : (
        <>
          {isLogin ? <LoginForm /> : <RegistationForm />}
          <p className="text-center">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <button className="text-blue-500" onClick={() => setIsLogin(false)}>
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button className="text-blue-500" onClick={() => setIsLogin(true)}>
                  Login
                </button>
              </>
            )}
          </p>
        </>
      )}
    </div> */}
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
