"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  AlertTriangle,
  RotateCcw,
  Home,
  Mail,
  Bug,
} from "lucide-react";

export default function GlobalErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [showDetails, setShowDetails] = React.useState(false);

  React.useEffect(() => {
    // Log error to monitoring service in production
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16 bg-white dark:bg-slate-950">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400 mb-4">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Something Went Wrong
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            We encountered an unexpected error while processing your request.
            Our team has been notified. Please try again or contact support.
          </p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-6">
            {/* Error digest */}
            {error.digest && (
              <div className="rounded-md bg-slate-50 dark:bg-slate-900/40 p-3">
                <p className="text-xs text-slate-500">Error Reference</p>
                <div className="flex items-center gap-2 mt-1">
                  <Bug className="h-3.5 w-3.5 text-slate-400" />
                  <code className="text-xs font-mono text-slate-700 dark:text-slate-300">
                    {error.digest}
                  </code>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={reset}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full">
                  <Home className="mr-2 h-4 w-4" />
                  Go to Homepage
                </Button>
              </Link>
            </div>

            {/* Technical details toggle */}
            <div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline"
              >
                {showDetails ? "Hide" : "Show"} technical details
              </button>

              {showDetails && (
                <div className="mt-3 rounded-md bg-slate-900 p-3 overflow-x-auto">
                  <pre className="text-xs font-mono text-red-300 whitespace-pre-wrap break-all">
                    {error.message}
                    {error.stack ? `\n\n${error.stack}` : ""}
                  </pre>
                </div>
              )}
            </div>

            {/* Support contact */}
            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2 border-t">
              <a
                href="mailto:support@bsu.ac.ke"
                className="flex items-center gap-1 hover:text-emerald-600 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                support@bsu.ac.ke
              </a>
              <span>·</span>
              <span>BSU IT Service Desk</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
