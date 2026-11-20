import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ContactForm } from "./contact-form";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Phone, Mail, MapPin, Clock, Users, FileText, CreditCard, Monitor, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Contact Us | Brooklyn State University",
  description:
    "Get in touch with Brooklyn State University for inquiries, support, and partnership opportunities. Contact our Thika Main Campus and regional offices.",
};

const contactDepartments = [
  {
    title: "Admissions Office",
    description: "Applications, enrollment, and programme inquiries",
    email: "admissions@bsu.ac.ke",
    phone: "+254 712 345 678",
    icon: Users,
    color: "bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400",
  },
  {
    title: "Academic Registry",
    description: "Student records, transcripts, and academic matters",
    email: "registry@bsu.ac.ke",
    phone: "+254 712 345 679",
    icon: FileText,
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400",
  },
  {
    title: "Finance Office",
    description: "Fee payments, invoices, and financial aid",
    email: "finance@bsu.ac.ke",
    phone: "+254 712 345 680",
    icon: CreditCard,
    color: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400",
  },
  {
    title: "ICT Helpdesk",
    description: "Portal support, email, and technical issues",
    email: "ict@bsu.ac.ke",
    phone: "+254 712 345 681",
    icon: Monitor,
    color: "bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400",
  },
];

const regionalCampuses = [
  {
    name: "Kigali Campus",
    country: "Rwanda",
    address: "KG 11 Avenue, Kigali, Rwanda",
    phone: "+250 788 123 456",
    email: "kigali@bsu.ac.ke",
  },
  {
    name: "Lilongwe Campus",
    country: "Malawi",
    address: "Area 3, Lilongwe, Malawi",
    phone: "+265 888 234 567",
    email: "lilongwe@bsu.ac.ke",
  },
  {
    name: "Mogadishu Campus",
    country: "Somalia",
    address: "Hodan District, Mogadishu, Somalia",
    phone: "+252 615 345 678",
    email: "mogadishu@bsu.ac.ke",
  },
];

export default function ContactsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-slate-300">
              Get in touch with Brooklyn State University for inquiries, support,
              and partnership opportunities. Our teams are ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Campus Contact Info */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Thika Main Campus
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  Visit us or reach out through any of the channels below. Our main
                  campus is located in Thika, Kenya, with state-of-the-art facilities
                  and a welcoming student environment.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                        Postal Address
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        P.O. Box 1234-01000, Thika, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                        Phone Numbers
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        +254 712 345 678
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        +254 733 456 789
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                        Email Addresses
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        info@bsu.ac.ke
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        admissions@bsu.ac.ke
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                        Office Hours
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        Monday - Friday: 8:00 AM - 5:00 PM
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        Saturday: 9:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Department Contact Cards */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Department Contacts
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Reach out to the specific department that can best assist with your inquiry.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDepartments.map((dept, index) => (
              <ScrollReveal key={dept.title} delay={index * 100}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg shrink-0 ${dept.color}`}
                      >
                        <dept.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                          {dept.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                          {dept.description}
                        </p>
                        <p className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <Mail className="h-3.5 w-3.5 shrink-0" />
                          {dept.email}
                        </p>
                        <p className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2 mt-1">
                          <Phone className="h-3.5 w-3.5 shrink-0" />
                          {dept.phone}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Campuses */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Regional Campuses
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Brooklyn State University extends its reach across East Africa through our regional campuses.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {regionalCampuses.map((campus, index) => (
              <ScrollReveal key={campus.name} delay={index * 100}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{campus.name}</CardTitle>
                    <CardDescription>{campus.country}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {campus.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-slate-500 shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {campus.phone}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-slate-500 shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {campus.email}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="pb-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Homepage
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
