import content from '../../assets/content.json';
import { IoPeopleCircle } from 'react-icons/io5';
import { ImBooks } from 'react-icons/im';
import { FcLandscape } from 'react-icons/fc';

const getIcon = (icon) => {
  switch (icon) {
    case 'IoPeopleCircle':
      return <IoPeopleCircle size='48' className='text-secondary' />;
    case 'ImBooks':
      return <ImBooks size='48' className='text-secondary' />;
    case 'FcLandscape':
      return <FcLandscape size='56' className='text-primary mt-[-8px]' />;

    default:
      return null;
  }
};

export const Feature = () => {
  return (
    <section className='my-20 text-center border-slate border-t-[1px] border-b-[1px]'>
      <div className='container mx-auto py-20'>
        <div className='md:grid grid-cols-3 gap-8'>
          {content.featured.map((item, index) => (
            <div key={index} className='my-8'>
              <p className='flex justify-center mb-4'>{getIcon(item.icon)}</p>
              <h2 className='text-lg sm:text-2xl mb-4'>{item.title}</h2>
              <p className=''>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
