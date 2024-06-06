import { Hero } from '../components/sections/hero';
import { Feature } from '../components/sections/feature';
import { Services } from '../components/sections/services';
import { Values } from '../components/sections/values';
import { FAQ } from '../components/sections/faq';
export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Services />
      <Values />
      <FAQ />
    </>
  );
}
