export const FAQ = () => {
  return (
    <section className='container mx-auto my-20'>
      <div className='text-center mb-10'>
        <h2 className='text-4xl font-bold'>Frequently Asked Questions</h2>
        <p className='text-lg text-gray-600'>Here are some common questions we get asked.</p>
      </div>

      <div className='sm:grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center'>
        <div className='border border-1 p-2 rounded-sm'>
          <h3>What is your return policy?</h3>
          <p className='text-gray-600 mt-2'>We offer a 30-day return policy on all products.</p>
        </div>
        <div className='border border-1 p-2 rounded-sm'>
          <h3>Do you ship internationally?</h3>
          <p className='text-gray-600 mt-2'>Yes, we ship to most countries around the world.</p>
        </div>
        <div className='border border-1 p-2 rounded-sm'>
          <h3>How long does shipping take?</h3>
          <p className='text-gray-600 mt-2'>Shipping times vary depending on your location.</p>
        </div>
        <div className='border border-1 p-2 rounded-sm'>
          <h3>Can I cancel my order?</h3>
          <p className='text-gray-600 mt-2'>You can cancel your order within 24 hours of placing it.</p>
        </div>
      </div>
    </section>
  );
};
