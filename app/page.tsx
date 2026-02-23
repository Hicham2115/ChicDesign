import Image from "next/image";
import hero from "@/app/assets/hero.jpg";
import { Playfair_Display, Mulish } from "next/font/google";
import { Button } from "@/components/ui/button";
import BestSellers from "@/components/BestSellers";
import ArtisanSpotlight from "@/components/ArtisanSpotlight";
import ContactUs from "@/components/ContactUs";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="min-h-screen ">

      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Text content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1
            className={`${playfair.className} text-white text-4xl md:text-6xl font-bold`}
          >
            Where art meets functionality
          </h1>
          <p className="text-white text-lg md:text-xl max-w-xl mt-4">
            Our curated collection is crafted by skilled artisans, blending
            traditional techniques with modern design.
          </p>

          <Button className="rounded-xs p-6 bg-white text-black hover:bg-black hover:text-white duration-300 ease-in-out  transition-colors  cursor-pointer mt-6 font-bold px-8 ">
            VIEW SELECTION
          </Button>
        </div>
      </div>
      <BestSellers />
      <ArtisanSpotlight />
      <ContactUs />
      
    </div>
  );
}
