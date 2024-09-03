import { Carousel } from "flowbite-react";
import heroImg1 from "../assets/hero1.avif"
import heroImg2 from "../assets/hero2.avif"
import heroImg3 from "../assets/hero3.avif"
import heroImg4 from "../assets/Media.jpg"
const Hero = () =>
{
 return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src={heroImg1} alt="..." />
        <img src={heroImg4} alt="..." />
        <img src={heroImg3} alt="..." />
      </Carousel>
    </div>
  );
}
export default Hero