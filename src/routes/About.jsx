import { Button } from '@/components/shadcn/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* <section className='container mx-auto text-center mb-24 bg-heroabout bg-cover bg-left-bottom min-h-80'></section> */}
      <section className='container mx-auto'>
        <h2 className='my-8'>About Harmonia Connect</h2>
        At Harmonia Connect, we believe in the transformative power of technology and community to create a more
        sustainable and equitable world. Founded with a vision of leveraging digital innovation for social good, we are
        dedicated to empowering individuals and communities to connect, collaborate, and develop solutions for a better
        future.
        <h2 className='mt-16 mb-4'>Our Mission</h2>
        <p>
          Our mission is to harness the potential of technology to drive community engagement and environmental
          stewardship. We aim to provide tools, resources, and support that enable people to address local and global
          challenges effectively, fostering a collective impact that enhances both personal and environmental
          well-being.
        </p>
        <h2 className='mt-16 mb-4'>Our Vision</h2>
        <p>
          We envision a world where technology acts as a bridge, not a barrier, connecting people to the resources,
          knowledge, and networks they need to thrive. Through our initiatives, we strive to create vibrant, sustainable
          communities where every individual can contribute to and benefit from shared progress.
        </p>
      </section>
      <section className='container mx-auto bg-primary text-white py-16 my-16'>
        <h2 className='text-secondary mb-4'>Join Us</h2>
        <p>
          At Harmonia Connect, everyone has a role to play in building a better world. Whether you’re a volunteer,
          participant in our programs, or a supporter of our initiatives, your involvement makes a difference. Together,
          we can create a future where technology and community work hand-in-hand to promote well-being and
          sustainability.
        </p>
        <Link to='/contact'>
          <Button variant='secondary' className='text-white mt-8 hover:bg-accent'>
            Become a Member
          </Button>
        </Link>
      </section>
    </>
  );
}
