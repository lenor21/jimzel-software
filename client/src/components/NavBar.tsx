import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <div className='bg-[#07796b] flex items-center'>
      <h1 className='flex bg-[#034d40] text-white max-w-fit py-2 pr-5'>
        <Link to='/'>
          <img src={logo} alt='logo' className='w-[42px] h-42px mr-3 ml-2' />
        </Link>
        <p className='text-5xl font-bold flex items-center'>PAYROLL</p>
      </h1>

      <p className='text-white pl-5 text-2xl font-semibold'>
        JIMZEL SOFTWARE (Your Business Name)
      </p>
    </div>
  );
};

export default NavBar;
