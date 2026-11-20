"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About BSU",
    href: "/about",
    children: [
      { label: "BSU Profile & History", href: "/about" },
      { label: "Vision, Mission & Core Values", href: "/about/vision-mission" },
      { label: "Governance", href: "/governance" },
      { label: "Directorates", href: "/directorates" },
      { label: "CSR & Sustainability", href: "/csr" },
      { label: "ISO Certification", href: "/iso-certification" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Schools Overview", href: "/academics" },
      { label: "Schools & Programs", href: "/academics/schools" },
      { label: "Academic Regulations", href: "/academic-regulations" },
      { label: "Graduation", href: "/graduation" },
      { label: "International Students", href: "/international-students" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admissions Overview", href: "/admissions" },
      { label: "Fee Calculator", href: "/admissions/calculator" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Research & Innovation",
    href: "/research",
    children: [
      { label: "Research Hub", href: "/research" },
      { label: "Journals & Publications", href: "/journals" },
      { label: "Conferences", href: "/conferences" },
      { label: "Partnerships", href: "/partnerships" },
    ],
  },
  {
    label: "Campus Life",
    href: "/student-life",
    children: [
      { label: "Student Life", href: "/student-life" },
      { label: "BSUSA & Governance", href: "/dsa" },
      { label: "Modern Hostels", href: "/hostels" },
      { label: "Sports & Recreation", href: "/sports" },
      { label: "Chaplaincy", href: "/chaplaincy" },
      { label: "Student Handbook", href: "/student-handbook" },
    ],
  },
  {
    label: "Media & Resources",
    href: "/news",
    children: [
      { label: "News", href: "/news" },
      { label: "Notices", href: "/notices" },
      { label: "Events", href: "/events" },
      { label: "Photo Gallery", href: "/gallery" },
      { label: "Calendar", href: "/calendar" },
      { label: "Downloads", href: "/downloads" },
      { label: "Press Releases", href: "/press" },
    ],
  },
  {
    label: "Multi-Campus",
    href: "/campuses",
    children: [
      { label: "Campuses Overview", href: "/campuses" },
      { label: "Thika Main Campus", href: "/campuses" },
      { label: "47 Kenyan County Hubs", href: "/campuses" },
      { label: "Kigali Campus (Rwanda)", href: "/campuses" },
      { label: "Lilongwe Campus (Malawi)", href: "/campuses" },
      { label: "Mogadishu Campus (Somalia)", href: "/campuses" },
    ],
  },
  {
    label: "Library",
    href: "/library",
    children: [
      { label: "E-Library Portal", href: "/library" },
      { label: "Student Portal", href: "/portal/student" },
    ],
  },
  { label: "Outreach", href: "/global-health-outreach" },
];

export function MainNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-slate-950/95 dark:supports-[backdrop-filter]:dark:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-700 text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Brooklyn State
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                University
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isActive(item.href)
                          ? "text-emerald-700 dark:text-emerald-400"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute left-0 top-full mt-1 w-64 rounded-lg border bg-white p-1.5 shadow-lg dark:bg-slate-950 dark:border-slate-800">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-emerald-700 dark:text-emerald-400"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => {
                    if (!item.children) setMobileOpen(false);
                  }}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium",
                    isActive(item.href)
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
