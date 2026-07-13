import Link from "next/link";
import { Linkedin, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  footerBusinessLinks,
  footerLegalLinks,
  footerServiceLinks,
  footerUsefulLinks,
} from "@/config/navigation";
import { Container } from "@/components/ui/container";

const socialIcons = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
};

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="focus-ring rounded text-sm text-navy-200 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const socials = Object.entries(siteConfig.socialLinks).filter(([, url]) => url);

  return (
    <footer className="bg-navy-950 text-navy-200">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-400 font-heading text-base font-bold text-navy-900">
                P
              </span>
              <span className="font-heading text-lg font-bold text-white">{siteConfig.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-navy-300">{siteConfig.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-navy-400">{siteConfig.description}</p>
            {socials.length > 0 && (
              <div className="mt-5 flex gap-3">
                {socials.map(([key, url]) => {
                  const Icon = socialIcons[key as keyof typeof socialIcons];
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={key}
                      className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-navy-300 hover:border-gold-400 hover:text-gold-400"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <FooterColumn title="Intellectual Property" links={footerServiceLinks} />
          <FooterColumn title="Business Services" links={footerBusinessLinks} />
          <FooterColumn title="Useful Links" links={footerUsefulLinks} />

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-navy-300">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-400" aria-hidden />
                <a href={`mailto:${siteConfig.email}`} className="focus-ring rounded hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-400" aria-hidden />
                <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="focus-ring rounded hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-400" aria-hidden />
                <div>
                  <span className="block text-xs font-semibold text-white uppercase tracking-wider">Registered Office</span>
                  <span className="text-navy-300">{siteConfig.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-400" aria-hidden />
                <div>
                  <span className="block text-xs font-semibold text-white uppercase tracking-wider">Correspondence Address</span>
                  <span className="text-navy-300">{siteConfig.correspondenceAddress}</span>
                </div>
              </li>
              <li className="text-xs text-navy-400">{siteConfig.businessHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-800 pt-6">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-navy-500">
            The content on this website is provided for general informational purposes only and does not
            constitute legal advice. Timelines, government fees, and outcomes depend on the applicable
            authority and the specific facts of each matter. Please consult a qualified professional before
            acting on any information provided here.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-navy-800 pt-6 text-xs">
          {footerLegalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring rounded text-navy-400 hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-navy-800 pt-6 text-xs text-navy-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Designed, developed, and managed by{" "}
            <a
              href={siteConfig.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded font-medium text-navy-300 hover:text-white"
            >
              {siteConfig.developer.name}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
