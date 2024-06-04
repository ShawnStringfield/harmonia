import { Button } from '@/components/shadcn/ui/button';

export const Hero = () => {
  return (
    <>
      <div className='container'>
        <div className=' flex py-8 '>
          <div className='sm:w-full'>
            <h1 className='sm:text-5xl text-3xl mb-4'>Empowering individuals and communities for a better world</h1>
            <p>
              Empowering individuals and communities for a better worldAt Harmonia, we believe in the power of
              connection, collaboration, and sustainable solutions. Join us in creating a better world together.
            </p>
            <div className='flex gap-4 mt-4'>
              <Button variant='secondary'>Learn More</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
          <div className='hidden sm:flex justify-end w-full pl-8'>
            <img src='https://placehold.co/600x600' alt='Hero' />
          </div>
        </div>
        <div className='container sm:hidden'>
          <img src='https://placehold.co/600x600' alt='Hero' />
        </div>
      </div>
    </>
  );
};
