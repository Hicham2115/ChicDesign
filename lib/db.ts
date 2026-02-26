import bag1 from "@/app/assets/Pics/Bags/IMG-20251120-WA0031.jpg";
import bag2 from "@/app/assets/Pics/Bags/IMG-20251120-WA0032.jpg";
import bag3 from "@/app/assets/Pics/Bags/IMG-20251120-WA0033.jpg";
import bag4 from "@/app/assets/Pics/Bags/IMG-20251120-WA0038.jpg";
import bag5 from "@/app/assets/Pics/Bags/IMG-20251120-WA0039.jpg";
import bag6 from "@/app/assets/Pics/Bags/IMG-20251120-WA0040.jpg";
import bag7 from "@/app/assets/Pics/Bags/IMG-20251120-WA0041.jpg";
import bag8 from "@/app/assets/Pics/Bags/IMG-20251120-WA0042.jpg";
import bag9 from "@/app/assets/Pics/Bags/IMG-20251120-WA0043.jpg";
import bag10 from "@/app/assets/Pics/Bags/IMG-20251120-WA0044.jpg";
import bag11 from "@/app/assets/Pics/Bags/IMG-20251120-WA0045.jpg";
import bag12 from "@/app/assets/Pics/Bags/IMG-20251120-WA0046.jpg";
import bag13 from "@/app/assets/Pics/Bags/IMG-20251120-WA0047.jpg";
import bag14 from "@/app/assets/Pics/Bags/IMG-20251120-WA0048.jpg";
import bag15 from "@/app/assets/Pics/Bags/IMG-20251120-WA0049.jpg";
import bag16 from "@/app/assets/Pics/Bags/IMG-20251120-WA0050.jpg";
import bag17 from "@/app/assets/Pics/Bags/IMG-20251120-WA0051.jpg";
import bag18 from "@/app/assets/Pics/Bags/IMG-20251120-WA0052.jpg";
import bag19 from "@/app/assets/Pics/Bags/IMG-20251120-WA0053.jpg";
import bag20 from "@/app/assets/Pics/Bags/IMG-20251120-WA0054.jpg";
import bag21 from "@/app/assets/Pics/Bags/IMG-20251120-WA0055.jpg";
import bag22 from "@/app/assets/Pics/Bags/IMG-20251120-WA0056.jpg";
import bag23 from "@/app/assets/Pics/Bags/IMG-20251120-WA0057.jpg";
import bag24 from "@/app/assets/Pics/Bags/IMG-20251120-WA0058.jpg";
import bag25 from "@/app/assets/Pics/Bags/IMG-20251120-WA0059.jpg";
import bag26 from "@/app/assets/Pics/Bags/IMG-20251120-WA0060.jpg";
import bag27 from "@/app/assets/Pics/Bags/IMG-20251120-WA0061.jpg";
import bag28 from "@/app/assets/Pics/Bags/IMG-20251120-WA0062.jpg";
import bag29 from "@/app/assets/Pics/Bags/IMG-20251120-WA0063.jpg";
import bag30 from "@/app/assets/Pics/Bags/IMG-20251120-WA0064.jpg";
import bag31 from "@/app/assets/Pics/Bags/IMG-20251120-WA0065.jpg";
import bag32 from "@/app/assets/Pics/Bags/IMG-20251120-WA0066.jpg";
import bag33 from "@/app/assets/Pics/Bags/IMG-20251120-WA0067.jpg";
import bag34 from "@/app/assets/Pics/Bags/IMG-20251120-WA0068.jpg";
import newBag1 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-01-27 at 19.15.32.jpeg";
import newBag2 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-01-27 at 19.15.33.jpeg";
import newBag3 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-01-27 at 19.15.33 (1).jpeg";
import newBag4 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-01-27 at 19.15.33 (2).jpeg";
import newBag5 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-01-27 at 19.15.33 (3).jpeg";
import newBag6 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-02-22 at 05.06.51.jpeg";
import newBag7 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-02-22 at 05.11.40.jpeg";
import newBag8 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-02-22 at 05.11.41.jpeg";
import newBag9 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-02-22 at 05.11.43.jpeg";
import newBag10 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-02-22 at 05.11.43 (1).jpeg";
import newBag11 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-02-22 at 05.12.13.jpeg";
import newBag12 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-02-22 at 05.12.13 (1).jpeg";
import newBag13 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-02-22 at 05.12.13 (2).jpeg";
import newBag14 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-02-22 at 05.12.36.jpeg";
import newBag15 from "@/app/assets/Pics/Bags/WhatsApp Image 2026-02-22 at 05.12.36 (1).jpeg";
import necklace1 from "@/app/assets/Pics/Necklesses/IMG-20251122-WA0017.jpg";
import necklace2 from "@/app/assets/Pics/Necklesses/IMG-20251122-WA0018.jpg";
import necklace3 from "@/app/assets/Pics/Necklesses/IMG-20251122-WA0019.jpg";
import necklace4 from "@/app/assets/Pics/Necklesses/IMG-20251122-WA0020.jpg";
import necklace5 from "@/app/assets/Pics/Necklesses/IMG-20251122-WA0021.jpg";
import necklace6 from "@/app/assets/Pics/Necklesses/IMG-20251122-WA0022.jpg";
import { StaticImageData } from "next/image";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: StaticImageData;
  category: string;
  description: string;
  materials: string[];
  sizes: string[];
};

export const products: Product[] = [
  {
    id: "5",
    name: "Elegant Handcrafted Bag",
    price: 140,
    image: bag1,
    category: "Bags",
    description:
      "A beautifully handcrafted bag featuring premium materials and exquisite attention to detail. Perfect for the modern woman who values quality and style.",
    materials: ["Premium Leather", "Quality Hardware", "Durable Lining"],
    sizes: ["One Size"],
  },
  {
    id: "6",
    name: "Classic Designer Bag",
    price: 250,
    image: bag2,
    category: "Bags",
    description:
      "This classic designer bag combines timeless elegance with modern functionality. A perfect addition to any collection.",
    materials: ["Fine Leather", "Premium Hardware", "Luxury Lining"],
    sizes: ["Medium"],
  },
  {
    id: "7",
    name: "Sophisticated Leather Bag",
    price: 280,
    image: bag3,
    category: "Bags",
    description:
      "This classic designer bag combines timeless elegance with modern functionality. A perfect addition to any collection.",
    materials: ["Genuine Leather", "Brass Accents", "Interior Pockets"],
    sizes: ["One Size"],
  },
  {
    id: "8",
    name: "Chic Tie",
    price: 170,
    image: bag4,
    category: "Ties",
    description:
      "A chic and modern tie that effortlessly blends style with functionality. Perfect for everyday use or special occasions.",
    materials: ["Quality Leather", "Modern Hardware", "Spacious Interior"],
    sizes: ["Large"],
  },
  {
    id: "9",
    name: "Luxury Tie",
    price: 170,
    image: bag5,
    category: "Ties",
    description:
      "Handcrafted by skilled artisans, this luxury tie showcases exceptional craftsmanship and attention to detail.",
    materials: ["Premium Materials", "Artisan Crafted", "Luxury Finishing"],
    sizes: ["Medium"],
  },
  {
    id: "10",
    name: "Elegant Evening Bag",
    price: 200,
    image: bag6,
    category: "Bags",
    description:
      "An elegant evening bag designed to complement your sophisticated style. Perfect for special events and occasions.",
    materials: ["Refined Leather", "Elegant Hardware", "Delicate Lining"],
    sizes: ["Small"],
  },
  {
    id: "11",
    name: "Timeless Classic Bag",
    price: 300,
    image: bag7,
    category: "Bags",
    description:
      "A timeless classic that never goes out of style. This bag is an investment piece that will serve you for years to come.",
    materials: ["Durable Leather", "Classic Design", "Quality Construction"],
    sizes: ["Medium"],
  },
  {
    id: "12",
    name: "Contemporary Style Bag",
    price: 280,
    image: bag8,
    category: "Bags",
    description:
      "Contemporary style meets traditional craftsmanship in this stunning bag.",
    materials: ["Modern Leather", "Contemporary Hardware", "Functional Design"],
    sizes: ["One Size"],
  },
  {
    id: "13",
    name: "Premium Quality Bag",
    price: 280,
    image: bag9,
    category: "Bags",
    description:
      "Premium quality materials and expert craftsmanship come together in this exceptional bag.",
    materials: ["Top-Grade Leather", "Premium Hardware", "Luxury Details"],
    sizes: ["Large"],
  },
  {
    id: "14",
    name: "Stylish Designer Bag",
    price: 170,
    image: bag10,
    category: "Bags",
    description:
      "A stylish designer bag that exudes confidence and elegance. Perfect for the fashion-forward woman.",
    materials: ["Designer Leather", "Stylish Accents", "Thoughtful Design"],
    sizes: ["Medium"],
  },
  {
    id: "15",
    name: "Refined Elegance Bag",
    price: 350,
    image: bag11,
    category: "Bags",
    description:
      "Refined elegance defines this beautiful bag. Crafted with care and attention to every detail.",
    materials: ["Elegant Leather", "Refined Hardware", "Sophisticated Lining"],
    sizes: ["One Size"],
  },
  {
    id: "16",
    name: "Versatile Everyday Bag",
    price: 250,
    image: bag12,
    category: "Bags",
    description:
      "A versatile everyday bag that adapts to your lifestyle. Spacious, practical, and beautifully designed.",
    materials: ["Durable Materials", "Practical Design", "Comfortable Carry"],
    sizes: ["Large"],
  },
  {
    id: "17",
    name: "Exquisite Craftsmanship Bag",
    price: 350,
    image: bag13,
    category: "Bags",
    description:
      "Exquisite craftsmanship is evident in every stitch of this bag. A masterpiece of handcrafted design.",
    materials: [
      "Master Craftsmanship",
      "Exquisite Materials",
      "Artisan Details",
    ],
    sizes: ["Medium"],
  },
  {
    id: "18",
    name: "Beautiful Artisan Bag",
    price: 280,
    image: bag14,
    category: "Bags",
    description:
      "A beautiful bag showcasing the skill of our artisans. Each piece is unique and carefully crafted by hand.",
    materials: ["Artisan Crafted", "Beautiful Materials", "Unique Design"],
    sizes: ["One Size"],
  },
  {
    id: "27",
    name: "Elegant Crossbody Bag",
    price: 300,
    image: bag15,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "28",
    name: "Classic Tote Bag",
    price: 350,
    image: bag16,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "29",
    name: "Chic Shoulder Bag",
    price: 350,
    image: bag17,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "30",
    name: "Luxury Leather Clutch",
    price: 350,
    image: bag18,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "31",
    name: "Designer Hobo Bag",
    price: 280,
    image: bag19,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "32",
    name: "Elegant Evening Clutch",
    price: 280,
    image: bag20,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "33",
    name: "Classic Satchel Bag",
    price: 280,
    image: bag21,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "35",
    name: "Stylish Bucket Bag",
    price: 280,
    image: bag23,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "36",
    name: "Elegant Wristlet",
    price: 450,
    image: bag24,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "37",
    name: "Chic Sling Bag",
    price: 350,
    image: bag25,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "38",
    name: "Luxury Top Handle Bag",
    price: 120,
    image: bag26,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "39",
    name: "Designer Drawstring Bag",
    price: 90,
    image: bag27,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "40",
    name: "Elegant Frame Bag",
    price: 90,
    image: bag28,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "41",
    name: "Classic Duffle Bag",
    price: 350,
    image: bag29,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "42",
    name: "Luxury Saddle Bag",
    price: 300,
    image: bag30,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "43",
    name: "Premium Backpack Bag",
    price: 320,
    image: bag31,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "44",
    name: "Designer Belt Bag",
    price: 280,
    image: bag32,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "45",
    name: "Chic Barrel Bag",
    price: 450,
    image: bag33,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "46",
    name: "New Arrival Bag 68",
    price: 320,
    image: bag34,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "47",
    name: "Premium Crossbody Bag",
    price: 400,
    image: newBag1,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "48",
    name: "Stylish Shoulder Tote",
    price: 400,
    image: newBag2,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "49",
    name: "Elegant Hobo Bag",
    price: 300,
    image: newBag3,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "50",
    name: "New Arrival Bag 4",
    price: 310,
    image: newBag4,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "51",
    name: "Chic Leather Clutch",
    price: 300,
    image: newBag5,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "52",
    name: "Classic Satchel Bag",
    price: 400,
    image: newBag6,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "53",
    name: "Compact Wristlet Pouch",
    price: 150,
    image: newBag7,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "54",
    name: "Trendy Bucket Bag",
    price: 320,
    image: newBag8,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "55",
    name: "Designer Top Handle Bag",
    price: 450,
    image: newBag9,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "56",
    name: "Versatile Frame Bag",
    price: 320,
    image: newBag10,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "57",
    name: "Modern Sling Bag",
    price: 450,
    image: newBag11,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "58",
    name: "Luxury Duffle Bag",
    price: 500,
    image: newBag12,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "59",
    name: "Elegant Saddle Bag",
    price: 450,
    image: newBag13,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "60",
    name: "Premium Barrel Bag",
    price: 500,
    image: newBag14,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "61",
    name: "Stylish Messenger Bag",
    price: 180,
    image: newBag15,
    category: "Bags",
    description: "A stylish and elegant bag for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "34",
    name: "Stylish Necklace",
    price: 200,
    image: bag22,
    category: "Necklaces",
    description: "A stylish and elegant necklace for everyday use.",
    materials: ["Leather", "Canvas"],
    sizes: ["Medium"],
  },
  {
    id: "19",
    name: "Elegant Handcrafted Necklace",
    price: 280,
    image: necklace1,
    category: "Necklaces",
    description:
      "A beautifully handcrafted necklace featuring premium materials and exquisite attention to detail.",
    materials: ["Premium Materials", "Quality Craftsmanship", "Elegant Design"],
    sizes: ["One Size"],
  },
  {
    id: "20",
    name: "Classic Designer Necklace",
    price: 280,
    image: necklace2,
    category: "Necklaces",
    description:
      "This classic designer necklace combines timeless elegance with modern style.",
    materials: ["Fine Materials", "Premium Finish", "Luxury Details"],
    sizes: ["One Size"],
  },
  {
    id: "21",
    name: "Sophisticated Statement Necklace",
    price: 280,
    image: necklace3,
    category: "Necklaces",
    description: "A sophisticated statement necklace crafted with care.",
    materials: ["Quality Materials", "Elegant Design", "Durable Construction"],
    sizes: ["One Size"],
  },
  {
    id: "22",
    name: "Chic Modern Necklace",
    price: 300,
    image: necklace4,
    category: "Necklaces",
    description:
      "A chic and modern necklace that effortlessly blends style with sophistication.",
    materials: ["Modern Materials", "Contemporary Design", "Stylish Finish"],
    sizes: ["One Size"],
  },
  {
    id: "23",
    name: "Luxury Artisan Necklace",
    price: 250,
    image: necklace5,
    category: "Necklaces",
    description:
      "Handcrafted by skilled artisans, this luxury necklace showcases exceptional craftsmanship.",
    materials: ["Premium Materials", "Artisan Crafted", "Luxury Finishing"],
    sizes: ["One Size"],
  },
  {
    id: "24",
    name: "Elegant Evening Necklace",
    price: 280,
    image: necklace6,
    category: "Necklaces",
    description:
      "An elegant evening necklace designed to complement your sophisticated style.",
    materials: ["Refined Materials", "Elegant Design", "Delicate Details"],
    sizes: ["One Size"],
  },
];
