"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  HeartPulse,
  MapPin,
  Calendar,
  CheckCircle2,
  AlertCircle,
  User,
  Mail,
  Phone,
  ClipboardList,
  Stethoscope,
} from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  idNumber: string;
  location: string;
  role: string;
  availabilityStart: string;
  availabilityEnd: string;
  priorExperience: string;
  emergencyContact: string;
}

const locations = [
  { value: "THIKA_MAIN", label: "Thika Main Campus (Kenya)" },
  { value: "COUNTY_HUB", label: "47 County Satellite Hubs (Kenya)" },
  { value: "KIGALI_RWANDA", label: "Kigali Campus (Rwanda)" },
  { value: "LILONGWE_MALAWI", label: "Lilongwe Campus (Malawi)" },
  { value: "MOGADISHU_SOMALIA", label: "Mogadishu Campus (Somalia)" },
];

const roles = [
  { value: "medical_doctor", label: "Medical Doctor / Surgeon" },
  { value: "nurse", label: "Registered Nurse / Clinical Officer" },
  { value: "pharmacist", label: "Pharmacist" },
  { value: "community_health_worker", label: "Community Health Worker" },
  { value: "counsellor", label: "Counsellor / Psychologist" },
  { value: "lab_technician", label: "Lab Technician" },
  { value: "administrative", label: "Administrative / Coordination" },
  { value: "logistics", label: "Logistics / Transport" },
  { value: "it_support", label: "IT / Data Management" },
  { value: "general_volunteer", label: "General Volunteer" },
];

export default function VolunteerRegistrationPage() {
  const [formData, setFormData] = React.useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    idNumber: "",
    location: "THIKA_MAIN",
    role: "general_volunteer",
    availabilityStart: "2026-08-01",
    availabilityEnd: "2026-09-15",
    priorExperience: "",
    emergencyContact: "",
  });

  const [errors, setErrors] = React.useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim() || formData.fullName.length < 3) {
      newErrors.fullName = "Full name is required (min 3 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "A valid email address is required.";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = "Phone number is required (min 8 digits).";
    }
    if (!formData.idNumber.trim()) {
      newErrors.idNumber = "ID / Passport number is required.";
    }
    if (!formData.emergencyContact.trim()) {
      newErrors.emergencyContact = "Emergency contact is required.";
    }
    if (new Date(formData.availabilityStart) > new Date(formData.availabilityEnd)) {
      newErrors.availabilityEnd = "End date must be after start date.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/volunteer/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        alert(data.message || "Submission failed. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col">
        <section className="bg-emerald-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Volunteer Registration
            </h1>
          </div>
        </section>
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-xl px-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
              Registration Submitted
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Thank you, <strong>{formData.fullName}</strong>. Your volunteer
              application for the 2026 Global Health Outreach has been received.
            </p>
            <p className="text-sm text-slate-500">
              A confirmation email has been sent to {formData.email}. The
              outreach coordination team will contact you shortly.
            </p>
            <Button
              className="mt-8 bg-emerald-600 hover:bg-emerald-700"
              onClick={() => window.location.reload()}
            >
              Register Another Volunteer
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-emerald-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <Stethoscope className="h-3.5 w-3.5" />
              August–September 2026
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Volunteer Registration
            </h1>
            <p className="text-lg text-emerald-100">
              Join BSU's Global Health Outreach & Community Care Program. We
              welcome medical professionals, students, and community volunteers
              across all our campuses.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-emerald-600" />
                Volunteer Application Form
              </CardTitle>
              <CardDescription>
                All fields marked with a red asterisk are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Personal Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        Full Name
                        <span className="text-red-500 ml-0.5">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Dr. Jane Wanjiku"
                          className={cn(
                            "pl-9",
                            errors.fullName && "border-red-300 focus-visible:ring-red-300"
                          )}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />{errors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address
                        <span className="text-red-500 ml-0.5">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="volunteer@example.com"
                          className={cn(
                            "pl-9",
                            errors.email && "border-red-300 focus-visible:ring-red-300"
                          )}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />{errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number
                        <span className="text-red-500 ml-0.5">*</span>
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+254 700 000 000"
                          className={cn(
                            "pl-9",
                            errors.phone && "border-red-300 focus-visible:ring-red-300"
                          )}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />{errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="idNumber">
                        ID / Passport Number
                        <span className="text-red-500 ml-0.5">*</span>
                      </Label>
                      <Input
                        id="idNumber"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleChange}
                        placeholder="e.g. 12345678"
                        className={cn(
                          errors.idNumber && "border-red-300 focus-visible:ring-red-300"
                        )}
                      />
                      {errors.idNumber && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />{errors.idNumber}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Assignment Preferences */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Assignment Preferences
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">
                        <MapPin className="inline h-3.5 w-3.5 mr-1" />
                        Preferred Campus / Location
                      </Label>
                      <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        {locations.map((loc) => (
                          <option key={loc.value} value={loc.value}>
                            {loc.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">
                        <HeartPulse className="inline h-3.5 w-3.5 mr-1" />
                        Volunteer Role
                      </Label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        {roles.map((r) => (
                          <option key={r.value} value={r.value}>{r.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Availability */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    <Calendar className="inline h-3.5 w-3.5 mr-1" />
                    Availability (August – September 2026)
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="availabilityStart">Available From</Label>
                      <Input
                        id="availabilityStart"
                        name="availabilityStart"
                        type="date"
                        value={formData.availabilityStart}
                        onChange={handleChange}
                        min="2026-08-01"
                        max="2026-09-30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availabilityEnd">Available Until</Label>
                      <Input
                        id="availabilityEnd"
                        name="availabilityEnd"
                        type="date"
                        value={formData.availabilityEnd}
                        onChange={handleChange}
                        min="2026-08-01"
                        max="2026-09-30"
                        className={cn(
                          errors.availabilityEnd && "border-red-300 focus-visible:ring-red-300"
                        )}
                      />
                      {errors.availabilityEnd && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />{errors.availabilityEnd}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Additional */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="priorExperience">Prior Experience & Qualifications</Label>
                    <Textarea
                      id="priorExperience"
                      name="priorExperience"
                      value={formData.priorExperience}
                      onChange={handleChange}
                      placeholder="Briefly describe your relevant medical or community outreach experience..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">
                      Emergency Contact (Name & Phone)
                      <span className="text-red-500 ml-0.5">*</span>
                    </Label>
                    <Input
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      placeholder="e.g. John Wanjiku, +254 700 111 111"
                      className={cn(
                        errors.emergencyContact && "border-red-300 focus-visible:ring-red-300"
                      )}
                    />
                    {errors.emergencyContact && (
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />{errors.emergencyContact}
                      </p>
                    )}
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 dark:bg-slate-900/40 p-4">
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    By submitting this form, you confirm that the information
                    provided is accurate and consent to BSU contacting you
                    regarding volunteer placement for the 2026 Global Health
                    Outreach program. All volunteers are required to undergo a
                    brief orientation session prior to deployment.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                >
                  {submitting ? "Submitting..." : "Submit Volunteer Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
