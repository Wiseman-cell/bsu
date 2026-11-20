import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  ArrowRight,
  FlaskConical,
  BrainCircuit,
  Dna,
  Landmark,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Coins,
  Download,
  ExternalLink,
  BookOpen,
  Users,
  Globe,
  Lightbulb,
  BarChart3,
  Microscope,
} from "lucide-react";

const centres = [
  {
    name: "Centre for Lymphatic Medicine & Tropical Diseases",
    slug: "lymphatic-medicine",
    icon: FlaskConical,
    color: "bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400",
    focus: [
      "Lymphedema pathophysiology and clinical management",
      "Filariasis and neglected tropical disease research",
      "Community-based lymphology screening programs",
      "Complex decongestive therapy (CDT) innovation",
    ],
    lead: "Prof. Grace Wanjiku, PhD (Lymphology)",
    grants: "WHO-NTD, Ministry of Health Kenya",
  },
  {
    name: "Centre for Artificial Intelligence & Digital Health",
    slug: "ai-digital-health",
    icon: BrainCircuit,
    color: "bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400",
    focus: [
      "AI-driven diagnostic imaging for tropical diseases",
      "Digital health records and interoperability standards",
      "Machine learning for epidemiological surveillance",
      "Telemedicine platforms for rural outreach",
    ],
    lead: "Dr. Samuel Otieno, PhD (Computer Science)",
    grants: "Google Research, Mozilla Foundation",
  },
  {
    name: "Centre for Bio-Sciences & Molecular Research",
    slug: "bio-sciences",
    icon: Dna,
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400",
    focus: [
      "Molecular characterization of regional pathogens",
      "Indigenous plant bio-prospecting and drug discovery",
      "Genomic surveillance of antimicrobial resistance",
      "Biotechnology innovation for food security",
    ],
    lead: "Prof. Anne Kimani, PhD (Biochemistry)",
    grants: "NACOSTI, Wellcome Trust",
  },
  {
    name: "Centre for Governance & Public Policy Research",
    slug: "governance-policy",
    icon: Landmark,
    color: "bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400",
    focus: [
      "Multi-campus governance frameworks for East Africa",
      "Public policy analysis for health system financing",
      "Electoral integrity and democratic institution building",
      "Regulatory compliance for cross-border education",
    ],
    lead: "Dr. Peter Mutua, PhD (Political Science)",
    grants: "African Capacity Building Foundation",
  },
];

const stats = [
  { label: "Active Research Projects", value: "50+", icon: Microscope },
  { label: "International Partners", value: "12", icon: Globe },
  { label: "Publications", value: "200+", icon: BookOpen },
  { label: "Research Fellows", value: "85", icon: Users },
];

const ierbSteps = [
  {
    step: 1,
    title: "Complete IERB Application Form",
    description:
      "Download and fill the Institutional Ethics Review Board application form. Include principal investigator details, study synopsis, and methodology.",
    action: "Download IERB Form (PDF)",
  },
  {
    step: 2,
    title: "Submit Protocol & Consent Documents",
    description:
      "Attach your full research protocol, informed consent templates, data management plan, and risk assessment.",
    action: "Submission Guidelines",
  },
  {
    step: 3,
    title: "IERB Review & Feedback",
    description:
      "The IERB panel reviews submissions monthly. Expect feedback within 14–21 working days. Revisions may be requested.",
    action: "Review Calendar",
  },
  {
    step: 4,
    title: "Receive Ethics Clearance Certificate",
    description:
      "Upon approval, a formal ethics clearance certificate is issued. Research may commence only after receiving this document.",
    action: "View Sample Certificate",
  },
];

const complianceNotes = [
  {
    title: "Research Grant Compliance",
    description:
      "All externally funded research must align with BSU's Financial Management Regulations and donor reporting standards. Quarterly progress reports are mandatory.",
  },
  {
    title: "Intellectual Property & Tech Transfer",
    description:
      "Innovations arising from BSU-funded research are governed by the IP Policy 2024. The Office of Research facilitates patent filings and commercial licensing.",
  },
  {
    title: "Data Protection & Privacy",
    description:
      "Researchers must comply with the Data Protection Act (Kenya) and BSU's institutional data governance framework. Anonymization standards apply to all human-subject data.",
  },
];

const fundingOpportunities = [
  {
    name: "BSU Internal Seed Grant",
    amount: "Up to KES 2,000,000",
    deadline: "Rolling applications",
    scope: "Early-stage projects across all disciplines",
  },
  {
    name: "East African Health Research Fund",
    amount: "Up to USD 150,000",
    deadline: "31 March 2026",
    scope: "Health systems and tropical disease research",
  },
  {
    name: "Digital Innovation Research Award",
    amount: "Up to KES 1,500,000",
    deadline: "15 June 2026",
    scope: "AI, digital health, and ICT for development",
  },
];

const journals = [
  {
    title: "Journal of Lymphatic Medicine & Tropical Health",
    issn: "2789-4102",
    frequency: "Quarterly",
    scope: "Lymphology, neglected tropical diseases, and community health interventions.",
  },
  {
    title: "BSU Review of AI & Digital Health",
    issn: "2810-7732",
    frequency: "Bi-annual",
    scope: "Machine learning applications, health informatics, and digital policy.",
  },
  {
    title: "Brooklyn State Law & Governance Review",
    issn: "2756-9914",
    frequency: "Annual",
    scope: "Public policy, institutional governance, and regulatory frameworks.",
  },
];

const partnerships = [
  {
    partner: "World Health Organization (WHO)",
    focus: "Neglected tropical disease research and training",
    region: "Global",
  },
  {
    partner: "University of Oxford",
    focus: "Bio-sciences and genomic surveillance",
    region: "United Kingdom",
  },
  {
    partner: "Google Research",
    focus: "AI for health diagnostics",
    region: "Global",
  },
  {
    partner: "Wellcome Trust",
    focus: "Molecular research and antimicrobial resistance",
    region: "United Kingdom",
  },
  {
    partner: "University of Cape Town",
    focus: "Governance and public policy",
    region: "South Africa",
  },
  {
    partner: "NACOSTI Kenya",
    focus: "National research funding coordination",
    region: "Kenya",
  },
];

export const metadata = {
  title: "Research, Innovation & Ethics | Brooklyn State University",
  description:
    "Explore BSU's Centres of Excellence in Lymphatic Medicine, AI & Digital Health, Bio-Sciences, and Governance. Apply for IERB ethics clearance and research grants.",
};

export default function ResearchPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <FlaskConical className="h-3.5 w-3.5" />
              Research & Innovation
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Research, Innovation & Ethics Hub
            </h1>
            <p className="text-lg text-slate-300">
              Driving high-impact, interdisciplinary research across health
              sciences, artificial intelligence, bio-sciences, and governance
              policy.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-10 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 shrink-0">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centres of Excellence */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Centres of Excellence
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Flagship research centres advancing knowledge and community impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {centres.map((centre, idx) => (
              <ScrollReveal key={centre.slug} delay={idx * 100}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${centre.color}`}
                      >
                        <centre.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{centre.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {centre.focus.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-500 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="text-slate-500">Centre Lead</p>
                        <p className="font-medium text-slate-900 dark:text-slate-100">{centre.lead}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Active Grants</p>
                        <p className="font-medium text-slate-900 dark:text-slate-100">{centre.grants}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Research Grants & Funding */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <Coins className="h-5 w-5 text-amber-600" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Research Grants & Funding
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Internal and external funding opportunities to support groundbreaking research at BSU.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {fundingOpportunities.map((grant, idx) => (
              <ScrollReveal key={grant.name} delay={idx * 100}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">{grant.deadline}</Badge>
                    <CardTitle className="text-base">{grant.name}</CardTitle>
                    <CardDescription>{grant.scope}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Award: {grant.amount}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* IP & Technology Transfer */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-5 w-5 text-violet-600" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  IP & Technology Transfer
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Turning research outcomes into products, services, and societal impact.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">What We Offer</h3>
                <ul className="space-y-3">
                  {[
                    "Prior art searches and patent landscaping",
                    "Patent drafting and prosecution support",
                    "Licensing and spin-out company formation",
                    "Industry partnership and commercialization brokering",
                    "Copyright and trademark advisory",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">IP Policy Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Inventor royalty share</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">40%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Patents filed (2020–2025)</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">18</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Licensed technologies</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">7</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Spin-out companies</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">3</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Separator />

      {/* IERB Application */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Institutional Ethics Review Board (IERB)
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Ethics clearance is mandatory for all research involving human
                subjects, personal data, or clinical interventions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Steps */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Application Process
              </h3>
              {ierbSteps.map((s, idx) => (
                <ScrollReveal key={s.step} delay={idx * 100}>
                  <Card className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 text-sm font-bold">
                          {s.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                            {s.title}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                            {s.description}
                          </p>
                          <Button variant="ghost" size="sm" className="mt-2 h-7 text-xs">
                            <Download className="mr-1 h-3 w-3" />
                            {s.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Compliance & Grants */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Compliance & Grants
              </h3>
              {complianceNotes.map((note) => (
                <Card key={note.title} className="hover:shadow-sm transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Coins className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {note.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          {note.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-emerald-200 dark:border-emerald-800">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <ExternalLink className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Research Grants Portal
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        Apply for internal seed funding and access external grant
                        opportunity alerts through the BSU Research Grants Portal.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3"
                      >
                        Open Grants Portal
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Publications & Journals */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-sky-600" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Publications & Journals
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Peer-reviewed outlets showcasing research excellence from BSU faculty, students, and collaborators.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {journals.map((journal, idx) => (
              <ScrollReveal key={journal.issn} delay={idx * 100}>
                <Card className="hover:shadow-sm transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {journal.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          {journal.scope}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 shrink-0">
                        <span>ISSN: {journal.issn}</span>
                        <Badge variant="outline">{journal.frequency}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/journals">
              <Button variant="outline">
                Browse All Journals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator />

      {/* Research Partnerships */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-5 w-5 text-emerald-600" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Research Partnerships
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Collaborations that extend our reach and amplify the impact of our research.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((p, idx) => (
              <ScrollReveal key={p.partner} delay={idx * 100}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{p.partner}</CardTitle>
                    <CardDescription>{p.region}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <span className="font-medium">Focus:</span> {p.focus}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
