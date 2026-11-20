"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export default function SignInPrompt() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-md px-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 mx-auto mb-6">
          <ShieldCheck className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Authentication Required
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Please sign in with your CampusConnect Student Portal credentials to
          access your dashboard.
        </p>
        <div className="flex flex-col gap-3">
          <Button
            onClick={() => signIn("campusconnect-student")}
            className="bg-emerald-600 hover:bg-emerald-700 w-full"
          >
            Sign In to CampusConnect
          </Button>
          <p className="text-xs text-slate-500">
            Use your Admission Number and password.
          </p>
        </div>
      </div>
    </section>
  );
}
