"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Calculator, ArrowRight, GraduationCap, Coins } from "lucide-react";

interface FeeTier {
  kuccpsPerSemester: number;
  selfSponsoredPerSemester: number;
  semestersPerYear: number;
}

const feeStructure: Record<string, Record<string, FeeTier>> = {
  "College of Health & Specialized Medical Sciences": {
    undergraduate: {
      kuccpsPerSemester: 72000,
      selfSponsoredPerSemester: 145000,
      semestersPerYear: 2,
    },
    postgraduate: {
      kuccpsPerSemester: 95000,
      selfSponsoredPerSemester: 185000,
      semestersPerYear: 2,
    },
    diploma: {
      kuccpsPerSemester: 45000,
      selfSponsoredPerSemester: 85000,
      semestersPerYear: 2,
    },
  },
  "School of Business, Economics & Leadership": {
    undergraduate: {
      kuccpsPerSemester: 58000,
      selfSponsoredPerSemester: 115000,
      semestersPerYear: 2,
    },
    postgraduate: {
      kuccpsPerSemester: 85000,
      selfSponsoredPerSemester: 160000,
      semestersPerYear: 3, // MBA trimester
    },
    diploma: {
      kuccpsPerSemester: 38000,
      selfSponsoredPerSemester: 72000,
      semestersPerYear: 2,
    },
  },
  "School of Computing, Informatics & Artificial Intelligence": {
    undergraduate: {
      kuccpsPerSemester: 62000,
      selfSponsoredPerSemester: 125000,
      semestersPerYear: 2,
    },
    diploma: {
      kuccpsPerSemester: 40000,
      selfSponsoredPerSemester: 78000,
      semestersPerYear: 2,
    },
  },
  "School of Law & Governance": {
    undergraduate: {
      kuccpsPerSemester: 68000,
      selfSponsoredPerSemester: 135000,
      semestersPerYear: 2,
    },
    diploma: {
      kuccpsPerSemester: 42000,
      selfSponsoredPerSemester: 80000,
      semestersPerYear: 2,
    },
  },
  "School of Education, Humanities & Social Sciences": {
    undergraduate: {
      kuccpsPerSemester: 52000,
      selfSponsoredPerSemester: 105000,
      semestersPerYear: 2,
    },
    postgraduate: {
      kuccpsPerSemester: 75000,
      selfSponsoredPerSemester: 145000,
      semestersPerYear: 2,
    },
    diploma: {
      kuccpsPerSemester: 35000,
      selfSponsoredPerSemester: 68000,
      semestersPerYear: 2,
    },
  },
  "School of Pure & Applied Sciences": {
    undergraduate: {
      kuccpsPerSemester: 60000,
      selfSponsoredPerSemester: 120000,
      semestersPerYear: 2,
    },
    diploma: {
      kuccpsPerSemester: 38000,
      selfSponsoredPerSemester: 75000,
      semestersPerYear: 2,
    },
  },
  "School of Engineering & Built Environment": {
    undergraduate: {
      kuccpsPerSemester: 78000,
      selfSponsoredPerSemester: 155000,
      semestersPerYear: 2,
    },
  },
  "School of Postgraduate Studies & Global Research": {
    doctorate: {
      kuccpsPerSemester: 0,
      selfSponsoredPerSemester: 220000,
      semestersPerYear: 2,
    },
    postgraduate: {
      kuccpsPerSemester: 85000,
      selfSponsoredPerSemester: 170000,
      semestersPerYear: 2,
    },
  },
};

const schools = Object.keys(feeStructure);

const levelsBySchool: Record<string, string[]> = {
  "College of Health & Specialized Medical Sciences": ["undergraduate", "postgraduate", "diploma"],
  "School of Business, Economics & Leadership": ["undergraduate", "postgraduate", "diploma"],
  "School of Computing, Informatics & Artificial Intelligence": ["undergraduate", "diploma"],
  "School of Law & Governance": ["undergraduate", "diploma"],
  "School of Education, Humanities & Social Sciences": ["undergraduate", "postgraduate", "diploma"],
  "School of Pure & Applied Sciences": ["undergraduate", "diploma"],
  "School of Engineering & Built Environment": ["undergraduate"],
  "School of Postgraduate Studies & Global Research": ["postgraduate", "doctorate"],
};

const levelLabels: Record<string, string> = {
  undergraduate: "Undergraduate (Degree)",
  postgraduate: "Postgraduate (Masters)",
  diploma: "Diploma",
  doctorate: "Doctorate (PhD)",
};

const formatKes = (amount: number) =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(amount);

export default function FeeCalculatorPage() {
  const [school, setSchool] = React.useState(schools[0]);
  const [level, setLevel] = React.useState(levelsBySchool[schools[0]][0]);
  const [stream, setStream] = React.useState<"kuccps" | "self-sponsored">("kuccps");
  const [years, setYears] = React.useState(4);
  const [calculated, setCalculated] = React.useState(false);

  React.useEffect(() => {
    const available = levelsBySchool[school];
    if (!available.includes(level)) {
      setLevel(available[0]);
    }
    setCalculated(false);
  }, [school, level]);

  const feeTier = feeStructure[school]?.[level];

  const handleCalculate = () => {
    setCalculated(true);
  };

  const perSemester =
    feeTier?.[stream === "kuccps" ? "kuccpsPerSemester" : "selfSponsoredPerSemester"] ?? 0;
  const perYear = perSemester * (feeTier?.semestersPerYear ?? 2);
  const totalProgramme = perYear * years;

  const breakdown = {
    tuition: Math.round(perSemester * 0.82),
    activity: Math.round(perSemester * 0.08),
    library: Math.round(perSemester * 0.05),
    technology: Math.round(perSemester * 0.05),
  };

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <Calculator className="h-3.5 w-3.5" />
              Fee Estimator
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Admissions & Fee Calculator
            </h1>
            <p className="text-lg text-slate-300">
              Estimate your programme fees based on academic school, level, and
              admission pathway.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-emerald-600" />
                  Programme Details
                </CardTitle>
                <CardDescription>
                  Select your school, level, and admission stream.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* School */}
                <div className="space-y-2">
                  <Label htmlFor="school">Academic School</Label>
                  <select
                    id="school"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    {schools.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Level */}
                <div className="space-y-2">
                  <Label htmlFor="level">Programme Level</Label>
                  <select
                    id="level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    {levelsBySchool[school].map((l) => (
                      <option key={l} value={l}>{levelLabels[l]}</option>
                    ))}
                  </select>
                </div>

                {/* Stream */}
                <div className="space-y-2">
                  <Label>Admission Stream</Label>
                  <div className="flex rounded-md border border-input p-1 gap-1">
                    {(["kuccps", "self-sponsored"] as const).map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          setStream(s);
                          setCalculated(false);
                        }}
                        className={cn(
                          "flex-1 rounded px-3 py-1.5 text-sm font-medium transition-colors",
                          stream === s
                            ? "bg-emerald-600 text-white shadow"
                            : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                        )}
                      >
                        {s === "kuccps"
                          ? "KUCCPS (Government Sponsored)"
                          : "Self-Sponsored"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <Label htmlFor="years">Programme Duration (Years)</Label>
                  <select
                    id="years"
                    value={years}
                    onChange={(e) => {
                      setYears(Number(e.target.value));
                      setCalculated(false);
                    }}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    {[2, 3, 4, 5, 6].map((y) => (
                      <option key={y} value={y}>{y} year{y > 1 ? "s" : ""}</option>
                    ))}
                  </select>
                </div>

                <Button
                  onClick={handleCalculate}
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Fees
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className={cn(!calculated && "opacity-60")}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coins className="h-5 w-5 text-amber-600" />
                  Fee Estimate
                </CardTitle>
                <CardDescription>
                  Estimated per-semester, annual, and total programme fees.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {calculated ? (
                  <>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-lg bg-slate-50 dark:bg-slate-900/40 p-4 text-center">
                        <p className="text-xs text-slate-500 mb-1">Per Semester</p>
                        <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{formatKes(perSemester)}</p>
                      </div>
                      <div className="rounded-lg bg-slate-50 dark:bg-slate-900/40 p-4 text-center">
                        <p className="text-xs text-slate-500 mb-1">Per Year</p>
                        <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{formatKes(perYear)}</p>
                      </div>
                      <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/30 p-4 text-center">
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 mb-1">Total Programme</p>
                        <p className="text-lg font-bold text-emerald-700 dark:text-emerald-300">{formatKes(totalProgramme)}</p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                        Per-Semester Breakdown
                      </p>
                      <div className="space-y-2">
                        {Object.entries(breakdown).map(([key, val]) => (
                          <div
                            key={key}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-slate-600 dark:text-slate-400 capitalize">
                              {key}
                            </span>
                            <span className="font-medium text-slate-900 dark:text-slate-100">
                              {formatKes(val)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 p-4">
                      <p className="text-xs text-amber-700 dark:text-amber-400">
                        Disclaimer: These are estimated figures. Actual fees may
                        vary by programme intake year and government subsidy
                        adjustments. Please confirm with the Admissions Office.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Calculator className="h-10 w-10 text-slate-300 mb-3" />
                    <p className="text-sm text-slate-500">
                      Select your programme details and click Calculate Fees to
                      see an estimate.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
