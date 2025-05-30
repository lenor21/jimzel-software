import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { BreadCrumb } from 'primereact/breadcrumb';

const NavBar = () => {
  const home = { icon: 'pi pi-home', url: '/dashboard' };

  const items = [
    { label: 'MASTER TABLE', url: '/master-table' },
    { label: 'Employee', url: '/master-table/employees' },
    { label: 'Employee', disabled: true },
  ];

  return (
    <div>
      <div className='bg-[#07796b] flex flex-col gap-1 items-center lg:flex-row'>
        <h1 className='flex bg-[#034d40] text-white max-w-fit py-2 pr-5'>
          <Link to='/'>
            <img src={logo} alt='logo' className='w-[42px] h-42px mr-3 ml-2' />
          </Link>
          <p className='text-5xl font-bold flex items-center'>PAYROLL</p>
        </h1>

        <p className='text-white text-xl lg:pl-5 lg:text-2xl font-semibold'>
          JIMZEL SOFTWARE <br className='lg:hidden' /> (Your Business Name)
        </p>
      </div>
      <div className='shadow-md'>
        <BreadCrumb
          model={items}
          home={home}
          className='text-[#a0a0a0] p-2 text-sm whitespace-nowrap'
        />
      </div>
    </div>
  );
};

export default NavBar;
