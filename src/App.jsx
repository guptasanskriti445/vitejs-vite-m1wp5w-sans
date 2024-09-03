import { Button } from 'flowbite-react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import DefaultFooter from './components/DefaultFooter';
function App() {
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
