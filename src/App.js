import React ,{useState,useEffect}from 'react'
import Header from './components/Header';
import SideDrawer from './components/SideDrawer';
import Form from './components/Form';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';
function App() {
  const [{sidebarShow, bankdetailsShow},dispatch]=useStateValue();
  return (
    
    <div className="w-screen h-full flex flex-col">
      <Header></Header>
      <div className="hidden md:flex w-full h-full mt-1 p-2">
        <div className='w-1/5 p-0 border-r-[1px]'>
        <SideDrawer></SideDrawer>
        </div><div className='p-6 w-4/5'>
        {bankdetailsShow && <Form></Form>}</div>
      </div>
      <div className='w-full h-full md:hidden'>
      {sidebarShow && <SideDrawer></SideDrawer>}
       {!sidebarShow && bankdetailsShow &&   <Form></Form>}
      </div>
    </div>
  );
}

export default App;
