import Image from "next/image";
import img10 from "@/app/assets/Pics/bag10.jpg";
import img11 from "@/app/assets/Pics/bag11.jpg";
import img12 from "@/app/assets/Pics/bag12.jpg";
import { Button } from "./ui/button";
import Link from "next/link";

function ArtisanSpotlight() {
  return (
    <section className="relative py-20 px-6 md:px-16  overflow-hidden">
      {/* Decorative background text */}
      <span className="absolute top-8 left-1/2 -translate-x-1/2 text-[10vw] font-serif font-bold text-[#E8DDD0] select-none whitespace-nowrap tracking-widest uppercase pointer-events-none z-0">
        Artisan
      </span>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Block */}
        <div className="flex flex-col justify-center gap-6">
          <p className="text-xs tracking-[0.3em] uppercase text-[#9C8060] font-medium">
            Craftsmanship &amp; Heritage
          </p>
          <h2
            className="text-5xl md:text-6xl font-serif leading-tight text-[#2C1F0E]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Artisanal
            <br />
            <em className="italic text-[#9C8060]">Excellence</em>
          </h2>
          <div className="w-12 h-[2px] bg-[#9C8060]" />
          <p
            className=" leading-relaxed text-base max-w-md"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.1rem",
            }}
          >
            Each piece in our collection is a testament to the skill and
            dedication of our artisans. From intricately woven handbags to
            meticulously stitched leather accessories, every item is crafted
            with precision and attention to detail.
          </p>
          <div className="mt-4">
            <Link href="/shop">
              {" "}
              <Button className="group relative overflow-hidden rounded-none px-10 py-5 text-xs tracking-[0.25em] uppercase font-semibold text-white hover:bg-[#4b361a] transition-colors duration-500 cursor-pointer">
                Discover Collection
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Image Mosaic */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[480px]">
          {/* Top Left - tall spanning image */}
          <div className="row-span-2 relative group overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={img12}
              alt="Artisan Bag"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1F0E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Top Right */}
          <div className="relative group overflow-hidden rounded-2xl shadow-md">
            <Image
              src={img10}
              alt="Artisan Bag"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1F0E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Bottom Right */}
          <div className="relative group overflow-hidden rounded-2xl shadow-md">
            <Image
              src={img11}
              alt="Artisan Bag"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16 flex items-center gap-4">
        <div className="flex-1 h-[1px] bg-[#D4C4AD]" />
        <span className="text-[10px] tracking-[0.4em] uppercase text-black">
          Est. Chic Design Collection
        </span>
        <div className="flex-1 h-[1px] bg-[#D4C4AD]" />
      </div>
    </section>
  );
}

export default ArtisanSpotlight;
