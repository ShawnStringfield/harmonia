import content from '../../assets/content.json';

export const Feature = () => {
  return (
    <section className='bg-gray-100 my-10'>
      <div className='container mx-auto py-20'>
        <div className='md:grid grid-cols-3 gap-8'>
          {content.featured.map((item, index) => (
            <div key={index} className='my-8'>
              <h2 className='text-lg sm:text-2xl mb-4'>{item.title}</h2>
              <p className=''>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
