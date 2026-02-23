"use client";
import * as React from "react";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import Image from "next/image";
import img12 from "@/app/assets/Pics/contact.jpg";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message must be at most 500 characters"),
});

export default function ContactUs() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
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
            _subject: "شخص ما أرسل لك رسالة من موقع Chic Design",
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          toast.success("Message sent!", {
            description: "Thank You For Your Message.",
            position: "bottom-right",
          });
          form.reset();
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        toast.error("Failed to send message", {
          description: "Please try again or contact us directly via email.",
        });
      } finally {
      }
    },
  });

  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-24 pb-16 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="text-[20vw] font-black leading-none tracking-widest uppercase whitespace-nowrap text-[#2C1F0E]/[0.04]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            CONTACT
          </span>
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <p
            className="fade-up-1 text-[10px] tracking-[0.5em] uppercase text-[#9C6C30] mb-5"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            We&apos;d Love to Hear From You
          </p>
          <h1
            className="fade-up-2 text-6xl md:text-8xl font-light leading-none text-[#2C1F0E] mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Get in{" "}
            <em
              className="italic font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#9C6C30",
              }}
            >
              Touch
            </em>
          </h1>
          <div className="fade-up-3 mx-auto w-16 h-[1px] bg-[#9C6C30] mb-8" />
          <p className="fade-up-4 text-[#7A6A58] text-lg font-light leading-relaxed max-w-xl mx-auto">
            Whether you have a question about a piece, a custom request, or
            simply want to say hello — our team is here, and we always write
            back.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="fade-up-5 px-6 md:px-16 pb-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-xl overflow-hidden rounded-2xl border border-[#E5D9C8]">
          {/* ── Left: Image Panel ── */}
          <div className="relative min-h-[420px] group overflow-hidden">
            <Image
              src={img12}
              alt="Artisan Bag"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F05]/85 via-[#1A0F05]/30 to-transparent" />

            {/* Overlay text */}
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-[#F7F3EE]">
              <p
                className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Our Atelier
              </p>
              <h2
                className="text-3xl font-light leading-snug mb-6"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Crafted with
                <br />
                <em
                  className="italic"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#C9A96E",
                  }}
                >
                  intention
                </em>
              </h2>
              <div className="h-[1px] w-12 bg-[#C9A96E] mb-6" />
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: "◈",
                    text: "designasmae84@gmail.com",
                  },
                  { icon: "◇", text: "+212 649 76 11 99" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 text-[#D4C4AD]"
                  >
                    <span className="text-[#C9A96E]">{item.icon}</span>
                    <span
                      className="font-light"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1rem",
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form Panel ── */}
          <div className="bg-white p-10 md:p-14 flex flex-col justify-center">
            <p
              className="text-[10px] tracking-[0.4em] uppercase text-[#9C6C30] mb-2"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Send a Message
            </p>
            <h3
              className="text-3xl font-light text-[#2C1F0E] mb-10"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              How can we help?
            </h3>

            <form
              id="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
              className="flex flex-col gap-7"
            >
              <FieldGroup>
                {/* Name */}
                <form.Field
                  name="name"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel
                          htmlFor={field.name}
                          className="text-[10px] tracking-[0.25em] uppercase font-bold"
                        >
                          Full Name
                        </FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="Your name"
                          autoComplete="off"
                          className="rounded-none border-0 border-b border-[#C4B49A] bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-[#9C6C30] transition-colors duration-300 placeholder:text-[#C4B49A]"
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "1rem",
                          }}
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />

                {/* Email */}
                <form.Field
                  name="email"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel
                          htmlFor={field.name}
                          className="text-[10px] tracking-[0.25em] uppercase font-bold"
                        >
                          Email Address
                        </FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          type="email"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="your@email.com"
                          autoComplete="off"
                          className="rounded-none border-0 border-b border-[#C4B49A] bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-[#9C6C30] transition-colors duration-300 placeholder:text-[#C4B49A]"
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "1rem",
                          }}
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />

                {/* Message */}
                <form.Field
                  name="message"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel
                          htmlFor={field.name}
                          className="text-[10px] tracking-[0.25em] uppercase font-bold"
                        >
                          Message
                        </FieldLabel>
                        <InputGroup>
                          <InputGroupTextarea
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder="Tell us how we can help…"
                            rows={5}
                            className="min-h-24 resize-none rounded-none border-0 border-b border-[#C4B49A] bg-transparent px-2 shadow-none focus-visible:ring-0 focus-visible:border-[#9C6C30] transition-colors duration-300 placeholder:text-[#C4B49A]"
                            style={{
                              fontFamily: "'Cormorant Garamond', serif ",
                              fontSize: "1rem",
                            }}
                            aria-invalid={isInvalid}
                          />
                          <InputGroupAddon align="block-end">
                            <InputGroupText className="tabular-nums text-[#B0A090] text-xs">
                              {field.state.value.length}/500
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                        <FieldDescription className="text-xs  text-black">
                          We typically respond within 24 hours.
                        </FieldDescription>
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />
              </FieldGroup>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => form.reset()}
                  className="px-8 py-3 text-[10px] tracking-[0.25em] uppercase border border-black text-black hover:border-[#9C6C30] hover:text-[#9C6C30] transition-colors duration-300 cursor-pointer"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Reset
                </button>
                <button
                  type="submit"
                  form="contact-form"
                  className="flex-1 py-3 text-[10px] tracking-[0.25em] uppercase bg-black text-[#F7F3EE] hover:bg-[#9C6C30] transition-colors duration-500 cursor-pointer"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
