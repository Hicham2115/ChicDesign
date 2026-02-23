import Link from "next/link";
import { Instagram } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const Footer = () => {
  return (
    <footer
      className="bg-[#201911] text-[#F0EAE0] mt-20"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Cinzel:wght@400;600&display=swap');
      `}</style>

      {/* Top decorative line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#9C6C30] to-transparent" />

      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* ── Brand ── */}
          <div className="col-span-1 md:col-span-2">
            <h3
              className={`${playfair.className} text-4xl font-serif font-light text-[#F0EAE0] mb-5`}
            >
              Chic{" "}
              <em
                className="italic"
                style={{
                  color: "#C9A96E",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Design
              </em>
            </h3>

            <div className="h-[1px] w-10 bg-[#9C6C30] mb-5" />

            <p className=" leading-relaxed font-light text-lg max-w-sm">
              Handmade elegance for every woman. Each piece is crafted with love
              and attention to detail, bringing you unique accessories that tell
              your story.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.instagram.com/chicdesign420/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 border border-[#2A2218] rounded-full hover:border-[#9C6C30] hover:text-[#C9A96E] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="https://wa.me/212649761199"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 border border-[#2A2218] rounded-full hover:border-[#25D366] hover:text-[#25D366] transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4
              className="text-[10px] tracking-[0.35em] uppercase text-lg font-bold mb-6"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/shop", label: "Shop All" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className=" hover:text-[#C9A96E] transition-colors duration-300 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Customer Service ── */}
          <div>
            <h4
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-6"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Customer Service
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "#", label: "Shipping Info" },
                { href: "#", label: "Returns" },
                { href: "#", label: "FAQ" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className=" hover:text-[#C9A96E] transition-colors duration-300 font-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-16 pt-8 border-t border-[#1E1810] flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs  font-light"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            &copy; {new Date().getFullYear()} Chic Design. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <div className="h-[1px] w-10 bg-[#2A2218]" />
            <span
              className="text-[10px] tracking-[0.35em] uppercase "
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Crafted with care
            </span>
            <div className="h-[1px] w-10 bg-[#2A2218]" />
          </div>

          <div className="flex gap-5"></div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#9C6C30] to-transparent opacity-40" />
    </footer>
  );
};

export default Footer;
