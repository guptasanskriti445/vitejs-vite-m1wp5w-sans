import { Button } from 'flowbite-react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-4">
        <Header />
        <div className="min-h-[calc(100vh - 400px)]">
          <Outlet />
        </div>
        <footer>footer</footer>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
