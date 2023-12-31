import FeatureProduct from "./components/FeatureProduct";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TopProducts from "./components/TopProducts";
import Category from "./components/Category";

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  return (
    <>
    <Carousel responsive={responsive} showDots={true} >
     <img src="./images/banner2.jpg" alt="banner" style={{width:"100%",height:"50rem"}}/>
      <img src="./images/banner3.png"  alt="shopping" style={{width:"100%",height:"50rem"}}/>
      <img src="./images/banner-img.png" alt="banner" style={{width:"100%",height:"50rem"}}/>
      <img src="./images/banner1.jpg" alt="banner" style={{width:"100%" ,height:"50rem"}}/>
      </Carousel>
      <Category/>
      <FeatureProduct />
      <TopProducts/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
