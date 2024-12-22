import React from "react";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import Link from "next/link";
import { LogoSmall } from "../navigation/Logo";
import { NAV_LINKS } from "../navigation/constants";

export const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="relative mx-auto py-12 max-w-6xl overflow-hidden">
        <div className="gap-x-1.5 gap-y-6 grid grid-cols-12 px-2 md:px4">
          <LogoColumn />
          <GenericColumn title="Product" links={NAV_LINKS[0].sublinks} />
          <GenericColumn
            title="Company"
            links={[...NAV_LINKS[3].sublinks, ...NAV_LINKS[4].sublinks]}
          />
          <GenericColumn
            title="Legal"
            links={[
              {
                title: "Terms & Conditions",
                href: "/#",
              },
              {
                title: "Privacy Policy",
                href: "/#",
              },
              {
                title: "Refund Policy",
                href: "/#",
              },
            ]}
          />

          <GenericColumn
            title="Socials"
            links={[
              {
                title: "Twitter",
                href: "/#",
                Icon: SiX,
              },
              {
                title: "Instagram",
                href: "/#",
                Icon: SiInstagram,
              },
              {
                title: "Youtube",
                href: "/#",
                Icon: SiYoutube,
              },
            ]}
          />
        </div>
      </footer>
    </div>
  );
};

const LogoColumn = () => {
  return (
    <div className="col-span-6 md:col-span-4">
      <LogoSmall />
      <span className="inline-block mt-3 text-xs">
        © Muhammad Meganata Adam - All rights reserved.
      </span>
    </div>
  );
};

const GenericColumn = ({ title, links }) => {
  return (
    <div className="space-y-2 col-span-6 md:col-span-2 text-sm">
      <span className="block font-bold">{title}</span>
      {links.map((l) => (
        <Link
          key={l.title}
          href={l.href}
          className="flex items-center gap-1.5 hover:text-indigo-600 hover:underline transition-colors"
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </Link>
      ))}
    </div>
  );
};
