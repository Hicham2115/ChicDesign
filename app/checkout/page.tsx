"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";
import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/app/(stores)/cartStore";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
});

export default function CheckoutPage() {
  const { cart, getTotal, clearCart } = useCartStore();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    onSubmit: async ({ value }) => {
      const result = formSchema.safeParse(value);
      if (!result.success) {
        toast.error("Please fill in all required fields correctly.");
        return;
      }
      try {
        const response = await fetch("https://formspree.io/f/mdkywdge", {
          method: "POST",
          body: JSON.stringify({
            ...value,
            _subject: "طلب جديد من موقع Chic Design",
            cart: cart
              .map((i) => `${i.name} x${i.quantity} — ${i.price} DH`)
              .join("\n"),
            total: `${getTotal().toFixed(2)} DH`,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          toast.success("Order placed!", {
            description: "We'll contact you on WhatsApp to confirm delivery.",
            position: "bottom-right",
          });
          form.reset();
          clearCart();
          setIsSuccess(true);
        } else {
          throw new Error();
        }
      } catch {
        toast.error("Failed to place order", {
          description: "Please try again or contact us directly.",
        });
      }
    },
  });

  if (isSuccess) {
    return (
      <main className="px-4 sm:px-6 py-16">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6 py-16">
          <div className="w-14 h-14 rounded-full bg-[#F0E8DA] flex items-center justify-center text-2xl">
            ✓
          </div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#9C6C30]">
            Order Confirmed
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-light text-[#2C1F0E]">
            Thank You!
          </h1>
          <div className="w-10 h-px bg-[#9C6C30]" />
          <p className="text-sm text-[#9C8070] leading-relaxed max-w-sm">
            Your order has been received. We'll reach out on WhatsApp shortly to
            confirm your delivery details.
          </p>
          <Link
            href="/shop"
            className="mt-4 px-10 py-4 text-[10px] tracking-[0.35em] uppercase bg-[#2C1F0E] text-[#F7F3EE] hover:bg-[#9C6C30] transition-colors duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 sm:px-6 py-16">
      <style>{`
        .field-line {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #C4B49A;
          padding: 10px 0;
          font-size: 1rem;
          color: #2C1F0E;
          outline: none;
          transition: border-color 0.3s;
        }
        .field-line::placeholder { color: #C4B49A; }
        .field-line:focus { border-color: #9C6C30; }
        .field-error { color: #c0392b; font-size: 0.75rem; margin-top: 4px; }
      `}</style>

      {/* ── Header ── */}
      <div className="max-w-xl mx-auto mb-10 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#9C6C30] mb-3">
          Almost There
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-light text-[#2C1F0E]">
          Checkout
        </h1>
        <div className="mx-auto w-10 h-px bg-[#9C6C30] mt-4" />
      </div>

      {/* ── Form ── */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="max-w-xl mx-auto bg-white border border-[#E5D9C8] p-8 sm:p-12 flex flex-col gap-8"
      >
        {/* Section: Personal Info */}
        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-6">
            Personal Information
          </p>
          <div className="flex flex-col gap-7">
            {/* Name */}
            <form.Field
              name="name"
              validators={{ onBlur: ({ value }) => value.length < 2 ? "Name must be at least 2 characters" : undefined }}
            >
              {(field) => (
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase  font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    className="field-line"
                    placeholder="Your full name"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors[0] && (
                    <p className="field-error">{String(field.state.meta.errors[0])}</p>
                  )}
                </div>
              )}
            </form.Field>

            {/* Email */}
            <form.Field
              name="email"
              validators={{ onBlur: ({ value }) => !/^[^@]+@[^@]+\.[^@]+$/.test(value) ? "Please enter a valid email address" : undefined }}
            >
              {(field) => (
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase font-semibold  mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="field-line"
                    placeholder="your@email.com"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors[0] && (
                    <p className="field-error">{String(field.state.meta.errors[0])}</p>
                  )}
                </div>
              )}
            </form.Field>

            {/* Phone */}
            <form.Field
              name="phone"
              validators={{ onBlur: ({ value }) => value.length < 6 ? "Phone number is required" : undefined }}
            >
              {(field) => (
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="field-line"
                    placeholder="+212 600 000 000"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors[0] && (
                    <p className="field-error">{String(field.state.meta.errors[0])}</p>
                  )}
                </div>
              )}
            </form.Field>
          </div>
        </div>

        {/* Section: Delivery */}
        <div>
          <div className="flex flex-col gap-7">
            {/* Address */}
            <form.Field
              name="address"
              validators={{ onBlur: ({ value }) => value.length < 5 ? "Address is required" : undefined }}
            >
              {(field) => (
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase font-semibold  mb-2">
                    Street Address
                  </label>
                  <input
                    className="field-line"
                    placeholder="123 Rue des Artisans"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors[0] && (
                    <p className="field-error">{String(field.state.meta.errors[0])}</p>
                  )}
                </div>
              )}
            </form.Field>
          </div>
        </div>

        <div className="h-px bg-[#F0E8DA]" />

        {/* Cart summary */}
        {cart.length > 0 && (
          <div className="flex flex-col gap-2">
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold text-lg mb-2">
              Order Summary
            </p>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-sm text-[#2C1F0E]"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>{(item.price * item.quantity).toFixed(2)} DH</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold text-[#2C1F0E] border-t border-[#E5D9C8] pt-2 mt-1">
              <span>Total</span>
              <span>{getTotal().toFixed(2)} DH</span>
            </div>
          </div>
        )}

        <p className="text-xs text-[#B0A090] font-light leading-relaxed">
          Your order will be confirmed via email. We'll reach out on WhatsApp to
          coordinate delivery details.
        </p>

        <button
          type="submit"
          disabled={form.state.isSubmitting}
          className="w-full py-4 text-[10px] tracking-[0.35em] uppercase bg-[#2C1F0E] text-[#F7F3EE] hover:bg-[#9C6C30] transition-colors duration-300 cursor-pointer disabled:opacity-50"
        >
          {form.state.isSubmitting ? "Placing Order..." : "Place Order"}
        </button>
      </form>

      {/* Trust note */}
      <div className="max-w-xl mx-auto mt-6 flex items-center justify-center gap-4">
        <div className="h-px flex-1 bg-[#E5D9C8]" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#B0A090]">
          Secure & Handcrafted with Care
        </span>
        <div className="h-px flex-1 bg-[#E5D9C8]" />
      </div>
    </main>
  );
}
