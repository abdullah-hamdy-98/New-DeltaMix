import Swiper from './components/swiper';
import Loader from './components/Loader';
import ChairmanSpeech from './components/ChairmanSpeech';
import Navbar from './components/Navbar';
import OurCompany from './components/OurCompany';
import Projects from './components/Projects'
import Major from './components/Major'
import VisCards from './components/VisCards'





function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <Swiper />
      <OurCompany />
      <ChairmanSpeech />
      <VisCards />
      <Projects />
      <Major />
    </>
  );
}

export default Home;