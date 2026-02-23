"use client";
import { useParams } from "next/navigation";
import { products } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { useCartStore } from "@/app/(stores)/cartStore";
import { StaticImageData } from "next/image";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);
  const addToCart = useCartStore((state) => state.addToCart);

  const relatedProducts = product
    ? products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4)
    : [];

  if (!product) {
    return (
      <div className="min-h-screen py-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">
            Product Not Found
          </h1>
          <Link href="/shop">
            <Button
              variant="outline"
              className="rounded-xs p-6 bg-black text-white hover:bg-black hover:text-white duration-300 ease-in-out  transition-colors  cursor-pointer mt-6 font-bold px-8 "
            >
              Back to Shop
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link href="/shop">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Shop
          </Button>
        </Link>

        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              src={product.image}
              alt={product.name}
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-[#e2073a] mb-6">
              {product.price.toFixed(2)} DH
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Materials */}
            {product.materials && product.materials.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Materials:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedMaterial(material)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors bg-primary text-white`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && (
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Available Sizes:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="rounded-full"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Quantity:</h3>
              <div className="flex items-center space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="rounded-full h-10 w-10"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-medium w-8 text-center">
                  {quantity}
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="rounded-full h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button
                onClick={() => {
                  console.log("Product added:", {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity,
                  });

                  addToCart(
                    {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image:
                        typeof product.image === "string"
                          ? product.image
                          : (product.image as StaticImageData).src,
                    },
                    quantity,
                  );
                  toast.success("Product added to cart!", {
                    description: `${product.name} (x${quantity}) has been added to your cart.`,
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  });
                }}
                className="mt-6 rounded-none px-6 py-5 text-xs tracking-[0.25em] uppercase font-semibold text-white hover:bg-[#4b361a] transition-colors duration-500 cursor-pointer"
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
