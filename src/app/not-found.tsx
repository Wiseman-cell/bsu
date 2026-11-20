"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Home,
  GraduationCap,
  BookOpen,
  Globe,
  FileText,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import React from "react";

const quickLinks = [
  { label: "Homepage", href: "/", icon: Home },
  { label: "Academics", href: "/academics", icon: GraduationCap },
  { label: "Admissions", href: "/admissions", icon: BookOpen },
  { label: "Global Health Outreach", href: "/global-health-outreach", icon: Globe },
  { label: "Procurement & Tenders", href: "/procurement/eoi-2026", icon: FileText },
  { label: "Campus Locations", href: "/campuses", icon: MapPin },
];

export default function NotFoundPage() {
  const [query, setQuery] = React.useState("");

  return (
    <div className="flex flex-col min-h-[70vh]">
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-800 mb-6">
              <span className="text-4xl font-bold text-emerald-400">404</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-3">
              Page Not Found
            </h1>
            <p className="text-lg text-slate-300 max-w-xl mx-auto">
              The page you are looking for does not exist, has been moved, or is
              temporarily unavailable. Let us help you find what you need.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950 flex-1">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">
                Try searching for what you need:
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (query.trim()) {
                    window.location.href = `/api/search?q=${encodeURIComponent(query)}`;
                  }
                }}
                className="flex gap-3"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search programmes, schools, research, tenders..."
                    className="pl-9"
                  />
                </div>
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                  Search
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <div className="mb-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Quick Portal Redirects
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 rounded-lg border p-4 hover:shadow-sm transition-all hover:border-emerald-200 dark:hover:border-emerald-800"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                    <link.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                      {link.label}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900/40 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Need Help? Contact Us
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-600" />
                <span className="text-slate-700 dark:text-slate-300">+254 700 000 000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-600" />
                <span className="text-slate-700 dark:text-slate-300">info@bsu.ac.ke</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <span className="text-slate-700 dark:text-slate-300">Thika Main Campus, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
