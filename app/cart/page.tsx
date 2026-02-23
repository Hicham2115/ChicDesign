"use client";

import { useCartStore } from "@/app/(stores)/cartStore";
import Link from "next/link";
import { DialogClose } from "@/components/ui/dialog";

export default function CartPage() {
  const { cart, increase, decrease, removeFromCart, getTotal, clearCart } =
    useCartStore();

  return (
    <main className="w-full px-2 py-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#9C6C30] mb-3">
          Your Selection
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-light text-[#2C1F0E]">
          Your Cart
        </h1>
        <div className="mx-auto w-10 h-[1px] bg-[#9C6C30] mt-4" />
      </div>

      <div className="w-full">
        {/* Empty */}
        {cart.length === 0 && (
          <div className="text-center py-20 flex flex-col items-center gap-3">
            <span className="text-4xl text-[#C4B49A]">◇</span>
            <p className="text-[#9C8070] text-lg font-serif">
              Your cart is empty
            </p>
            <Link
              href="/shop"
              className="mt-3 px-8 py-3 text-[10px] tracking-[0.3em] uppercase bg-[#2C1F0E] text-[#F7F3EE] hover:bg-[#9C6C30] transition-colors duration-300"
            >
              Shop Now
            </Link>
          </div>
        )}

        {/* Items */}
        {cart.length > 0 && (
          <>
            <div className="flex flex-col divide-y divide-[#E5D9C8]">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5"
                >
                  {/* Name & price */}
                  <div className="flex-1">
                    <p className="text-base text-[#2C1F0E] font-medium">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#9C6C30] mt-0.5">
                      {item.price.toFixed(2)} DH
                    </p>
                  </div>

                  {/* Controls + remove */}
                  <div className="flex items-center gap-4">
                    {/* Qty */}
                    <div className="flex items-center border border-[#E5D9C8]">
                      <button
                        onClick={() => decrease(item.id)}
                        className="w-8 h-8 flex items-center justify-center text-[#7A6A58] hover:bg-[#F0EAE0] transition-colors cursor-pointer text-base"
                      >
                        −
                      </button>
                      <span className="w-8 h-8 flex items-center justify-center text-sm text-[#2C1F0E] border-x border-[#E5D9C8]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increase(item.id)}
                        className="w-8 h-8 flex items-center justify-center text-[#7A6A58] hover:bg-[#F0EAE0] transition-colors cursor-pointer text-base"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <span className="w-24 text-right text-sm text-[#2C1F0E] hidden sm:block">
                      {(item.price * item.quantity).toFixed(2)} DH
                    </span>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#C4B49A] hover:text-red-400 transition-colors cursor-pointer"
                      aria-label="Remove"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-8 pt-6 border-t border-[#E5D9C8]">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg text-[#2C1F0E] font-serif">Total</span>
                <span className="text-2xl font-serif font-light text-[#2C1F0E]">
                  {getTotal().toFixed(2)}{" "}
                  <span className="text-sm text-[#9C8070]">DH</span>
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={clearCart}
                  className="px-6 py-3 text-[10px] tracking-[0.25em] uppercase border border-[#C4B49A] text-[#7A6A58] hover:border-black hover:text-black transition-colors duration-300 cursor-pointer"
                >
                  Clear Cart
                </button>
                <DialogClose asChild>
                  <Link
                    href="/checkout"
                    className="flex-1 py-3 text-[10px] tracking-[0.3em] uppercase bg-[#2C1F0E] text-[#F7F3EE] hover:bg-[#9C6C30] transition-colors duration-300 text-center"
                  >
                    Checkout
                  </Link>
                </DialogClose>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
