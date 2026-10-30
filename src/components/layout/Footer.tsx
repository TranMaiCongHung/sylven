"use client";

import * as React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleFakeSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#f5f5f5] text-black py-10 sm:py-12 overflow-hidden select-text border-t border-stone-200/80">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* 4 COLUMNS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Column 1: Editorial Slogan */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="font-oranienbaum text-lg sm:text-xl lg:text-[21px] text-black font-normal uppercase tracking-[0.06em] leading-[1.28]">
              <span>SEE THE</span>
              <span className="block mt-0.5">EXTRAORDINARY</span>
              <span className="block mt-0.5">IN LIFE</span>
            </h3>
          </div>

          {/* Columns 2 & 3: Links + Payment Badges */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-between h-full">
            <div className="grid grid-cols-2 gap-6 sm:gap-10">
              {/* Column 2: Navigation Links */}
              <div>
                <ul className="space-y-2.5 font-lexend text-[11px] sm:text-[11.5px] uppercase tracking-[0.16em] text-black">
                  <li>
                    <Link href="/about" className="hover:opacity-60 transition-opacity">
                      {language === "vi" ? "ABOUT" : "ABOUT"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:opacity-60 transition-opacity">
                      {language === "vi" ? "CONTACT" : "CONTACT"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/san-pham" className="hover:opacity-60 transition-opacity">
                      {language === "vi" ? "SIZE GUIDE" : "SIZE GUIDE"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:opacity-60 transition-opacity">
                      {language === "vi" ? "DELIVERY AND RETURNS" : "DELIVERY AND RETURNS"}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Legal & Policies */}
              <div>
                <ul className="space-y-2.5 font-lexend text-[11px] sm:text-[11.5px] uppercase tracking-[0.16em] text-black">
                  <li>
                    <Link href="#" className="hover:opacity-60 transition-opacity">
                      TERMS OF USE
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-60 transition-opacity">
                      TERMS OF SALE
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-60 transition-opacity">
                      PRIVACY POLICY
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-60 transition-opacity">
                      COOKIES POLICY
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Method Icons: Only PayPal, Mastercard, Visa */}
            <div className="flex items-center gap-5 sm:gap-6 mt-6 sm:mt-8 text-black flex-wrap">
              {/* PayPal */}
              <span className="inline-flex items-center text-black" title="PayPal" aria-label="PayPal">
                <svg className="h-[17px] w-auto fill-current" viewBox="0 0 24 24">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.502a.856.856 0 0 1 .844-.714h7.042c3.414 0 5.733 1.83 5.378 5.176-.39 3.652-2.736 5.66-6.177 5.66H9.497l-1.42 7.713a.641.641 0 0 1-.633.535l-.368-.535z" />
                  <path d="M8.653 14.49l1.196-6.495a.856.856 0 0 1 .844-.714h5.275c2.723 0 4.67 1.488 4.34 4.31-.383 3.27-2.484 5.092-5.71 5.092H11.75l-.946 5.138a.534.534 0 0 1-.527.446H7.83a.534.534 0 0 1-.527-.616l1.87-7.16z" opacity="0.65" />
                </svg>
              </span>

              {/* Mastercard */}
              <span className="inline-flex items-center text-black" title="Mastercard" aria-label="Mastercard">
                <svg className="h-[17px] w-auto" viewBox="0 0 34 22" fill="none">
                  <circle cx="11" cy="11" r="9" fill="currentColor" />
                  <circle cx="23" cy="11" r="9" fill="currentColor" fillOpacity="0.45" />
                  <path d="M17 4.9A8.96 8.96 0 0 1 20 11a8.96 8.96 0 0 1-3 6.1A8.96 8.96 0 0 1 14 11c0-2.38 1.15-4.5 3-6.1z" fill="currentColor" fillOpacity="0.85" />
                </svg>
              </span>

              {/* Visa */}
              <span className="inline-flex items-center text-black" title="Visa" aria-label="Visa">
                <svg className="h-[13px] w-auto fill-current" viewBox="0 0 38 12">
                  <path d="M15.485 0.17L10.155 12H6.675L4.065 2.6C3.915 2.015 3.75 1.775 3.285 1.52C2.535 1.115 1.2 0.74 0 0.47L0.06 0.17H5.655C6.39 0.17 7.035 0.66 7.2 1.505L8.565 8.78L12.015 0.17H15.485ZM28.98 8.165C29 5.06 24.69 4.88 24.72 3.485C24.735 3.06 25.14 2.61 26.04 2.49C26.49 2.43 27.705 2.385 29.025 2.985L29.55 0.54C28.83 0.285 27.9 0 26.745 0C23.49 0 21.195 1.725 21.165 4.185C21.135 6.015 22.8 7.035 24.045 7.635C25.32 8.25 25.755 8.655 25.74 9.225C25.725 10.095 24.69 10.485 23.73 10.5C22.095 10.53 21.135 10.065 20.37 9.705L19.83 12.225C20.595 12.57 22.005 12.87 23.46 12.885C26.91 12.885 29.175 11.175 28.98 8.165ZM37.47 12H40.5L37.89 0.17H35.1C34.485 0.17 33.96 0.525 33.735 1.065L28.845 12H32.325L33.015 10.095H37.26L37.47 12ZM33.99 7.41L35.43 3.45L36.255 7.41H33.99ZM20.085 0.17L17.37 12H14.04L16.755 0.17H20.085Z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription & Socials */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <h4 className="font-oranienbaum text-xl sm:text-[22px] text-black font-normal tracking-[0.02em] mb-3 sm:mb-4">
                Let&apos;s Stay in Touch
              </h4>

              <form onSubmit={handleFakeSubscribe} className="w-full">
                <div className="flex items-center justify-between border-b border-black/35 pb-1.5 focus-within:border-black transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (subscribed) setSubscribed(false);
                    }}
                    placeholder="YOUR EMAIL"
                    className="w-full bg-transparent font-lexend text-[11px] uppercase tracking-[0.16em] text-black placeholder-black/45 focus:outline-hidden"
                  />
                  <button
                    type="submit"
                    className="font-lexend text-[11px] uppercase tracking-[0.16em] font-medium text-black hover:opacity-60 transition-opacity cursor-pointer pl-4 whitespace-nowrap"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>

              {subscribed && (
                <p className="mt-2 text-[11px] text-black font-lexend tracking-wider">
                  {language === "vi" ? "Cảm ơn bạn đã đăng ký nhận tin!" : "Thank you for subscribing!"}
                </p>
              )}

              <p className="font-lexend font-light text-[10.5px] sm:text-[11px] text-black/70 leading-relaxed mt-2.5 max-w-[340px]">
                By signing up, you are consenting to receive news and updates by email.
              </p>
            </div>

            {/* Social Icons (Retaining TikTok and Instagram) */}
            <div className="flex items-center gap-4 mt-5 text-black">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:opacity-50 transition-opacity"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.75]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:opacity-50 transition-opacity"
                aria-label="TikTok"
                title="TikTok"
              >
                <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
