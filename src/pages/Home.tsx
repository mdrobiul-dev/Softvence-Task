import Buildfor from "../components/Buildfor";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Questions from "../components/Questions";
import Review from "../components/Review";

const Home = () => {
  return (
    <>
    {/* header section */}
     <div className="relative">
      <div className="hidden lg:block h-fit w-fit absolute top-0 left-0 -z-10">
          <img
            src="/images/Ellipseleft.png"
            className="h-full w-full object-cover"
            alt="background"
          />
        </div>
     <Header />
    <Hero />

     </div>

      {/* card section */}
     <Cards />

      {/* Build for Everyone section */}
      <Buildfor />

      {/* What Our Users Are Saying section */}
     <Review />

      {/* Frequently Asked Questions */}
     <Questions />

      {/* footer */}
     <Footer />
    </>
  );
};

export default Home;
