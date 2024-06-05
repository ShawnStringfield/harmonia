import { Hero } from '../components/sections/hero';
import { Feature } from '../components/sections/feature';
import { Programs } from '../components/sections/programs';
import { Values } from '../components/sections/values';
import { FAQ } from '../components/sections/faq';
export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Values />
      <Programs />
      <FAQ />
    </>
  );
}
