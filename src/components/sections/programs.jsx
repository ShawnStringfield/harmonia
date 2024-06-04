import content from '../../assets/content.json';

export const Programs = () => {
  return (
    <section className='container mx-auto my-20'>
      <div className='text-center mb-10'>
        <h2 className='text-4xl font-bold'>Our Programs</h2>
        <p className='text-lg text-gray-600'>We offer a variety of programs to meet your needs.</p>
      </div>

      <div className='sm:grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center'>
        {content.programs.map((program, index) => (
          <div key={index} className='mb-8 sm:mb-0 border border-1 p-2 rounded-sm'>
            <h3>{program.title}</h3>
            <p className='text-gray-600 mt-2'>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
