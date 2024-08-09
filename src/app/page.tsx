import Swiper from './components/swiper';
import Loader from './components/Loader';
import ChairmanSpeech from './components/ChairmanSpeech';
import Navbar from './components/Navbar';
import OurCompany from './components/OurCompany';
import Projects from './components/Projects'
import Major from './components/Major'
import VisCards from './components/VisCards'
import VideoSection from './components/VideoSection'
import LastNews from './components/LastNews'
import Footer from './components/Footer'
import Cards from './components/Cards'


function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <Swiper />
     
      <LastNews />
      <VisCards />
      <Projects />
      <Major />
      <VideoSection />
      <OurCompany />
      <ChairmanSpeech />
      <Footer />

    </>
  );
}

export default Home;