"use client";

import Link from "next/link";
import { footerData, ContactIcons, SocialIcons } from "@/data/footerData";

export default function Footer() {
  const {
    menuLinks,
    logoText,
    tagline,
    contactTitle,
    contactItems,
    socialTitle,
    socialLinks,
    bottomLeftHref,
    bottomLeftText,
    bottomCenterText,
    bottomRightHref,
    bottomRightText,
    accentColor,
  } = footerData;

  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 pt-10 pb-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-x-5 xl:gap-x-12 gap-y-3 text-sm text-black">
            {menuLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:opacity-70">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 w-full border-t border-gray-300" />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-3">
            <div className="text-4xl font-extrabold text-black tracking-wide">
              {logoText}
            </div>
            <p className="text-[10px] font-semibold tracking-[2px] text-gray-700">
              {tagline}
            </p>
          </div>

          <div className="md:col-span-5">
            <h4 className="text-sm font-semibold" style={{ color: accentColor }}>
              {contactTitle}
            </h4>

            <div className="mt-4 space-y-3 text-sm text-black">
              {contactItems.map((c, i) => {
                const Icon = ContactIcons[c.type];
                return (
                  <div key={i} className="flex items-start gap-3">
                    <Icon size={18} color={accentColor} className="mt-[2px]" />

                    {/* If external link email/phone → use <a> */}
                    {c.href ? (
                      <Link href={c.href} className="hover:opacity-75 leading-6">
                        {c.text}
                      </Link>
                    ) : (
                      <p className="leading-6">{c.text}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold" style={{ color: accentColor }}>
              {socialTitle}
            </h4>

            <div className="mt-4 flex items-center gap-4 text-black">
              {socialLinks.map((s, i) => {
                const Icon = SocialIcons[s.type];
                return (
                  <Link key={i} href={s.href} className="hover:opacity-70">
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full"
        style={{
          background: "linear-gradient(90deg, #002F50 0%, #99B81B 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 md:px-8 py-3 text-white text-xs">
          <div className="flex flex-col sm:flex-row justify-center lg:justify-between text-center gap-2">

            <Link href={bottomLeftHref || "#"}>{bottomLeftText}</Link>

            <p className="text-center">{bottomCenterText}</p>

            <Link href={bottomRightHref || "#"}>{bottomRightText}</Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
