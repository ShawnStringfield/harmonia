import content from '../../assets/content.json';

export const Values = () => {
  return (
    <section className='my-20 py-10 border-b-[1px] bg-primary text-white'>
      <div className='container mx-auto'>
        <div className='md:flex'>
          <div className='md:w-2/4 mr-8 mb-8 self-center'>
            <p className='text-accent'>Core Values</p>
            <h2 className='text-white text-4xl'>
              Guiding Principles: Connection, Eco-Consciousness, Innovation, Diversity, and Transparency
            </h2>
          </div>
          <div className='md:w-2/4 flex justify-end'>
            <div className='md:grid grid-cols-2 gap-8'>
              {content.values.map((value, index) => (
                <div key={index} className='my-4'>
                  <h2 className='text-lg text-accent sm:text-xl mb-4'>{value.title}</h2>
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
