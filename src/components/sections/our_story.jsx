export const OurStory = () => {
  return (
    <section className='container mx-auto py-20'>
      <div className='sm:flex items-center'>
        <div className='w-full'>
          <h2 className='mb-4'>{"Harmonia's Story"}</h2>
          <p className=''>
            {
              'Harmonia is a visionary company that has been shaping the digital landscape since its inception. With a mission to empower individuals and communities, we strive to create sustainable solutions that make the world a better place. Through our innovative platforms, we enable people to connect, collaborate, and bring their ideas to life. Join us on this transformative journey and be a part of the Harmonia movement.'
            }
          </p>
        </div>
        <div className='w-full flex justify-end mt-8 sm:mt-0 pl-0 sm:pl-8'>
          <img src='https://placehold.co/600x600' alt='Hero' />
        </div>
      </div>
    </section>
  );
};
