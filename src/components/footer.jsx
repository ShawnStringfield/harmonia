import { Link } from 'react-router-dom';
import { navLinks } from '../config/navLinks';
export const Footer = () => {
  return (
    <footer className='flex justify-center p-8 sm:p-16 mt-20 bg-footer bg-cover bg-top min-h-[400px]'>
      <div></div>
      <div>
        <ul className='flex space-x-4 bg-white/40 px-4 py-2 rounded-sm'>
          {navLinks.map((item, index) => (
            <li key={index} className='[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]'>
              <Link className='text-white font-bold hover:text-blue-500' to={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
