import content from '../../assets/content.json';

export const Values = () => {
  return (
    <section className='my-10'>
      <div className='container mx-auto my-20'>
        <div className='md:flex'>
          <div className='md:w-2/4'>
            <p>Tagline</p>
            <h2>Big ole heading</h2>
          </div>
          <div className='md:w-2/4 flex justify-end'>
            <div className='md:grid grid-cols-2 gap-8'>
              {content.values.map((value, index) => (
                <div key={index} className='my-8'>
                  <h2 className='text-lg sm:text-2xl mb-4'>{value.title}</h2>
                  <p className=''>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
