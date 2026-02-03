type Job = {
  employerName: string;
  address: string;
  county: string;
  contact: string;
  telephone: string;
  companyTelephone: string;
  greenArea: string;
  industry: string;
  industrySubsector: string;
  jobTitle: string;
  jobDescription: string;
};

const greenjobs: Job[] = [
  {
    employerName: "808- ELECTRIC AND TELECOM LLC",
    address:
      "16-206 Wiliama Pl Unit B\nKeaau, HI 96749\n(19.637427491648623, -155.0442574592578)",
    county: "Hawaii",
    contact: "Douglas Oki",
    telephone: "808-966-7484",
    companyTelephone: "",
    greenArea: "Generate Clean, Renewable, Sustainable Energy",
    industry: "Construction",
    industrySubsector: "Building Equipment Contractors",
    jobTitle: "Electrician (PV)",
    jobDescription: "install electrical PV systems",
  },
  {
    employerName: "AC EXCAVATORS INC",
    address:
      "510 Awela St\nHilo, HI 96720\n(19.67441660671369, -155.0905005980044)",
    county: "Hawaii",
    contact: "Aaron Castillo",
    telephone: "808-959-0144",
    companyTelephone: "808-959-6174",
    greenArea: "Reduce Pollution and Waste",
    industry: "Construction",
    industrySubsector: "Other Specialty Trade Contractors",
    jobTitle: "Laborers",
    jobDescription: "recycle building material for reuse",
  },
];

interface IndustryCount {
  industry: string;
  jobs: number;
}

const greenJobInZipCode = (data: Job[], zipCode: string): boolean =>
  data.some((item) => item.address.includes(zipCode));

const listIndustries = (data: Job[]): string[] => [
  ...new Set(data.map((item) => item.industry)),
];

const jobsWithKeyword = (data: Job[], keyword: string): string[] =>
  data
    .filter((item) => item.industry.includes(keyword))
    .map((item) => item.industry);

const industryJobs = (data: Job[]): IndustryCount[] => {
  const counts = data.reduce((acc: Record<string, number>, item) => {
    const name = item.industry;
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(counts).map((name) => ({
    industry: name,
    jobs: counts[name],
  }));
};

const maxIndustryJobs = (data: Job[]): IndustryCount | null => {
  const industries = industryJobs(data);

  if (industries.length === 0) return null;

  return industries.reduce((max, current) =>
    current.jobs > max.jobs ? current : max
  );
};
