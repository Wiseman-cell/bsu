import { PrismaClient, AcademicLevel, CampusLocation } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Clean existing data
  await prisma.programme.deleteMany();
  await prisma.department.deleteMany();
  await prisma.school.deleteMany();
  await prisma.globalHealthOutreach.deleteMany();
  await prisma.tender.deleteMany();
  await prisma.volunteerRegistration.deleteMany();
  await prisma.tenderSubmission.deleteMany();
  await prisma.galleryImage.deleteMany();
  await prisma.download.deleteMany();
  await prisma.notice.deleteMany();
  await prisma.event.deleteMany();
  await prisma.newsArticle.deleteMany();
  await prisma.studentProfile.deleteMany();
  await prisma.staffProfile.deleteMany();
  await prisma.user.deleteMany();

  // ─── 8 SCHOOLS ───
  const schoolData = [
    {
      name: "College of Health & Specialized Medical Sciences",
      code: "CHSMS",
      slug: "college-of-health-sciences",
      description:
        "Home to BSU's flagship healthcare and research programs, including the pioneering B.Sc. in Lymphology and Lymphatic Medicine.",
    },
    {
      name: "School of Business, Economics & Leadership",
      code: "SBEL",
      slug: "school-of-business-economics-leadership",
      description:
        "Industry-aligned business, finance, and leadership programs designed for next-generation executives.",
    },
    {
      name: "School of Computing, Informatics & Artificial Intelligence",
      code: "SCIAI",
      slug: "school-of-computing-informatics-ai",
      description:
        "Cutting-edge computing, cybersecurity, data science, and artificial intelligence education.",
    },
    {
      name: "School of Law & Governance",
      code: "SLG",
      slug: "school-of-law-governance",
      description:
        "Rigorous legal education and governance studies anchored on ethical leadership and policy excellence.",
    },
    {
      name: "School of Education, Humanities & Social Sciences",
      code: "SEHSS",
      slug: "school-of-education-humanities-social-sciences",
      description:
        "Comprehensive teacher training, humanities, and social sciences for community transformation.",
    },
    {
      name: "School of Pure & Applied Sciences",
      code: "SPAS",
      slug: "school-of-pure-applied-sciences",
      description:
        "Research-intensive programs in chemistry, biochemistry, biotechnology, and actuarial science.",
    },
    {
      name: "School of Engineering & Built Environment",
      code: "SEBE",
      slug: "school-of-engineering-built-environment",
      description:
        "Modern engineering and architectural programs addressing infrastructure and spatial design needs.",
    },
    {
      name: "School of Postgraduate Studies & Global Research",
      code: "SPGR",
      slug: "school-of-postgraduate-studies-global-research",
      description:
        "Doctoral and advanced research programs driving innovation across health, business, and education.",
    },
  ];

  const schools = await Promise.all(
    schoolData.map((s) => prisma.school.create({ data: s }))
  );

  const [
    healthSchool,
    businessSchool,
    computingSchool,
    lawSchool,
    educationSchool,
    pureSciencesSchool,
    engineeringSchool,
    postgraduateSchool,
  ] = schools;

  // ─── DEPARTMENTS ───
  const deptData: {
    name: string;
    code: string;
    schoolId: string;
    programmes: {
      title: string;
      slug: string;
      code: string;
      level: AcademicLevel;
      isFlagship?: boolean;
      durationYears: number;
      requirements: string;
    }[];
  }[] = [
    {
      name: "Department of Lymphology & Lymphatic Medicine",
      code: "DLM",
      schoolId: healthSchool.id,
      programmes: [
        {
          title: "Bachelor of Science in Lymphology and Lymphatic Medicine",
          slug: "bsc-lymphology-lymphatic-medicine",
          code: "BSU-DLM-BSLLM",
          level: "UNDERGRADUATE",
          isFlagship: true,
          durationYears: 4,
          requirements:
            "KCSE Mean Grade C+ (Plus) with C+ in Biology and Chemistry. Alternative: Diploma in Clinical Medicine or equivalent.",
        },
      ],
    },
    {
      name: "Department of Clinical & Surgical Sciences",
      code: "DCS",
      schoolId: healthSchool.id,
      programmes: [
        {
          title: "Bachelor of Medicine and Bachelor of Surgery (MBChB)",
          slug: "mbchb",
          code: "BSU-DCS-MBCHB",
          level: "UNDERGRADUATE",
          durationYears: 6,
          requirements:
            "KCSE Mean Grade A- (Minus) with A- in Biology, Chemistry, Physics/Mathematics, and English/Kiswahili.",
        },
        {
          title: "Bachelor of Science in Clinical Medicine and Community Health",
          slug: "bsc-clinical-medicine-community-health",
          code: "BSU-DCS-BSCCMCH",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements:
            "KCSE Mean Grade C+ (Plus) with C+ in Biology and Chemistry.",
        },
        {
          title: "Diploma in Clinical Medicine & Surgery",
          slug: "diploma-clinical-medicine-surgery",
          code: "BSU-DCS-DIPCMS",
          level: "DIPLOMA",
          durationYears: 3,
          requirements:
            "KCSE Mean Grade C (Plain) with C in Biology and Chemistry.",
        },
      ],
    },
    {
      name: "Department of Nursing & Allied Health",
      code: "DNAH",
      schoolId: healthSchool.id,
      programmes: [
        {
          title: "Bachelor of Science in Nursing (BSN)",
          slug: "bsn",
          code: "BSU-DNAH-BSN",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements:
            "KCSE Mean Grade C+ (Plus) with C+ in Biology and Chemistry.",
        },
        {
          title: "Bachelor of Pharmacy (BPharm)",
          slug: "bpharm",
          code: "BSU-DNAH-BPHARM",
          level: "UNDERGRADUATE",
          durationYears: 5,
          requirements:
            "KCSE Mean Grade B (Plain) with B in Biology, Chemistry, and Mathematics/Physics.",
        },
        {
          title: "Bachelor of Science in Medical Laboratory Sciences (MLS)",
          slug: "bsc-medical-laboratory-sciences",
          code: "BSU-DNAH-BSCMLS",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements:
            "KCSE Mean Grade C+ (Plus) with C+ in Biology and Chemistry.",
        },
        {
          title: "Bachelor of Science in Public Health & Epidemiology",
          slug: "bsc-public-health-epidemiology",
          code: "BSU-DNAH-BSCPHE",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements:
            "KCSE Mean Grade C+ (Plus) with C+ in Biology and Chemistry.",
        },
        {
          title: "Bachelor of Science in Human Nutrition and Dietetics",
          slug: "bsc-human-nutrition-dietetics",
          code: "BSU-DNAH-BSCHND",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements:
            "KCSE Mean Grade C+ (Plus) with C+ in Biology and Chemistry.",
        },
        {
          title: "Diploma in Pharmaceutical Technology",
          slug: "diploma-pharmaceutical-technology",
          code: "BSU-DNAH-DIPPT",
          level: "DIPLOMA",
          durationYears: 3,
          requirements:
            "KCSE Mean Grade C (Plain) with C in Biology and Chemistry.",
        },
        {
          title: "Diploma in Community Health & Development",
          slug: "diploma-community-health-development",
          code: "BSU-DNAH-DIPCHD",
          level: "DIPLOMA",
          durationYears: 2,
          requirements: "KCSE Mean Grade C- (Minus).",
        },
        {
          title: "Master of Science in Clinical Medicine / Public Health",
          slug: "msc-clinical-medicine-public-health",
          code: "BSU-DNAH-MSCCMPH",
          level: "POSTGRADUATE",
          durationYears: 2,
          requirements:
            "Relevant Bachelor's degree (Upper Second-Class Honours or equivalent).",
        },
      ],
    },
    {
      name: "Department of Business & Finance",
      code: "DBF",
      schoolId: businessSchool.id,
      programmes: [
        {
          title: "Bachelor of Commerce (BCom)",
          slug: "bcom",
          code: "BSU-DBF-BCOM",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements:
            "KCSE Mean Grade C+ (Plus). Specializations: Finance, Accounting, Marketing, HR.",
        },
        {
          title: "Bachelor of Science in Economics and Finance",
          slug: "bsc-economics-finance",
          code: "BSU-DBF-BSCEF",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements: "KCSE Mean Grade C+ (Plus) with C+ in Mathematics.",
        },
        {
          title: "Bachelor of Business Information Technology (BBIT)",
          slug: "bbit",
          code: "BSU-DBF-BBIT",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements: "KCSE Mean Grade C+ (Plus) with C+ in Mathematics.",
        },
        {
          title: "Bachelor of Procurement and Supply Chain Management",
          slug: "bsc-procurement-supply-chain",
          code: "BSU-DBF-BSCPSCM",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements: "KCSE Mean Grade C+ (Plus).",
        },
        {
          title: "Bachelor of Science in Hospitality and Tourism Management",
          slug: "bsc-hospitality-tourism",
          code: "BSU-DBF-BSCHTM",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements: "KCSE Mean Grade C+ (Plus).",
        },
        {
          title: "Master of Business Administration (MBA)",
          slug: "mba",
          code: "BSU-DBF-MBA",
          level: "POSTGRADUATE",
          durationYears: 2,
          requirements:
            "Relevant Bachelor's degree (Upper Second-Class Honours) plus 2 years work experience.",
        },
      ],
    },
    {
      name: "Department of Computing & Data Sciences",
      code: "DCDS",
      schoolId: computingSchool.id,
      programmes: [
        {
          title: "Bachelor of Science in Computer Science",
          slug: "bsc-computer-science",
          code: "BSU-DCDS-BSCCS",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements:
            "KCSE Mean Grade C+ (Plus) with C+ in Mathematics and Physics.",
        },
        {
          title: "Bachelor of Science in Information Technology (BSIT)",
          slug: "bsit",
          code: "BSU-DCDS-BSIT",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements: "KCSE Mean Grade C+ (Plus) with C+ in Mathematics.",
        },
        {
          title: "Bachelor of Science in Cybersecurity and Digital Forensics",
          slug: "bsc-cybersecurity-digital-forensics",
          code: "BSU-DCDS-BSCCDF",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements: "KCSE Mean Grade C+ (Plus) with C+ in Mathematics.",
        },
        {
          title: "Bachelor of Science in Data Science and Artificial Intelligence",
          slug: "bsc-data-science-ai",
          code: "BSU-DCDS-BSCDSAI",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements:
            "KCSE Mean Grade C+ (Plus) with C+ in Mathematics and Physics.",
        },
        {
          title: "Diploma in Software Engineering & Data Analytics",
          slug: "diploma-software-engineering-data-analytics",
          code: "BSU-DCDS-DIPSEDA",
          level: "DIPLOMA",
          durationYears: 2,
          requirements: "KCSE Mean Grade C (Plain) with C in Mathematics.",
        },
      ],
    },
    {
      name: "Department of Law & Jurisprudence",
      code: "DLJ",
      schoolId: lawSchool.id,
      programmes: [
        {
          title: "Bachelor of Laws (LLB)",
          slug: "llb",
          code: "BSU-DLJ-LLB",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements:
            "KCSE Mean Grade B- (Minus) with B- in English. Alternative: Diploma in Legal Studies.",
        },
        {
          title: "Diploma in Legal Studies",
          slug: "diploma-legal-studies",
          code: "BSU-DLJ-DIPLS",
          level: "DIPLOMA",
          durationYears: 2,
          requirements: "KCSE Mean Grade C (Plain) with C in English.",
        },
      ],
    },
    {
      name: "Department of Education & Social Sciences",
      code: "DESS",
      schoolId: educationSchool.id,
      programmes: [
        {
          title: "Bachelor of Education (Arts)",
          slug: "bed-arts",
          code: "BSU-DESS-BEDA",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements: "KCSE Mean Grade C+ (Plus) with two teaching subjects.",
        },
        {
          title: "Bachelor of Education (Science)",
          slug: "bed-science",
          code: "BSU-DESS-BEDS",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements:
            "KCSE Mean Grade C+ (Plus) with two science teaching subjects.",
        },
        {
          title: "Bachelor of Arts in Mass Communication & Digital Media",
          slug: "ba-mass-communication-digital-media",
          code: "BSU-DESS-BAMCDM",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements: "KCSE Mean Grade C+ (Plus) with C+ in English.",
        },
        {
          title: "Bachelor of Science in Counselling Psychology",
          slug: "bsc-counselling-psychology",
          code: "BSU-DESS-BSCCP",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements: "KCSE Mean Grade C+ (Plus) with C+ in Biology.",
        },
        {
          title: "Diploma in Early Childhood Education (ECDE)",
          slug: "diploma-ecde",
          code: "BSU-DESS-DIPECDE",
          level: "DIPLOMA",
          durationYears: 2,
          requirements: "KCSE Mean Grade C (Plain).",
        },
      ],
    },
    {
      name: "Department of Natural & Actuarial Sciences",
      code: "DNAS",
      schoolId: pureSciencesSchool.id,
      programmes: [
        {
          title: "Bachelor of Science in Analytical Chemistry",
          slug: "bsc-analytical-chemistry",
          code: "BSU-DNAS-BSCAC",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements:
            "KCSE Mean Grade C+ (Plus) with C+ in Chemistry and Mathematics.",
        },
        {
          title: "Bachelor of Science in Biochemistry & Molecular Biology",
          slug: "bsc-biochemistry-molecular-biology",
          code: "BSU-DNAS-BSCBMB",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements:
            "KCSE Mean Grade C+ (Plus) with C+ in Biology and Chemistry.",
        },
        {
          title: "Bachelor of Science in Biotechnology",
          slug: "bsc-biotechnology",
          code: "BSU-DNAS-BSCBT",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements:
            "KCSE Mean Grade C+ (Plus) with C+ in Biology and Chemistry.",
        },
        {
          title: "Bachelor of Science in Actuarial Science",
          slug: "bsc-actuarial-science",
          code: "BSU-DNAS-BSCAS",
          level: "UNDERGRADUATE",
          durationYears: 4,
          requirements:
            "KCSE Mean Grade B- (Minus) with B- in Mathematics.",
        },
      ],
    },
    {
      name: "Department of Engineering & Architecture",
      code: "DEA",
      schoolId: engineeringSchool.id,
      programmes: [
        {
          title: "Bachelor of Science in Civil Engineering",
          slug: "bsc-civil-engineering",
          code: "BSU-DEA-BSCE",
          level: "UNDERGRADUATE",
          durationYears: 5,
          requirements:
            "KCSE Mean Grade B- (Minus) with B- in Mathematics, Physics, and Chemistry.",
        },
        {
          title: "Bachelor of Science in Electrical and Electronic Engineering",
          slug: "bsc-electrical-electronic-engineering",
          code: "BSU-DEA-BSCEEE",
          level: "UNDERGRADUATE",
          durationYears: 5,
          requirements:
            "KCSE Mean Grade B- (Minus) with B- in Mathematics, Physics, and Chemistry.",
        },
        {
          title: "Bachelor of Science in Architecture & Spatial Design",
          slug: "bsc-architecture-spatial-design",
          code: "BSU-DEA-BSCASD",
          level: "UNDERGRADUATE",
          durationYears: 5,
          requirements:
            "KCSE Mean Grade B- (Minus) with B- in Mathematics, Physics, and any Art/Design subject.",
        },
      ],
    },
    {
      name: "Department of Advanced Research & Doctoral Studies",
      code: "DARDS",
      schoolId: postgraduateSchool.id,
      programmes: [
        {
          title: "Doctor of Philosophy (PhD) in Health Sciences",
          slug: "phd-health-sciences",
          code: "BSU-DARDS-PHDHS",
          level: "DOCTORATE",
          durationYears: 3,
          requirements:
            "Relevant Master's degree (MSc or MMed) in a health sciences field.",
        },
        {
          title: "Doctor of Philosophy (PhD) in Business Administration",
          slug: "phd-business-administration",
          code: "BSU-DARDS-PHDBA",
          level: "DOCTORATE",
          durationYears: 3,
          requirements:
            "Relevant Master's degree (MBA or MSc) in business, economics, or management.",
        },
        {
          title: "Doctor of Philosophy (PhD) in Education & Leadership",
          slug: "phd-education-leadership",
          code: "BSU-DARDS-PHDEL",
          level: "DOCTORATE",
          durationYears: 3,
          requirements:
            "Relevant Master's degree (MEd or MA) in education, leadership, or related field.",
        },
      ],
    },
  ];

  for (const dept of deptData) {
    const { programmes, ...deptCreate } = dept;
    const createdDept = await prisma.department.create({
      data: deptCreate,
    });

    for (const prog of programmes) {
      await prisma.programme.create({
        data: { ...prog, departmentId: createdDept.id },
      });
    }
  }

  // ─── GLOBAL HEALTH OUTREACH 2026 ───
  const outreachData = [
    {
      title: "Thika Main Campus & Nairobi Metro Cancer Screening Drive",
      campaignYear: 2026,
      location: CampusLocation.THIKA_MAIN,
      startDate: new Date("2026-08-01"),
      endDate: new Date("2026-09-30"),
      targetCases: 5000,
      description:
        "Free cervical and breast cancer screening, lymphedema diagnostics, and chronic disease management across Thika and Nairobi metropolitan satellite hubs.",
    },
    {
      title: "47-County Mobile Health Outreach",
      campaignYear: 2026,
      location: CampusLocation.COUNTY_HUB,
      startDate: new Date("2026-08-01"),
      endDate: new Date("2026-09-30"),
      targetCases: 25000,
      description:
        "Rolling mobile clinics across all 47 Kenyan counties delivering maternal health, pediatric care, and infectious disease screening.",
    },
    {
      title: "Kigali Campus Cervical Cancer & Lymphedema Camp",
      campaignYear: 2026,
      location: CampusLocation.KIGALI_RWANDA,
      startDate: new Date("2026-08-15"),
      endDate: new Date("2026-09-15"),
      targetCases: 3000,
      description:
        "Specialized cervical cancer screening (VIA/VILI, HPV DNA testing) and lymphology education at the Kigali Outreach Center.",
    },
    {
      title: "Lilongwe Maternal & Child Health Initiative",
      campaignYear: 2026,
      location: CampusLocation.LILONGWE_MALAWI,
      startDate: new Date("2026-08-10"),
      endDate: new Date("2026-09-20"),
      targetCases: 4000,
      description:
        "Antenatal checkups, nutritional assessments, pediatric care, and community health worker training in Lilongwe.",
    },
    {
      title: "Mogadishu Community Trauma & Reproductive Health Program",
      campaignYear: 2026,
      location: CampusLocation.MOGADISHU_SOMALIA,
      startDate: new Date("2026-08-05"),
      endDate: new Date("2026-09-25"),
      targetCases: 3500,
      description:
        "Trauma-informed reproductive health services, general medical screenings, and infectious disease management in Mogadishu.",
    },
  ];

  for (const outreach of outreachData) {
    await prisma.globalHealthOutreach.create({ data: outreach });
  }

  // ─── ACTIVE TENDER ───
  await prisma.tender.create({
    data: {
      refNumber: "BSU/EOI/FRM/08/2026",
      title:
        "Consultancy Services for Sustainable Fundraising Models and Capital Development Strategy",
      category: "Consultancy / Fundraising Strategy",
      pdfDocumentUrl: "/documents/BSU_EOI_FRM_08_2026.pdf",
      closingDate: new Date("2026-09-17T11:00:00+03:00"),
      isActive: true,
    },
  });

  // ─── NEWS ARTICLES ───
  const newsData = [
    {
      title: "January 2026 Intake Now Open",
      slug: "january-2026-intake-open",
      excerpt: "Applications are invited for all undergraduate and postgraduate programmes across our 8 academic schools and regional campuses.",
      content: "Brooklyn State University is pleased to announce that the January 2026 intake is now open. Prospective students can apply for programmes across all 8 academic schools including our flagship B.Sc. in Lymphology and Lymphatic Medicine. Applications are accepted online through the CampusConnect portal and at all regional campuses.",
      category: "Admissions",
      publishedAt: new Date("2026-01-15"),
      featured: true,
    },
    {
      title: "BSU Launches New AI Research Centre",
      slug: "bsu-launches-ai-research-centre",
      excerpt: "The School of Computing, Informatics & AI opens a state-of-the-art research centre focused on ethical AI for African development.",
      content: "The new AI Research Centre at BSU will focus on developing ethical AI solutions tailored for African contexts. The centre is equipped with high-performance computing clusters and will host visiting researchers from partner institutions worldwide.",
      category: "Research",
      publishedAt: new Date("2026-01-10"),
      featured: true,
    },
    {
      title: "Global Health Outreach Expands to Somalia",
      slug: "global-health-outreach-somalia",
      excerpt: "Our annual community care programme will now include Mogadishu Campus, bringing free screenings to underserved populations.",
      content: "BSU's Global Health Outreach & Community Care Program has expanded to include Mogadishu Campus in Somalia. The expansion brings specialised cervical cancer screening, lymphedema care, and chronic disease management to previously underserved communities in the Horn of Africa.",
      category: "Global Health",
      publishedAt: new Date("2026-01-05"),
      featured: true,
    },
    {
      title: "BSU Partners with WHO on Lymphatic Disease Study",
      slug: "bsu-who-lymphatic-disease-study",
      excerpt: "A landmark collaboration to advance lymphatic filariasis research and treatment protocols across East Africa.",
      content: "Brooklyn State University has entered into a landmark partnership with the World Health Organization to advance research and treatment protocols for lymphatic filariasis across East Africa. The collaboration will leverage BSU's pioneering lymphology programme and clinical infrastructure.",
      category: "Partnerships",
      publishedAt: new Date("2025-12-20"),
      featured: false,
    },
    {
      title: "New Engineering Labs Open at Thika Campus",
      slug: "new-engineering-labs-thika",
      excerpt: "State-of-the-art civil and electrical engineering laboratories are now operational, enhancing practical training for students.",
      content: "The School of Engineering & Built Environment has officially opened new laboratories at Thika Main Campus. The facilities include structural testing equipment, electrical circuit simulation suites, and architectural design studios.",
      category: "Infrastructure",
      publishedAt: new Date("2025-12-10"),
      featured: false,
    },
    {
      title: "BSU Ranked Top 10 in East Africa for Health Sciences",
      slug: "bsu-top-10-east-africa-health-sciences",
      excerpt: "Independent ranking places BSU among the leading institutions for health sciences education in the region.",
      content: "An independent higher education ranking has placed Brooklyn State University among the top 10 institutions in East Africa for health sciences education. The ranking cited BSU's pioneering lymphology programme, research output, and graduate employment rates.",
      category: "Awards",
      publishedAt: new Date("2025-11-28"),
      featured: true,
    },
  ];

  for (const news of newsData) {
    await prisma.newsArticle.create({ data: news });
  }

  // ─── EVENTS ───
  const eventData = [
    {
      title: "2026 Graduation Ceremony",
      slug: "2026-graduation-ceremony",
      description: "The annual congregation ceremony for graduands of the 2024/2025 academic year. All graduating students and their guests are welcome.",
      location: "Thika Main Campus, Graduation Square",
      startDate: new Date("2026-03-15T09:00:00"),
      endDate: new Date("2026-03-15T14:00:00"),
      category: "Academic",
      featured: true,
    },
    {
      title: "Global Health Outreach Launch",
      slug: "global-health-outreach-launch-2026",
      description: "Official launch of the 2026 Global Health Outreach & Community Care Program. Medical volunteers and partners gather for orientation and deployment planning.",
      location: "Thika Main Campus, Conference Centre",
      startDate: new Date("2026-08-01T08:00:00"),
      endDate: new Date("2026-08-01T17:00:00"),
      category: "Global Health",
      featured: true,
    },
    {
      title: "International Research Conference on Lymphatic Medicine",
      slug: "research-conference-lymphatic-medicine-2026",
      description: "A three-day conference bringing together researchers, clinicians, and policymakers to discuss advances in lymphatic medicine and cancer care.",
      location: "Kigali Campus, Rwanda",
      startDate: new Date("2026-06-10T08:00:00"),
      endDate: new Date("2026-06-12T17:00:00"),
      category: "Research",
      featured: true,
    },
    {
      title: "Open Day & Career Fair",
      slug: "open-day-career-fair-2026",
      description: "Prospective students and parents are invited to explore BSU programmes, meet faculty, and attend career guidance sessions.",
      location: "Thika Main Campus",
      startDate: new Date("2026-02-28T08:00:00"),
      endDate: new Date("2026-02-28T16:00:00"),
      category: "Admissions",
      featured: false,
    },
    {
      title: "BSU Innovation & Entrepreneurship Summit",
      slug: "innovation-entrepreneurship-summit-2026",
      description: "Student innovators and entrepreneurs pitch their ventures to a panel of investors and industry leaders.",
      location: "Thika Main Campus, Innovation Hub",
      startDate: new Date("2026-04-22T09:00:00"),
      endDate: new Date("2026-04-23T17:00:00"),
      category: "Student Life",
      featured: false,
    },
  ];

  for (const event of eventData) {
    await prisma.event.create({ data: event });
  }

  // ─── NOTICES ───
  const noticeData = [
    {
      title: "Revised Academic Calendar for 2025/2026 Academic Year",
      slug: "revised-academic-calendar-2025-2026",
      content: "The Senate has approved a revised academic calendar for the 2025/2026 academic year. Semester II will now commence on 20 January 2026. All students and faculty are advised to consult the updated calendar on the portal.",
      category: "Academic",
      isUrgent: true,
    },
    {
      title: "Hostel Booking for Semester II Now Open",
      slug: "hostel-booking-semester-ii-2026",
      content: "Online hostel booking for Semester II (2025/2026) is now open. Students are encouraged to book early as spaces are limited. Priority is given to first-year and international students.",
      category: "Accommodation",
      isUrgent: false,
    },
    {
      title: "Staff Professional Development Workshop — Registration Deadline Extended",
      slug: "staff-professional-development-workshop-extension",
      content: "The deadline for registration for the Staff Professional Development Workshop has been extended to 31 January 2026. The workshop covers research methodology, digital pedagogy, and grant writing.",
      category: "Staff",
      isUrgent: false,
    },
    {
      title: "Invitation to Tender: Supply of Laboratory Equipment",
      slug: "tender-supply-laboratory-equipment",
      content: "BSU invites sealed tenders from eligible suppliers for the supply and installation of laboratory equipment for the School of Pure & Applied Sciences. Closing date: 28 February 2026 at 11:00 AM EAT.",
      category: "Procurement",
      isUrgent: true,
    },
    {
      title: "System Maintenance: CampusConnect Portal",
      slug: "system-maintenance-campusconnect",
      content: "The CampusConnect Student Portal will be unavailable on Saturday, 25 January 2026 from 00:00 to 06:00 EAT for scheduled system maintenance. We apologise for any inconvenience.",
      category: "ICT",
      isUrgent: false,
      expiresAt: new Date("2026-01-26"),
    },
    {
      title: "Call for Abstracts: International Research Conference 2026",
      slug: "call-for-abstracts-research-conference-2026",
      content: "Researchers are invited to submit abstracts for the International Research Conference on Lymphatic Medicine to be held at Kigali Campus, 10–12 June 2026. Deadline: 15 March 2026.",
      category: "Research",
      isUrgent: false,
    },
  ];

  for (const notice of noticeData) {
    await prisma.notice.create({ data: notice });
  }

  // ─── DOWNLOADS ───
  const downloadData = [
    {
      title: "BSU Student Handbook 2025/2026",
      description: "Comprehensive guide to student life, policies, and regulations at Brooklyn State University.",
      category: "Student Resources",
      fileUrl: "/downloads/BSU_Student_Handbook_2025_2026.pdf",
      fileSize: "4.2 MB",
    },
    {
      title: "Application Form — Undergraduate",
      description: "Official undergraduate application form for all degree programmes.",
      category: "Admissions",
      fileUrl: "/downloads/BSU_Application_Form_Undergraduate.pdf",
      fileSize: "1.8 MB",
    },
    {
      title: "Application Form — Postgraduate",
      description: "Official postgraduate application form for Masters and Doctoral programmes.",
      category: "Admissions",
      fileUrl: "/downloads/BSU_Application_Form_Postgraduate.pdf",
      fileSize: "2.1 MB",
    },
    {
      title: "Fee Structure 2025/2026",
      description: "Detailed fee structure for all schools and programmes, including KUCCPS and self-sponsored rates.",
      category: "Finance",
      fileUrl: "/downloads/BSU_Fee_Structure_2025_2026.pdf",
      fileSize: "3.5 MB",
    },
    {
      title: "Academic Calendar 2025/2026",
      description: "Official academic calendar with semester dates, examination periods, and holidays.",
      category: "Academic",
      fileUrl: "/downloads/BSU_Academic_Calendar_2025_2026.pdf",
      fileSize: "1.2 MB",
    },
    {
      title: "BSU Strategic Plan 2025–2030",
      description: "Five-year strategic plan outlining BSU's vision for multi-campus expansion and research excellence.",
      category: "Governance",
      fileUrl: "/downloads/BSU_Strategic_Plan_2025_2030.pdf",
      fileSize: "8.7 MB",
    },
    {
      title: "Hostel Application Form",
      description: "Application form for on-campus accommodation at Thika Main Campus.",
      category: "Accommodation",
      fileUrl: "/downloads/BSU_Hostel_Application_Form.pdf",
      fileSize: "1.1 MB",
    },
    {
      title: "Transcript Request Form",
      description: "Form for requesting official academic transcripts and verification letters.",
      category: "Academic",
      fileUrl: "/downloads/BSU_Transcript_Request_Form.pdf",
      fileSize: "0.9 MB",
    },
  ];

  for (const download of downloadData) {
    await prisma.download.create({ data: download });
  }

  // ─── GALLERY IMAGES ───
  const galleryData = [
    {
      title: "Thika Main Campus — Aerial View",
      description: "Aerial view of the flagship campus showing the teaching hospital, lecture halls, and student hostels.",
      imageUrl: "/gallery/thika-aerial.jpg",
      category: "Campuses",
    },
    {
      title: "Clinical Simulation Laboratory",
      description: "Students practising in the advanced clinical simulation lab at the College of Health Sciences.",
      imageUrl: "/gallery/clinical-simulation-lab.jpg",
      category: "Facilities",
    },
    {
      title: "Global Health Outreach — Thika 2025",
      description: "Medical volunteers conducting cervical cancer screening at the Thika community outreach centre.",
      imageUrl: "/gallery/outreach-thika-2025.jpg",
      category: "Outreach",
    },
    {
      title: "Kigali Campus — Opening Ceremony",
      description: "Dignitaries and faculty at the official opening of BSU Kigali Campus.",
      imageUrl: "/gallery/kigali-opening.jpg",
      category: "Campuses",
    },
    {
      title: "Graduation Ceremony 2025",
      description: "Graduands of the Class of 2025 during the annual congregation ceremony.",
      imageUrl: "/gallery/graduation-2025.jpg",
      category: "Events",
    },
    {
      title: "Research Conference — Keynote Address",
      description: "Professor delivering the keynote at the 2025 International Research Conference.",
      imageUrl: "/gallery/research-conference-keynote.jpg",
      category: "Research",
    },
    {
      title: "Student Hostels",
      description: "Modern, secure student accommodation at Thika Main Campus.",
      imageUrl: "/gallery/student-hostels.jpg",
      category: "Facilities",
    },
    {
      title: "Sports Complex",
      description: "The Olympic-standard sports complex hosting inter-faculty athletics competitions.",
      imageUrl: "/gallery/sports-complex.jpg",
      category: "Facilities",
    },
    {
      title: "Lilongwe Campus — Community Health Training",
      description: "Health worker trainees at the Lilongwe Campus maternal and child health centre.",
      imageUrl: "/gallery/lilongwe-health-training.jpg",
      category: "Outreach",
    },
    {
      title: "Innovation Hub — Student Projects",
      description: "Final-year students presenting their capstone projects at the BSU Innovation Hub.",
      imageUrl: "/gallery/innovation-hub-projects.jpg",
      category: "Student Life",
    },
    {
      title: "Mogadishu Campus — Construction Phase",
      description: "Progress on the new Mogadishu Campus facilities, scheduled for full operation in 2026.",
      imageUrl: "/gallery/mogadishu-construction.jpg",
      category: "Campuses",
    },
    {
      title: "Cultural Week Performance",
      description: "Students showcasing traditional dance during the annual BSU Cultural Week.",
      imageUrl: "/gallery/cultural-week-performance.jpg",
      category: "Student Life",
    },
  ];

  for (const image of galleryData) {
    await prisma.galleryImage.create({ data: image });
  }

  // ─── DEMO USERS ───
  const passwordHash = await bcrypt.hash("password123", 10);

  const demoStudent = await prisma.user.create({
    data: {
      email: "student@bsu.ac.ke",
      passwordHash,
      role: "STUDENT",
      studentProfile: {
        create: {
          admissionNumber: "BSU/2026/001",
          fullName: "Jane Wanjiku",
          school: "College of Health Sciences",
          programme: "B.Sc. Lymphology",
          yearOfStudy: 2,
          semester: "II",
          academicYear: "2025/2026",
          gpa: "3.45",
          unitsRegistered: 6,
          feeBalance: 45000,
        },
      },
    },
  });

  const demoStaff = await prisma.user.create({
    data: {
      email: "staff@bsu.ac.ke",
      passwordHash,
      role: "STAFF",
      staffProfile: {
        create: {
          staffId: "STF/2024/010",
          fullName: "Dr. James Mutua",
          department: "ICT Services",
          position: "Systems Administrator",
        },
      },
    },
  });

  const demoAdmin = await prisma.user.create({
    data: {
      email: "admin@bsu.ac.ke",
      passwordHash,
      role: "ADMIN",
    },
  });

  console.log(
    "Demo users created:",
    demoStudent.email,
    demoStaff.email,
    demoAdmin.email
  );

  console.log("Seed completed successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
