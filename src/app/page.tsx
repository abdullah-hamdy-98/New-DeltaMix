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
import Search from './components/SearchBox'
import Mobile from './components/MobileVersion'


function Home() {
  return (
    <>
      <Loader />
      <Mobile />
      <Navbar />
      <Search />
      <Swiper />
      <ChairmanSpeech />
      <LastNews />
      <VisCards />
      <Projects />
      <Major />
      <VideoSection />
      <OurCompany />
      <Footer />

    </>
  );
}

export default Home;