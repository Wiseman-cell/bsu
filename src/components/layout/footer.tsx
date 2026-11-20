import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

const eResources = [
  { label: "CampusConnect Student Portal", href: "#" },
  { label: "Staff Portal", href: "#" },
  { label: "Online Application", href: "/admissions" },
  { label: "E-Learning Portal", href: "#" },
  { label: "BSU Institutional Repository", href: "#" },
  { label: "Conference Portal", href: "#" },
  { label: "University Journals", href: "#" },
  { label: "Electronic Journals", href: "#" },
  { label: "Digital Skills Academy", href: "#" },
];

const studentAffairs = [
  { label: "Department of Student Affairs", href: "#" },
  { label: "Guidance & Counseling", href: "#" },
  { label: "Student Campus Life", href: "#" },
  { label: "Student Leadership", href: "#" },
  { label: "Clubs & Associations", href: "#" },
  { label: "Sports & Recreation", href: "#" },
  { label: "Arts & Cultural Events", href: "#" },
  { label: "Student Handbook", href: "#" },
  { label: "Alumni Website", href: "#" },
];

const quickLinks = [
  { label: "Academic Calendars", href: "#" },
  { label: "Online Programmes", href: "#" },
  { label: "Notice Board", href: "#" },
  { label: "Calendar of Events", href: "#" },
  { label: "Forms and Downloads", href: "#" },
  { label: "Helpdesk Support", href: "#" },
  { label: "University Policies", href: "#" },
  { label: "BSU TVET Institute", href: "#" },
  { label: "BSU University Press", href: "#" },
  { label: "Data Protection & Privacy", href: "#" },
];

const publicInfo = [
  { label: "Service Charter", href: "#" },
  { label: "Maps & Contacts", href: "#" },
  { label: "Our Campuses", href: "#" },
  { label: "Jobs & Careers", href: "#" },
  { label: "Photo Gallery", href: "#" },
  { label: "Public Speeches", href: "#" },
  { label: "Customer Feedback", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Data Protection", href: "#" },
  { label: "Bids & Tenders", href: "/procurement/eoi-2026" },
];

const emails = [
  { label: "Admissions Inquiry", value: "admissions@bsu.ac.ke" },
  { label: "General Inquiry", value: "info@bsu.ac.ke" },
  { label: "ICT HelpDesk", value: "ict@bsu.ac.ke" },
  { label: "Accommodation", value: "accommodation@bsu.ac.ke" },
];

const phones = [
  { label: "General Inquiry", value: "+254 700 000 000" },
  { label: "Admissions", value: "+254 700 000 001" },
  { label: "Student Finance", value: "+254 700 000 002" },
  { label: "Accommodation", value: "+254 700 000 003" },
  { label: "Emergency Hotline", value: "+254 700 000 999" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group flex items-center gap-1 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300">
      {/* Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <FooterColumn title="E-Resources" links={eResources} />
          <FooterColumn title="Student Affairs" links={studentAffairs} />
          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Public Info" links={publicInfo} />
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Bottom Contact Strip */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand Block */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-700 text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="leading-tight">
                <span className="block text-base font-bold text-white">Brooklyn State</span>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-slate-400">University</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Transforming Lives Through Education & Research
            </p>
            <div className="inline-flex items-center rounded bg-emerald-900/40 px-3 py-1.5 text-xs font-semibold text-emerald-300 border border-emerald-800/50">
              ISO 9001:2015 Certified Institution
            </div>
          </div>

          {/* Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Address</h4>
            <div className="flex items-start gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
              <span>Thika Main Campus, Kenya</span>
            </div>
          </div>

          {/* Emails */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Email Us</h4>
            <ul className="space-y-2">
              {emails.map((email) => (
                <li key={email.label} className="flex items-start gap-2 text-sm">
                  <Mail className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-500 uppercase">{email.label}</span>
                    <a href={`mailto:${email.value}`} className="text-slate-300 hover:text-emerald-400 transition-colors">
                      {email.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Phones */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Call Us</h4>
            <ul className="space-y-2">
              {phones.map((phone) => (
                <li key={phone.label} className="flex items-start gap-2 text-sm">
                  <Phone className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-500 uppercase">{phone.label}</span>
                    <a href={`tel:${phone.value.replace(/\s/g, "")}`} className="text-slate-300 hover:text-emerald-400 transition-colors">
                      {phone.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Copyright Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            Copyright &copy; 2026, Brooklyn State University. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
