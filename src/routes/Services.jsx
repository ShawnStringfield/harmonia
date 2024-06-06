import content from '../assets/content.json';
import { ImBooks } from 'react-icons/im';
import { FaLaptop } from 'react-icons/fa';
import { FcMoneyTransfer } from 'react-icons/fc';
import { IoIosPeople } from 'react-icons/io';

const getIcon = (icon) => {
  switch (icon) {
    case 'ImBooks':
      return <ImBooks size='48' className='text-secondary' />;
    case 'FaLaptop':
      return <FaLaptop size='48' className='text-secondary' />;
    case 'FcMoneyTransfer':
      return <FcMoneyTransfer size='48' className='text-secondary' />;
    case 'IoIosPeople':
      return <IoIosPeople size='48' className='text-secondary' />;
    default:
      return null;
  }
};

export default function Services() {
  return (
    <>
      <section className=''>
        <section className='flex justify-center mt-24 '>
          <div className='min-h-80 text-center sm:px-16 bg-hero2 bg-[center_top_8rem] bg-[length:300px_300px] bg-no-repeat'>
            <h1 className='text-4xl md:text-7xl mb-8'>Harnessing Technology and Community for Lasting Impact</h1>
          </div>
        </section>

        <section className=''>
          {content.services_page.map((section, index) => (
            <section
              key={index}
              className={`container mx-auto sm:px-16 sm:flex gap-24 py-16 border-t-[1px] ${section.classes}`}
            >
              <div className='md:w-1/2 self-center'>
                {getIcon(section.icon)}
                <h2>{section.title}</h2>
              </div>

              <div className='md:w-1/2'>
                <h3 className=''>{section.subheading}</h3>
                {section.bullet.map((item, index) => (
                  <div key={index} className='mt-8'>
                    <strong>{item.bulletheading}:</strong> {item.description}
                    <span>{item.bullet}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </section>
      </section>
    </>
  );
}
