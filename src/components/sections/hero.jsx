import heroBG from '@/assets/hero5_bg.jpg';
import { Button } from '@/components/shadcn/ui/button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <>
      <div className='md:hidden sm:w-3/4 sm:max-w-screen-lg mx-auto mb-8'>
        <img src={heroBG} alt='Hero' className='' />
      </div>
      <div className='container'>
        <div className='flex'>
          <div className='sm:w-full self-center text-center'>
            <h1 className='sm:text-5xl text-3xl mb-4'>Empowering individuals and communities for a better world</h1>
            <p>
              Empowering individuals and communities for a better worldAt Harmonia, we believe in the power of
              connection, collaboration, and sustainable solutions. Join us in creating a better world together.
            </p>
            <div className='flex justify-center gap-4 mt-8'>
              <Link to='/about'>
                <Button variant='secondary' className='text-white hover:bg-primary'>
                  Learn More
                </Button>
              </Link>
              <Link to='/contact'>
                <Button className='hover:bg-secondary'>Become a Member</Button>
              </Link>
            </div>
          </div>
          <div className='hidden md:flex justify-end align-middle h-full'>
            <img src={heroBG} alt='Hero' />
          </div>
        </div>
      </div>
    </>
  );
};
