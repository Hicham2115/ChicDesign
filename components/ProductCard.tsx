import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { StaticImageData } from "next/image";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image: StaticImageData | string;
  category?: string;
};

const ProductCard = ({
  id,
  name,
  price,
  image,
  category,
}: ProductCardProps) => {
  return (
    <Card
      className="group overflow-hidden border border-[#E5D9C8] hover:border-[#C9A96E]/50 rounded-2xl bg-white hover:shadow-xl hover:shadow-[#9C6C30]/10 transition-all duration-500"
      style={{ fontFamily: "serif" }}
    >
      {/* ── Image ── */}
      <Link href={`/product/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-[#F7F3EE]">
          <Image
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            src={image}
            alt={name}
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#1A0F05]/0 group-hover:bg-[#1A0F05]/20 transition-colors duration-500" />

          {/* Quick view pill — slides up on hover */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span className="whitespace-nowrap px-5 py-2 bg-[#F7F3EE]/90 backdrop-blur-sm text-[#2C1F0E] text-[10px] tracking-[0.25em] uppercase">
              View Details
            </span>
          </div>
        </div>
      </Link>

      {/* ── Content ── */}
      <CardContent className="p-5">
        {/* Category */}
        {category && (
          <p className="text-md font-bold uppercase text-[#9C6C30] mb-2">
            {category}
          </p>
        )}

        {/* Divider */}
        <div className="h-[1px] bg-[#E5D9C8] group-hover:bg-[#C9A96E]/40 transition-colors duration-500 mb-3" />

        {/* Name */}
        <Link href={`/product/${id}`}>
          <h3 className="font-bold text-xl text-[#2C1F0E] group-hover:text-[#9C6C30] transition-colors duration-300  mb-3">
            {name}
          </h3>
        </Link>

        {/* Price row */}
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold text-[#2C1F0E]">
            {price.toFixed(2)}{" "}
            <span className="text-sm text-[#9C8070] tracking-widest">DH</span>
          </p>

          {/* Arrow button */}
          <Link
            href={`/product/${id}`}
            className="flex items-center justify-center w-8 h-8 border border-[#C4B49A] text-[#9C8070] hover:border-[#9C6C30] hover:text-[#9C6C30] transition-colors duration-300 rounded-none"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
