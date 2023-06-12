import Header from './components/Header';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className='bg-default font-epilogue min-h-screen sm:pb-[126px] pb-[92px]'>
      <Header />
      <Home />
      {/*<Comp />*/}
      <ToastContainer />
    </div>
  );
}
