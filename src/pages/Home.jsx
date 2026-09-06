import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Listings from "../components/Listings";
import Story from "../components/Story";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <Features />
      <Listings />
      <Story />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
