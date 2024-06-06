import content from '../../assets/content.json';
import { Button } from '@/components/shadcn/ui/button';
import { Link } from 'react-router-dom';

export const Services = () => {
  return (
    <section className='container mx-auto my-20'>
      <div className='text-center mb-10'>
        <h2 className='text-4xl font-bold'>Our Programs</h2>
        <p className='text-lg text-gray-600'>We offer a variety of programs to meet your needs.</p>
      </div>

      <div className='sm:grid sm:grid-cols-2 md:grid-cols-2 gap-8 text-center md:mx-20'>
        {content.services.map((program, index) => (
          <div key={index} className='mb-8 sm:mb-0 p-8 rounded-md bg-white border'>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <Link to={program.link}>
              <Button className='mt-4 text-white hover:bg-primary' variant='secondary'>
                Learn More
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
