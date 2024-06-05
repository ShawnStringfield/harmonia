import heroBG from '@/assets/hero5_bg.png';
import { Button } from '@/components/shadcn/ui/button';

export const Hero = () => {
  return (
    <>
      <div className='sm:hidden w-full'>
        <img src={heroBG} alt='Hero' />
      </div>
      <div className='container'>
        <div className='flex py-8 '>
          <div className='sm:w-full self-center'>
            <h1 className='sm:text-5xl text-3xl mb-4'>Empowering individuals and communities for a better world</h1>
            <p>
              Empowering individuals and communities for a better worldAt Harmonia, we believe in the power of
              connection, collaboration, and sustainable solutions. Join us in creating a better world together.
            </p>
            <div className='flex gap-4 mt-4'>
              <Button variant='secondary' className='text-white'>
                Learn More
              </Button>
              <Button>Sign Up</Button>
            </div>
          </div>
          <div className='hidden sm:flex justify-end align-middle w-full'>
            <img src={heroBG} alt='Hero' />
          </div>
        </div>
      </div>
    </>
  );
};
