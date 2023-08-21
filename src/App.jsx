import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useState } from "react";
import StayTop from "./components/StayTop";
import cd_customer from './assets/icon/cd-customer-support-01.svg'


const App = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <main className='min-h-screen flex flex-col overflow-hidden'>
      <StayTop />
      <Nav isOpen={isOpen} setOpen={setOpen} />
      <div
        className={`min-h-screen flex flex-col min-w-full duration-300 
      ${isOpen ? 'ml-[15rem]' : ''}`}
      >
        <Outlet />
        <Footer />
      </div>
      <div className='btn-primary p-4 fixed right-16 bottom-16'>
        <img src={cd_customer} alt='cd_customer' className='w-8 h-8' />
      </div>
    </main>
  );
};

export default App;
