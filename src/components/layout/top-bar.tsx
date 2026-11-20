"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  BookOpen,
  GraduationCap,
  FlaskConical,
  Users,
  Globe,
  FileText,
  Plus,
  Minus,
  Underline,
  Moon,
  Sun,
} from "lucide-react";

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

const utilityLinks = [
  { label: "ODeL", href: "#" },
  { label: "KUCCPS", href: "#" },
  { label: "Students", href: "/portal/student" },
  { label: "Staff", href: "#" },
  { label: "Library", href: "/library" },
  { label: "Programs", href: "/academics/schools" },
  { label: "Downloads", href: "/downloads" },
  { label: "Services", href: "/services" },
  { label: "Press", href: "/press" },
  { label: "DSA", href: "/dsa" },
  { label: "Hostels", href: "/hostels" },
  { label: "Sports", href: "/sports" },
  { label: "Gallery", href: "/gallery" },
  { label: "Chaplaincy", href: "/chaplaincy" },
  { label: "CSR", href: "/csr" },
  { label: "Tenders", href: "/tenders" },
  { label: "Contacts", href: "/contacts" },
];

export function TopBar() {
  const [fontSize, setFontSize] = React.useState(100);
  const [highContrast, setHighContrast] = React.useState(false);
  const [underlineLinks, setUnderlineLinks] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  React.useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  React.useEffect(() => {
    document.documentElement.classList.toggle("underline-links", underlineLinks);
  }, [underlineLinks]);

  const increaseFont = () => setFontSize((prev) => Math.min(prev + 10, 150));
  const decreaseFont = () => setFontSize((prev) => Math.max(prev - 10, 80));

  return (
    <div className="w-full bg-slate-900 text-slate-100 text-sm" role="banner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Row 1: Portal Links + Social + Accessibility + CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-2">
          {/* Portal Links */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-slate-400">
              BSU Digital Campus
            </span>
            <Link
              href="/portal/student"
              className="flex items-center gap-1 hover:text-white transition-colors"
              aria-label="CampusConnect Student Portal"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              <span className="hidden md:inline">CampusConnect</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-white transition-colors"
              aria-label="Staff Mail"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Staff Mail</span>
            </Link>
            <Link
              href="/library"
              className="flex items-center gap-1 hover:text-white transition-colors"
              aria-label="E-Library EzProxy"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span className="hidden md:inline">E-Library</span>
            </Link>
            <Link
              href="/research"
              className="flex items-center gap-1 hover:text-white transition-colors"
              aria-label="Research Hub"
            >
              <FlaskConical className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Research</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-white transition-colors"
              aria-label="Alumni Network"
            >
              <Users className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Alumni</span>
            </Link>
          </div>

          {/* Quick Actions + Accessibility */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Social Links */}
            <div className="hidden md:flex items-center gap-2 border-r border-slate-700 pr-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <Globe className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>

            <Link
              href="/admissions"
              className="inline-flex items-center gap-1 rounded bg-emerald-600 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/global-health-outreach"
              className="inline-flex items-center gap-1 rounded bg-sky-600 px-3 py-1 text-xs font-semibold text-white hover:bg-sky-700 transition-colors"
            >
              <Globe className="h-3 w-3" />
              Global Health
            </Link>
            <Link
              href="/procurement/eoi-2026"
              className="inline-flex items-center gap-1 rounded bg-amber-600 px-3 py-1 text-xs font-semibold text-white hover:bg-amber-700 transition-colors"
            >
              <FileText className="h-3 w-3" />
              Tenders
            </Link>

            <div className="hidden sm:flex items-center gap-1 border-l border-slate-700 pl-3">
              <button
                onClick={decreaseFont}
                className="p-1 rounded hover:bg-slate-800"
                aria-label="Decrease font size"
                title="Decrease font size"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={increaseFont}
                className="p-1 rounded hover:bg-slate-800"
                aria-label="Increase font size"
                title="Increase font size"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setUnderlineLinks((v) => !v)}
                className={`p-1 rounded hover:bg-slate-800 ${underlineLinks ? "text-amber-400" : ""}`}
                aria-label="Toggle underline links"
                title="Underline links"
              >
                <Underline className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setHighContrast((v) => !v)}
                className={`p-1 rounded hover:bg-slate-800 ${highContrast ? "text-amber-400" : ""}`}
                aria-label="Toggle high contrast"
                title="High contrast"
              >
                {highContrast ? (
                  <Sun className="h-3.5 w-3.5" />
                ) : (
                  <Moon className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Utility Links */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-1.5 overflow-x-auto scrollbar-hide">
            {utilityLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap rounded px-2 py-0.5 text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .underline-links a,
        .underline-links [role="link"] {
          text-decoration: underline !important;
        }
      `}</style>
    </div>
  );
}
