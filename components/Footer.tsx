"use client";

import React from "react";

type FooterLink = {
  label: string;
  href: string;
};

type ContactItem = {
  type: "address" | "phone" | "email";
  text: string;
  href?: string;
};

type SocialLink = {
  type: "facebook" | "x" | "instagram" | "youtube";
  href: string;
};

type Props = {
  logoText: string;
  tagline: string;
  menuLinks: FooterLink[];
  programLinks?: FooterLink[];
  contactTitle: string;
  contactItems: ContactItem[];
  socialTitle: string;
  socialLinks: SocialLink[];
  bottomLeftText: string;
  bottomCenterText: string;
  bottomRightText: string;
  bottomLeftHref?: string;
  bottomRightHref?: string;
  accentColor?: string;
};

const ICONS = {
  address: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 6c0 9.4 7.6 17 17 17l2-2v-4l-5-2-2 2c-3.9-1.6-7-4.7-8.6-8.6l2-2-2-5H7L5 3v3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  email: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
};

function SocialIcon({ type }: { type: SocialLink["type"] }) {
  if (type === "facebook") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3l1-3h-4v-3c0-.6.4-1 1-1Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (type === "x") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M18.7 3H21l-6.7 7.7L22 21h-6.2l-4.9-6.3L5.5 21H3l7.3-8.4L2 3h6.3l4.4 5.8L18.7 3Zm-1.1 16h1.3L6.4 4.9H5.1L17.6 19Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (type === "instagram") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M17.5 6.5h.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M10 15V9l6 3-6 3Z"
        fill="currentColor"
      />
      <path
        d="M21 12c0-2.8-.3-4.7-1.2-5.6C18.9 5.5 17 5.2 14.2 5H9.8C7 5.2 5.1 5.5 4.2 6.4 3.3 7.3 3 9.2 3 12s.3 4.7 1.2 5.6C5.1 18.5 7 18.8 9.8 19h4.4c2.8-.2 4.7-.5 5.6-1.4.9-.9 1.2-2.8 1.2-5.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Footer({
  logoText,
  tagline,
  menuLinks,
  programLinks = [],
  contactTitle,
  contactItems,
  socialTitle,
  socialLinks,
  bottomLeftText,
  bottomCenterText,
  bottomRightText,
  bottomLeftHref = "#",
  bottomRightHref = "#",
  accentColor = "#97B81B",
}: Props) {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 pt-10 md:pt-12 pb-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-sm text-black">
            {menuLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:opacity-70">
                {l.label}
              </a>
            ))}
          </div>

          {programLinks.length ? (
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-sm text-black">
              {programLinks.map((l) => (
                <a key={l.label} href={l.href} className="hover:opacity-70">
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}

          <div className="mt-6 w-full border-t border-gray-300" />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          <div className="md:col-span-3 flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="text-4xl font-extrabold text-black tracking-wide">
                {logoText}
              </div>
            </div>
            <p className="text-[10px] font-semibold tracking-[2px] text-gray-700">
              {tagline}
            </p>
          </div>

          <div className="md:col-span-5">
            <h4
              className="text-sm font-semibold"
              style={{ color: accentColor }}
            >
              {contactTitle}
            </h4>

            <div className="mt-4 space-y-3 text-sm text-black">
              {contactItems.map((c, idx) => {
                const icon =
                  c.type === "address"
                    ? ICONS.address
                    : c.type === "phone"
                    ? ICONS.phone
                    : ICONS.email;

                const content = (
                  <span className="hover:opacity-75">{c.text}</span>
                );

                return (
                  <div key={idx} className="flex items-start gap-3">
                    <span
                      className="mt-[2px]"
                      style={{ color: accentColor }}
                    >
                      {icon}
                    </span>
                    {c.href ? (
                      <a href={c.href} className="leading-6">
                        {content}
                      </a>
                    ) : (
                      <p className="leading-6">{c.text}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4
              className="text-sm font-semibold"
              style={{ color: accentColor }}
            >
              {socialTitle}
            </h4>

            <div className="mt-4 flex items-center gap-4 text-black">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  className="hover:opacity-70 transition"
                  aria-label={s.type}
                >
                  <SocialIcon type={s.type} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(90deg, #002F50 0%, #99B81B 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 md:px-8 py-3 text-white text-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <a href={bottomLeftHref} className="hover:opacity-80">
              {bottomLeftText}
            </a>
            <p className="text-center">{bottomCenterText}</p>
            <a href={bottomRightHref} className="hover:opacity-80">
              {bottomRightText}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
