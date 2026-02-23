import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "@/app/assets/Pics/Bags/IMG-20251120-WA0064.jpg";
import img2 from "@/app/assets/Pics/Bags/IMG-20251120-WA0063.jpg";
import img3 from "@/app/assets/Pics/Bags/IMG-20251120-WA0050.jpg";
import img4 from "@/app/assets/Pics/Bags/IMG-20251120-WA0049.jpg";
import img5 from "@/app/assets/Pics/Bags/IMG-20251120-WA0044.jpg";
import img6 from "@/app/assets/Pics/Bags/IMG-20251120-WA0033.jpg";

import img7 from "@/app/assets/Pics/bag7.jpg";
import img8 from "@/app/assets/Pics/neckles8.jpg";
import img9 from "@/app/assets/Pics/tie9.jpg";
import { MoveRight } from "lucide-react";

const images = [img1, img2, img3, img4, img5, img6];

function BestSellers() {
  return (
    <div>
      <div className="flex justify-between items-center mt-20 px-16">
        <h1 className="font-bold text-xl ">Best Sellers</h1>
        <Button
          asChild
          className="group relative overflow-hidden rounded-none px-6 py-5 text-xs tracking-[0.25em] uppercase font-semibold text-white hover:bg-[#4b361a] transition-colors duration-500 cursor-pointer"
          size="sm"
        >
          <a href="#">SEE ALL BESTSELLERS</a>
        </Button>
      </div>
      <div className="flex justify-center items-center mt-6 px-16">
        <Carousel className="w-full">
          <CarouselContent className="-ml-2">
            {images.map((img, index) => (
              <CarouselItem key={index} className="basis-1/2 pl-2 lg:basis-1/3">
                <Image
                  src={img}
                  alt={`Product ${index + 1}`}
                  width={400}
                  height={500}
                  className="object-cover w-full h-auto"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-black text-white hover:bg-black hover:text-white cursor-pointer" />
          <CarouselNext className="bg-black text-white hover:bg-black hover:text-white cursor-pointer" />
        </Carousel>
      </div>

      <div className="flex justify-center items-center flex-wrap md:flex-nowrap mt-6 px-10 mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-black/20 "></div>

          <Image
            src={img7}
            alt="Bag"
            width={400}
            height={500}
            className="object-cover w-full h-[550px] "
          />
          <h2 className="absolute top-10 left-4 text-2xl font-bold text-white">
            Necklaces
          </h2>

          <Button className="group absolute top-80 left-4 rounded-xs p-6 bg-white text-black hover:bg-black hover:text-white duration-300 ease-in-out transition-colors cursor-pointer mt-6 font-bold px-8 flex items-center gap-2">
            SHOP NECKLACES
            <MoveRight className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <Image
            src={img9}
            alt="Tie"
            width={400}
            height={500}
            className="object-cover w-full h-[551px]"
          />
          <h2 className="absolute top-10 left-4 text-2xl font-bold text-white">
            Ties
          </h2>{" "}
          <Button className="group absolute top-80 left-4 rounded-xs p-6 bg-white text-black hover:bg-black hover:text-white duration-300 ease-in-out transition-colors cursor-pointer mt-6 font-bold px-8 flex items-center gap-2">
            SHOP TIES
            <MoveRight className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <Image
            src={img8}
            alt="Neckless"
            width={400}
            height={500}
            className="object-cover w-full h-[550px]"
          />
          <h2 className="absolute top-10 left-4 text-2xl font-bold text-white">
            Bags
          </h2>{" "}
          <Button className="group absolute top-80 left-4 rounded-xs p-6 bg-white text-black hover:bg-black hover:text-white duration-300 ease-in-out transition-colors cursor-pointer mt-6 font-bold px-8 flex items-center gap-2">
            SHOP BAGS
            <MoveRight className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
