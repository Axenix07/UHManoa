/* eslint-disable */ 
type UhData = {
  fiscalYear: number;
  campus: string;
  cip: number;
  cipDesc: string;
  group1: string;
  group2: string;
  group3: string;
  group4: string;
  group5: string;
  outcome: string;
  hawaiianLegacy: string;
  awards: number;
};

const uhdata: UhData[] = [
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 90101, cipDesc: 'Speech Communicatn & Rhetoric', group1: 'College of Arts & Sciences', group2: 'Arts & Humanities', group3: 'Communication', group4: 'Communication', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 16,
  },
  {
    fiscalYear: 2023,
    campus: 'UH Manoa',
    cip: 130301,
    cipDesc: 'Curriculum & Instruction',
    group1: 'College of Education',
    group2: 'Education',
    group3: 'Curriculum Studies',
    group4: 'Curriculum Studies',
    group5: '',
    outcome: "Master's Degrees",
    hawaiianLegacy: 'HAWAIIAN',
    awards: 20,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 140801, cipDesc: 'Civil Engineering', group1: 'College of Engineering', group2: 'Engineering', group3: 'Civil Engineering', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 16,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260502, cipDesc: 'Microbiology', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Microbiology', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400201, cipDesc: 'Astronomy', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Physics & Astronomy', group4: 'Astronomy', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 27,
  },
  {
    fiscalYear: 2023, campus: 'Windward CC', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 53,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 513801, cipDesc: 'Registered Nursing/Reg Nurse', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Nursing', group4: 'Nursing', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 39,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260202, cipDesc: 'Biochemistry', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Chemistry', group4: 'Biochemistry', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 90401, cipDesc: 'Journalism', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Communication & Information', group4: 'Communications', group5: 'Journalism', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 513801, cipDesc: 'Registered Nursing/Reg Nurse', group1: 'College Natural & Health Sci', group2: 'Nursing', group3: 'Nursing', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 26,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 460302, cipDesc: 'Elec Install & Maint Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electrical Install/Maint Tech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400201, cipDesc: 'Astronomy', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Physics & Astronomy', group4: 'Astronomy', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 520301, cipDesc: 'Accounting', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'School of Accountancy', group4: 'Accounting', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 21,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 50127, cipDesc: 'Japanese Studies', group1: 'College of Arts & Sciences', group2: 'Arts & Humanities', group3: 'Japanese Studies', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Tech', group4: 'Automotive Technology', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 21,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 30201, cipDesc: 'Natural Resource Mgmt & Policy', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Nat Res & Env Mgt', group4: 'Natural Res & Environmentl Mgt', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 470201, cipDesc: 'Refrigeration & Air Cond', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Refrigeration & Air Cond Tech', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 460201, cipDesc: 'Carpentry', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Carpentry Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 110901, cipDesc: 'Computer Sys Netwrk & Telecom', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Comp Security&Network Tech', group4: 'Comp Security&Network Tech', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 45,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 430104, cipDesc: 'Criminal Justice Studies', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Administration of Justice', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 22,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260301, cipDesc: 'Botany', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Botany', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 430203, cipDesc: 'Fire & Environtl Emerg Resp', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Fire Science', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 110103, cipDesc: 'Information Technology', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Information Tech', group4: 'Information Technology', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: 'Accounting', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 430107, cipDesc: 'Administration of Justice', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Administration of Justice', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 140801, cipDesc: 'Civil Engineering', group1: 'College of Engineering', group2: 'Engineering', group3: 'Civil Engineering', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 70,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 470608, cipDesc: 'Aircraft Powerplant Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Aeronautics Maint Tech', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 480508, cipDesc: 'Welding', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Welding Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 490102, cipDesc: 'Aviation', group1: 'College of Agriculture', group2: 'Agriculture', group3: 'Aeronautical Science', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 520204, cipDesc: 'Office Mmgt and Supervision', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Management', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 430107, cipDesc: 'Administration of Justice', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Administration of Justice', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 513901, cipDesc: 'Lic Practical/Voc Nurse Trng', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Nursing', group4: 'Practical Nursing', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 512201, cipDesc: 'Pub Health Sci & Epidemiology', group1: 'School of Social Work', group2: 'School of Social Work', group3: 'Public Health', group4: 'Public Health', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 190902, cipDesc: 'Apparel & Textile Manufacture', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Fashion Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 450101, cipDesc: 'Social Sciences', group1: 'Social Sciences Division', group2: 'Social Science', group3: 'Early Childhood Education', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 460415, cipDesc: 'Construction Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Construction Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 240103, cipDesc: 'Humanities', group1: 'Humanities Division', group2: 'Humanities', group3: 'History', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Health Information Management', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 440000, cipDesc: 'Adult Services', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Human Services', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 190902, cipDesc: 'Apparel & Textile Manufacture', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Fashion Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 240103, cipDesc: 'Humanities', group1: 'Humanities Division', group2: 'Humanities', group3: 'English', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 141001, cipDesc: 'Electrical Engineering', group1: 'College of Engineering', group2: 'Engineering', group3: 'Electrical Engineering', group4: '', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 450603, cipDesc: 'Econometrics & Quant Economics', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Economics', group4: 'Economics', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 10308, cipDesc: 'Agroecology & Sustainable Agri', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Sustainable Agriculture', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Windward CC', cip: 18301, cipDesc: 'Vet/AnimHlthTech/Techn&VetAsst', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Veterinary Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 240103, cipDesc: 'Humanities', group1: 'Humanities Division', group2: 'Humanities', group3: 'Creative Media', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 430107, cipDesc: 'Administration of Justice', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Administration of Justice', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 470603, cipDesc: 'Auto Body Repair & Painting', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Auto Body Repair & Painting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 460201, cipDesc: 'Carpentry', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Carpentry Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 520401, cipDesc: 'Adm Asst/Secretarial Science', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Business Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400801, cipDesc: 'Physics', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Physics & Astronomy', group4: 'Physics', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 304401, cipDesc: 'Geography & Environment', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Geography & Environment', group4: 'Geography & Environment', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 460302, cipDesc: 'Elec Install & Maint Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electrical Install/Maint Tech', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Culinary Management', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510806, cipDesc: 'Physical Therapy Assistant', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Physical Therapist Assistant', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 440701, cipDesc: 'Social Work', group1: 'School of Social Work', group2: 'School of Social Work', group3: 'Social Work', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 36,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 40401, cipDesc: 'EnvironmentalDesign/Arch', group1: 'School of Architecture', group2: 'School of Architecture', group3: 'Environmental Design', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 140301, cipDesc: 'Agricultural Engineering', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Molecular Biosci & Bioeng', group4: 'Molecular Bioscience & Bioengr', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 110701, cipDesc: 'Computer Science', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Information & Comp Sci', group4: 'Computer Science', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 110701, cipDesc: 'Computer Science', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Information & Comp Sci', group4: 'Computer Science', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 78,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 513901, cipDesc: 'Lic Practical/Voc Nurse Trng', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Nursing', group4: 'Practical Nursing', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 14,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 131501, cipDesc: 'Teacher Assistant/Aide', group1: 'Career & Tech Ed', group2: 'Teaching', group3: 'Teaching', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 35,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260102, cipDesc: 'Biomedical Science', group1: 'School of Medicine', group2: 'School of Medicine', group3: 'Quant Health & Clinical Rsch', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 513818, cipDesc: 'Nursing Practice', group1: 'Schl of Nurs & Dental Hygiene', group2: 'Nursing & Dental Hygiene', group3: 'Professional Nursing', group4: 'Nursing Practice', group5: '', outcome: 'Other', hawaiianLegacy: '', awards: 16,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 521201, cipDesc: 'Business Computer Info Sys', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Management Information Systems', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 38,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 440701, cipDesc: 'Social Work', group1: 'School of Social Work', group2: 'School of Social Work', group3: 'Social Work', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 18,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 30201, cipDesc: 'Natural Resource Mgmt & Policy', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Nat Res & Env Mgt', group4: 'Natural Res & Environmentl Mgt', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 34,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 30104, cipDesc: 'Global Environmental Science', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Oceanography', group4: 'Global Environmental Science', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 440401, cipDesc: 'Public Administration', group1: 'Professional Studies Division', group2: 'Public Administration', group3: 'Disaster Prep & Emgncy Mgmt', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 521101, cipDesc: 'International Management', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Mgt & Industrial Rel', group4: 'International Business', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 37,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 430203, cipDesc: 'Fire & Environtl Emerg Resp', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Fire & Envir Emergency Resp', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 31,
  },
  {
    fiscalYear: 2023, campus: 'Windward CC', cip: 301801, cipDesc: 'Natural Science', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Natural Science', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 513901, cipDesc: 'Lic Practical/Voc Nurse Trng', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Nursing', group4: 'Practical Nursing', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 90101, cipDesc: 'Speech Communicatn & Rhetoric', group1: 'College of Arts & Sciences', group2: 'Arts & Humanities', group3: 'Communication', group4: 'Communication', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 21,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 450201, cipDesc: 'Anthropology', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Anthropology', group4: 'Anthropology', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260503, cipDesc: 'Medical Micro & Bacteriology', group1: 'School of Medicine', group2: 'School of Medicine', group3: 'Biomed Sci (Tropical Medicine)', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 521401, cipDesc: 'Marketing', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Marketing', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 13,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 50207, cipDesc: "Women's Studies", group1: 'College of Social Sciences', group2: 'Social Sciences', group3: "Women's Studies", group4: "Women's Studies", group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 450101, cipDesc: 'Social Sciences', group1: 'Social Sciences Division', group2: 'Social Science', group3: 'Political Science', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 161409, cipDesc: 'Hawaiian Language & Literature', group1: 'Hawai`inuiakea Sch Hawn Knowledge', group2: 'Hawaiian Language', group3: 'Hawaiian', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Tech', group4: 'Automotive Technology', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 24,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 150303, cipDesc: 'Electronic Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electronics Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 110103, cipDesc: 'Information Technology', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Information Tech', group4: 'Information Technology', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 110701, cipDesc: 'Computer Science', group1: 'College Natural & Health Sci', group2: 'Computer Science', group3: 'Computer Science', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 161409, cipDesc: 'Hawaiian Language & Literature', group1: 'Ka Haka Ula O Keelikolani', group2: 'Hawaiian Lang & Lit', group3: 'Hawn&Indigenous Lang&Cult Rev', group4: '', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 422803, cipDesc: 'Counseling Psychology', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Psychology', group4: 'Counseling Psychology', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 301202, cipDesc: 'Cultural/Heritage ResourceMgmt', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Anthropology', group4: 'Heritage Management', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 513901, cipDesc: 'Lic Practical/Voc Nurse Trng', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Nursing', group4: 'Practical Nursing', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 301801, cipDesc: 'Natural Science', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Natural Science', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 422806, cipDesc: 'Educational Psychology', group1: 'College of Education', group2: 'Education', group3: 'Educational Psychology', group4: 'Educational Psychology', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 30201, cipDesc: 'Natural Resource Mgmt & Policy', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Nat Res & Env Mgt', group4: 'Natural Res & Environmentl Mgt', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 510707, cipDesc: 'Health Info/Med Records Tech', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Health Information Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: 'Accounting', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260701, cipDesc: 'Zoology', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Zoology', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 301801, cipDesc: 'Natural Science', group1: 'College Natural & Health Sci', group2: 'Natural Sciences', group3: 'Natural Science', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 540101, cipDesc: 'History', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'History', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 480508, cipDesc: 'Welding', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Welding Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 513801, cipDesc: 'Registered Nursing/Reg Nurse', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Nursing', group4: 'Nursing', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 20,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 131001, cipDesc: 'Special Education', group1: 'Career & Tech Ed', group2: 'Teaching', group3: 'Special Education', group4: '', group5: '', outcome: 'Other', hawaiianLegacy: 'HAWAIIAN', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 160102, cipDesc: 'Linguistics', group1: 'Ka Haka Ula O Keelikolani', group2: 'Hawaiian Lang & Lit', group3: 'Linguistics', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 150701, cipDesc: 'Occuptnl Environmtl Safety Mgt', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Occupational Envir Safety Mgt', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 130901, cipDesc: 'Educational Foundations', group1: 'College of Education', group2: 'Education', group3: 'Ed Foundations', group4: 'Educational Foundations', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 430104, cipDesc: 'Criminal Justice Studies', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Administration of Justice', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 14,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 450601, cipDesc: 'Economics', group1: 'Col of Business & Economics', group2: 'Business & Economics', group3: 'Economics', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 220302, cipDesc: 'Paralegal', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Paralegal', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 430403, cipDesc: 'Cyber/Computer Forensics', group1: 'Professional Studies Division', group2: 'Professional Studies', group3: 'Cyber Security', group4: 'Cyber Operations', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 400801, cipDesc: 'Physics', group1: 'College Natural & Health Sci', group2: 'Physics', group3: 'Physics', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 50207, cipDesc: "Women's Studies", group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: "Gender & Women's Studies", group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 460201, cipDesc: 'Carpentry', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Carpentry Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 150303, cipDesc: 'Electronic Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electronics Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 460302, cipDesc: 'Elec Install & Maint Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electrical Install/Maint Tech', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 520401, cipDesc: 'Adm Asst/Secretarial Science', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Business Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 520301, cipDesc: 'Accounting', group1: 'Col of Business & Economics', group2: 'Business & Economics', group3: 'Accounting', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 460201, cipDesc: 'Carpentry', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Carpentry Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 303301, cipDesc: 'Sustainability Studies', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Sustainable Science Management', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 10308, cipDesc: 'Agroecology & Sustainable Agri', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Sustainable Agriculture', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400601, cipDesc: 'Geology', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Geology', group4: 'Geology & Geophysics', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 220202, cipDesc: 'Programs for Foreign Lawyers', group1: 'School of Law', group2: 'School of Law', group3: 'Master in Law', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 50207, cipDesc: "Women's Studies", group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: "Gender & Women's Studies", group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 400601, cipDesc: 'Geology', group1: 'College Natural & Health Sci', group2: 'Geology', group3: 'Geology', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 40601, cipDesc: 'Landscape Architecture', group1: 'School of Architecture', group2: 'School of Architecture', group3: 'Landscape Architecture', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 150303, cipDesc: 'Electronic Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electronics Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 511005, cipDesc: 'Medical Technology', group1: 'School of Medicine', group2: 'School of Medicine', group3: 'Medical Technology', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 130501, cipDesc: 'Educational Tech', group1: 'College of Education', group2: 'Education', group3: 'Learning Design & Technology', group4: 'Learning Design & Technology', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 10,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 220101, cipDesc: 'Law', group1: 'School of Law', group2: 'School of Law', group3: 'Law', group4: '', group5: '', outcome: 'Other', hawaiianLegacy: '', awards: 75,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 521201, cipDesc: 'Business Computer Info Sys', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Management Information Systems', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 240101, cipDesc: 'Liberal Arts', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Liberal Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 250,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 130501, cipDesc: 'Educational Tech', group1: 'College of Education', group2: 'Education', group3: 'Learning Design & Technology', group4: 'Learning Design & Technology', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 30104, cipDesc: 'Global Environmental Science', group1: 'College Natural & Health Sci', group2: 'Interdisciplinary Studies', group3: 'Trop Conserv Bio & Environ Sci', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 240101, cipDesc: 'Liberal Arts', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Liberal Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 58,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 140801, cipDesc: 'Civil Engineering', group1: 'College of Engineering', group2: 'Engineering', group3: 'Civil Engineering', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 19,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 141001, cipDesc: 'Electrical Engineering', group1: 'College of Engineering', group2: 'Engineering', group3: 'Electrical Engineering', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 18,
  },
  {
    fiscalYear: 2023, campus: 'Windward CC', cip: 240101, cipDesc: 'Liberal Arts', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Liberal Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 121,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 440701, cipDesc: 'Social Work', group1: 'School of Social Work', group2: 'School of Social Work', group3: 'Social Work', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 33,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 141001, cipDesc: 'Electrical Engineering', group1: 'College of Engineering', group2: 'Engineering', group3: 'Electrical Engineering', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 41,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 440401, cipDesc: 'Public Administration', group1: 'Professional Studies Division', group2: 'Public Administration', group3: 'Disaster Prep & Emgncy Mgmt', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 130401, cipDesc: 'Educational Administration', group1: 'College of Education', group2: 'Education', group3: 'Educational Administration', group4: 'Educational Administration', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Windward CC', cip: 18301, cipDesc: 'Vet/AnimHlthTech/Techn&VetAsst', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Veterinary Assisting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 26,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: 'Accounting', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 40401, cipDesc: 'EnvironmentalDesign/Arch', group1: 'School of Architecture', group2: 'School of Architecture', group3: 'Environmental Design', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 24,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 10308, cipDesc: 'Agroecology & Sustainable Agri', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Tropical Plant & Soil Sci', group4: 'Trop Agriculture & Environment', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 10,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 130401, cipDesc: 'Educational Administration', group1: 'College of Education', group2: 'Education', group3: 'Educational Administration', group4: 'Educational Administration', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 16,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 450701, cipDesc: 'Geography', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Geography', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 240101, cipDesc: 'Liberal Arts', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Liberal Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 68,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 450201, cipDesc: 'Anthropology', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Anthropology', group4: 'Anthropology', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 29,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 512201, cipDesc: 'Pub Health Sci & Epidemiology', group1: 'School of Social Work', group2: 'School of Social Work', group3: 'Public Health', group4: 'Public Health', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 45,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131001, cipDesc: 'Special Education', group1: 'College of Education', group2: 'Education', group3: 'Special Education', group4: 'Special Education', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 240101, cipDesc: 'Liberal Arts', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Liberal Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 64,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 150406, cipDesc: 'Automation Engineer Technician', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Integrated Industrial Tech', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 440401, cipDesc: 'Public Administration', group1: 'Professional Studies Division', group2: 'Public Administration', group3: 'Justice Administration', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 14,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260202, cipDesc: 'Biochemistry', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Chemistry', group4: 'Biochemistry', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 17,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 520401, cipDesc: 'Adm Asst/Secretarial Science', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Business Tech', group4: 'Business Technology', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 130901, cipDesc: 'Educational Foundations', group1: 'College of Education', group2: 'Education', group3: 'Ed Foundations', group4: 'Educational Foundations', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260406, cipDesc: 'Cell/Cellular & Molecular Biol', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Molecular & Cell Biology', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 15,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 301801, cipDesc: 'Natural Science', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Natural Science', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 460302, cipDesc: 'Elec Install & Maint Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electrical Install/Maint Tech', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 460302, cipDesc: 'Elec Install & Maint Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electrical Install/Maint Tech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 10,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510904, cipDesc: 'Emergency Medical Services Mgt', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Mobile Intens Care Technician', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 450201, cipDesc: 'Anthropology', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Anthropology', group4: 'Anthropology', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 510602, cipDesc: 'Dental Hygiene', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Dental Hygiene', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 16,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 141001, cipDesc: 'Electrical Engineering', group1: 'College of Engineering', group2: 'Engineering', group3: 'Electrical Engineering', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 450701, cipDesc: 'Geography', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Geography & Environment', group4: 'Geography', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 131299, cipDesc: 'Teacher Education', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Education', group4: 'Teaching', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 470605, cipDesc: 'Diesel Mechanics', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Diesel Mechanics', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 422806, cipDesc: 'Educational Psychology', group1: 'College of Education', group2: 'Education', group3: 'Educational Psychology', group4: 'Educational Psychology', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131001, cipDesc: 'Special Education', group1: 'College of Education', group2: 'Education', group3: 'Inst for Teacher Ed', group4: 'Elementary Education', group5: 'Elem Education & Special Educ', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 521001, cipDesc: 'Human Resource Management', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Mgt & Industrial Rel', group4: 'Human Resource Management', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 190901, cipDesc: 'Fashion Des & Merchandising', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Family & Consumer Sci', group4: 'Apparel Prod Dsgn & Merchandsg', group5: 'Fashion Design & Merchandising', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 16,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 400201, cipDesc: 'Astronomy', group1: 'College Natural & Health Sci', group2: 'Astronomy', group3: 'Astronomy', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 460201, cipDesc: 'Carpentry', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Carpentry Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 40902, cipDesc: 'Arch & Building Sciences/Tech', group1: 'School of Architecture', group2: 'School of Architecture', group3: 'Architecture', group4: '', group5: '', outcome: 'Other', hawaiianLegacy: '', awards: 13,
  },
  {
    fiscalYear: 2023, campus: 'Windward CC', cip: 18301, cipDesc: 'Vet/AnimHlthTech/Techn&VetAsst', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Veterinary Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 21,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400601, cipDesc: 'Geology', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Earth Sciences', group4: 'Environmental Earth Science', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 511201, cipDesc: 'Medicine', group1: 'School of Medicine', group2: 'School of Medicine', group3: 'Medicine', group4: '', group5: '', outcome: 'Other', hawaiianLegacy: '', awards: 63,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 440401, cipDesc: 'Public Administration', group1: 'Professional Studies Division', group2: 'Public Administration', group3: 'Community Health', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 110103, cipDesc: 'Information Technology', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Information Tech', group4: 'Information Technology', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 440401, cipDesc: 'Public Administration', group1: 'Professional Studies Division', group2: 'Public Administration', group3: 'General Public Administration', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 440401, cipDesc: 'Public Administration', group1: 'Professional Studies Division', group2: 'Public Administration', group3: 'Long Term Care', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 451001, cipDesc: 'Political Science/Government', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Political Science', group4: 'Political Science', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 100202, cipDesc: 'Television Production', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Television Production', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 151303, cipDesc: 'Arch Engineering & CAD Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Architectural Eng & CAD Tech', group4: 'Architectural Eng & CAD Tech', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 151303, cipDesc: 'Arch Engineering & CAD Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Architectural Eng & CAD Tech', group4: 'Architectural Eng & CAD Tech', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'Hawai`inuiakea Sch Hawn Knowledge', group2: 'Hawaiian Studies', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 470201, cipDesc: 'Refrigeration & Air Cond', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Refrigeration & Air Cond Tech', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 400601, cipDesc: 'Geology', group1: 'College Natural & Health Sci', group2: 'Geology', group3: 'Geology', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 120401, cipDesc: 'Cosmetology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Cosmetology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 142401, cipDesc: 'Ocean & Resources Engineering', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Ocean & Res Eng', group4: 'Ocean & Resources Engineering', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 130501, cipDesc: 'Educational Tech', group1: 'College of Education', group2: 'Education', group3: 'Learning Design & Technology', group4: 'Learning Design & Technology', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 520701, cipDesc: 'Entrepreneurship', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Entrepreneurship', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 480508, cipDesc: 'Welding', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Welding Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 261302, cipDesc: 'Marine Biology & Bio Ocean', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Marine Biology', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 521401, cipDesc: 'Marketing', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Marketing', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400201, cipDesc: 'Astronomy', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Physics & Astronomy', group4: 'Astronomy', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 40902, cipDesc: 'Arch & Building Sciences/Tech', group1: 'School of Architecture', group2: 'School of Architecture', group3: 'Architecture', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 380101, cipDesc: 'Philosophy', group1: 'College of Arts & Sciences', group2: 'Arts & Humanities', group3: 'Philosophy', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Creative Media', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 261201, cipDesc: 'Biotechnology', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Molecular Biosci & Bioeng', group4: 'Molecular Biosciences &Biotech', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 150406, cipDesc: 'Automation Engineer Technician', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Integrated Industrial Tech', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 513801, cipDesc: 'Registered Nursing/Reg Nurse', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Nursing', group4: 'Nursing', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'Ka Haka Ula O Keelikolani', group2: 'Hawaiian Lang & Lit', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 520401, cipDesc: 'Adm Asst/Secretarial Science', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Business Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 460415, cipDesc: 'Construction Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Construction Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 161409, cipDesc: 'Hawaiian Language & Literature', group1: 'Hawai`inuiakea Sch Hawn Knowledge', group2: 'Hawaiian Language', group3: 'Hawaiian', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 10301, cipDesc: 'Agriculture', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Agriculture', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260503, cipDesc: 'Medical Micro & Bacteriology', group1: 'School of Medicine', group2: 'School of Medicine', group3: 'Biomed Sci (Tropical Medicine)', group4: '', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'College of Education', group2: 'Education', group3: 'Curriculum Studies', group4: 'Early Childhood Education', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 450201, cipDesc: 'Anthropology', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Anthropology', group4: 'Anthropology', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 451001, cipDesc: 'Political Science/Government', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Political Science', group4: 'Political Science', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 61,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 261302, cipDesc: 'Marine Biology & Bio Ocean', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Marine Biology', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 58,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 520801, cipDesc: 'Finance', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Finance', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 17,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131001, cipDesc: 'Special Education', group1: 'College of Education', group2: 'Education', group3: 'Inst for Teacher Ed', group4: 'Elementary Education', group5: 'Elem Education & Special Educ', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 19,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 250101, cipDesc: 'Library Studies', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Communication & Information', group4: 'Library & Information Science', group5: 'Library & Information Science', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 190707, cipDesc: 'Family and Community services', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Family & Consumer Sci', group4: 'Human Dev & Family Studies', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 32,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Tech', group4: 'Automotive Technology', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 19,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 513801, cipDesc: 'Registered Nursing/Reg Nurse', group1: 'Schl of Nurs & Dental Hygiene', group2: 'Nursing & Dental Hygiene', group3: 'Professional Nursing', group4: 'Nursing', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 16,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 240101, cipDesc: 'Liberal Arts', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Liberal Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 19,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510904, cipDesc: 'Emergency Medical Services Mgt', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Mobile Intens Care Technician', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 440401, cipDesc: 'Public Administration', group1: 'Professional Studies Division', group2: 'Public Administration', group3: 'Health Care Administration', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 45,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 240101, cipDesc: 'Liberal Arts', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Liberal Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 52,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 301801, cipDesc: 'Natural Science', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Natural Science', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 56,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 250101, cipDesc: 'Library Studies', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Communication & Information', group4: 'Library & Information Science', group5: 'Library & Information Science', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131299, cipDesc: 'Teacher Education', group1: 'College of Education', group2: 'Education', group3: 'Inst for Teacher Ed', group4: 'Education', group5: 'Teaching', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 23,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 301801, cipDesc: 'Natural Science', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Natural Science', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 14,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 451101, cipDesc: 'Sociology', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Sociology', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131205, cipDesc: 'Secondary Education', group1: 'College of Education', group2: 'Education', group3: 'Inst for Teacher Ed', group4: 'Secondary Education', group5: 'Secondary Education', outcome: 'Other', hawaiianLegacy: 'HAWAIIAN', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 141901, cipDesc: 'Mechanical Engineering', group1: 'College of Engineering', group2: 'Engineering', group3: 'Mechanical Engineering', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 70,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Sustainable Community Food Sys', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Tech', group4: 'Automotive Technology', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 261302, cipDesc: 'Marine Biology & Bio Ocean', group1: 'College Natural & Health Sci', group2: 'Marine Science', group3: 'Marine Science', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Information Technology', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510904, cipDesc: 'Emergency Medical Services Mgt', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Mobile Intens Care Technician', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 120401, cipDesc: 'Cosmetology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Cosmetology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: 'Accounting', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 521101, cipDesc: 'International Management', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Mgt & Industrial Rel', group4: 'International Business', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 90401, cipDesc: 'Journalism', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Communication & Information', group4: 'Communications', group5: 'Journalism', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 110901, cipDesc: 'Computer Sys Netwrk & Telecom', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Comp Security&Network Tech', group4: 'Comp Security&Network Tech', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 26,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: 'Early Childhood Education', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 460302, cipDesc: 'Elec Install & Maint Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electrical Install/Maint Tech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 430107, cipDesc: 'Administration of Justice', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Administration of Justice', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 14,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131205, cipDesc: 'Secondary Education', group1: 'College of Education', group2: 'Education', group3: 'Inst for Teacher Ed', group4: 'Secondary Education', group5: 'Secondary Education', outcome: 'Other', hawaiianLegacy: '', awards: 17,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: 'Early Childhood Education', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400601, cipDesc: 'Geology', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Earth Sciences', group4: 'Earth Science', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Health Professions', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 520101, cipDesc: 'General Business', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Business Administration', group4: 'Business Administration', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 110103, cipDesc: 'Information Technology', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Information Tech', group4: 'Information Technology', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 301801, cipDesc: 'Natural Science', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Natural Science', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 470605, cipDesc: 'Diesel Mechanics', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Diesel Mechanics', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 460302, cipDesc: 'Elec Install & Maint Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electrical Install/Maint Tech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 440000, cipDesc: 'Adult Services', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Human Services', group4: 'Human Services', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 451101, cipDesc: 'Sociology', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Sociology', group4: 'Sociology', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Hwn &Indigenous Hlth & Healing', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 460302, cipDesc: 'Elec Install & Maint Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electrical Install/Maint Tech', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 10,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 131299, cipDesc: 'Teacher Education', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Education', group4: 'Teaching', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 460302, cipDesc: 'Elec Install & Maint Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electrical Install/Maint Tech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Respiratory Care', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Windward CC', cip: 410101, cipDesc: 'Biology Technician', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Agripharmatech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400202, cipDesc: 'Astrophysics', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Physics & Astronomy', group4: 'Astrophysics', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 521401, cipDesc: 'Marketing', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Marketing', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 10606, cipDesc: 'Plant Nursery Ops & Mgmt', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Agriculture', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 460201, cipDesc: 'Carpentry', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Carpentry Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 110103, cipDesc: 'Information Technology', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Information Tech', group4: 'Information Technology', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 30599, cipDesc: 'Trop Forest Eco Mgmt & Agrofor', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Trop Forest Ecosys & Agrof Mgt', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 422803, cipDesc: 'Counseling Psychology', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Psychology', group4: 'Counseling Psychology', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 510602, cipDesc: 'Dental Hygiene', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Dental Hygiene', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 440000, cipDesc: 'Adult Services', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Human Services', group4: 'Human Services', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400601, cipDesc: 'Geology', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Geology', group4: 'Geology & Geophysics', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 512201, cipDesc: 'Pub Health Sci & Epidemiology', group1: 'School of Social Work', group2: 'School of Social Work', group3: 'Public Health', group4: 'Public Health', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 450201, cipDesc: 'Anthropology', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Anthropology', group4: 'Anthropology', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 40902, cipDesc: 'Arch & Building Sciences/Tech', group1: 'School of Architecture', group2: 'School of Architecture', group3: 'Architecture', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 90101, cipDesc: 'Speech Communicatn & Rhetoric', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Communication & Information', group4: 'Communicology', group5: 'Communicology', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 40301, cipDesc: 'Urban & Regional Planning Prog', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Urban & Reg Planning', group4: 'Urban and Regional Planning', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 240103, cipDesc: 'Humanities', group1: 'Humanities Division', group2: 'Humanities', group3: 'History', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 520801, cipDesc: 'Finance', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Finance', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 13,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 521401, cipDesc: 'Marketing', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Marketing', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 131,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 450601, cipDesc: 'Economics', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Economics', group4: 'Economics', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 13,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 520801, cipDesc: 'Finance', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Finance', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 95,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 90101, cipDesc: 'Speech Communicatn & Rhetoric', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Communication & Information', group4: 'Communicology', group5: 'Communicology', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'Hawai`inuiakea Sch Hawn Knowledge', group2: 'Hawaiian Studies', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 26,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 41,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 520701, cipDesc: 'Entrepreneurship', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Entrepreneurship', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 25,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510801, cipDesc: 'Medical/Clinical Assistant', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Medical Assisting', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 261201, cipDesc: 'Biotechnology', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Molecular Biosci & Bioeng', group4: 'Molecular Biosciences &Biotech', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 14,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 451101, cipDesc: 'Sociology', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Sociology', group4: 'Sociology', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 30,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 131299, cipDesc: 'Teacher Education', group1: 'Career & Tech Ed', group2: 'Teaching', group3: 'Teaching', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 520903, cipDesc: 'Travel Industry Management', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'School of Travel Industry Mgt', group4: 'Travel Industry Management', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 141901, cipDesc: 'Mechanical Engineering', group1: 'College of Engineering', group2: 'Engineering', group3: 'Mechanical Engineering', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 16,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 440000, cipDesc: 'Adult Services', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Human Services', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 240101, cipDesc: 'Liberal Arts', group1: 'Academic Affairs', group2: 'Academic Affairs', group3: 'Interdisciplinary Studies', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 53,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260406, cipDesc: 'Cell/Cellular & Molecular Biol', group1: 'School of Medicine', group2: 'School of Medicine', group3: 'Cell & Molecular Biology', group4: '', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400401, cipDesc: 'Atmospheric Sci & Meteorology', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Atmospheric Sciences', group4: 'Atmospheric Sciences', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 142401, cipDesc: 'Ocean & Resources Engineering', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Ocean & Res Eng', group4: 'Ocean & Resources Engineering', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 141901, cipDesc: 'Mechanical Engineering', group1: 'College of Engineering', group2: 'Engineering', group3: 'Mechanical Engineering', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 110103, cipDesc: 'Information Technology', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Information Tech', group4: 'Information Technology', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 21,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 150303, cipDesc: 'Electronic Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electronics Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 510602, cipDesc: 'Dental Hygiene', group1: 'Schl of Nurs & Dental Hygiene', group2: 'Nursing & Dental Hygiene', group3: 'Dental Hygiene', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 520401, cipDesc: 'Adm Asst/Secretarial Science', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Business Tech', group4: 'Business Technology', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 520401, cipDesc: 'Adm Asst/Secretarial Science', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Business Tech', group4: 'Business Technology', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 150701, cipDesc: 'Occuptnl Environmtl Safety Mgt', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Occupational Envir Safety Mgt', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 430203, cipDesc: 'Fire & Environtl Emerg Resp', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Fire & Envir Emergency Resp', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 30,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 190902, cipDesc: 'Apparel & Textile Manufacture', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Fashion Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 512201, cipDesc: 'Pub Health Sci & Epidemiology', group1: 'School of Social Work', group2: 'School of Social Work', group3: 'Public Health', group4: 'Public Health', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 24,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 140801, cipDesc: 'Civil Engineering', group1: 'College of Engineering', group2: 'Engineering', group3: 'Civil Engineering', group4: '', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 14,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 460302, cipDesc: 'Elec Install & Maint Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electrical Install/Maint Tech', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 513801, cipDesc: 'Registered Nursing/Reg Nurse', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Nursing', group4: 'Nursing', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 14,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 513901, cipDesc: 'Lic Practical/Voc Nurse Trng', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Nursing', group4: 'Practical Nursing', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 120401, cipDesc: 'Cosmetology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Cosmetology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 450201, cipDesc: 'Anthropology', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Anthropology', group4: 'Anthropology', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 512001, cipDesc: 'Pharmacy', group1: 'College of Pharmacy', group2: 'Pharmacy', group3: 'Pharmacy', group4: '', group5: '', outcome: 'Other', hawaiianLegacy: 'HAWAIIAN', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 451101, cipDesc: 'Sociology', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Sociology', group4: 'Sociology', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 430203, cipDesc: 'Fire & Environtl Emerg Resp', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Fire Science', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 110901, cipDesc: 'Computer Sys Netwrk & Telecom', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Comp Security&Network Tech', group4: 'Comp Security&Network Tech', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: 'Early Childhood Education', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 451001, cipDesc: 'Political Science/Government', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Political Science', group4: 'Political Science', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 143301, cipDesc: 'Construction Engineering & Mgt', group1: 'College of Engineering', group2: 'Engineering', group3: 'Construction Engineering', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: 'Accounting', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Tech', group4: 'Automotive Technology', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 16,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 460201, cipDesc: 'Carpentry', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Carpentry Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Windward CC', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260305, cipDesc: 'Plant Pathology', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Plant & Env Protect Sci', group4: 'Tropical Plant Pathology', group5: 'Tropical Plant Pathology', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 100399, cipDesc: 'New Media Arts', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'New Media Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 422806, cipDesc: 'Educational Psychology', group1: 'College of Education', group2: 'Education', group3: 'Educational Psychology', group4: 'Educational Psychology', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 460201, cipDesc: 'Carpentry', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Carpentry Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'Hawai`inuiakea Sch Hawn Knowledge', group2: 'Hawaiian Studies', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 440401, cipDesc: 'Public Administration', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Public Admin', group4: 'Public Administration', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 30104, cipDesc: 'Global Environmental Science', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Environmental Science', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 240103, cipDesc: 'Humanities', group1: 'Humanities Division', group2: 'Humanities', group3: 'English', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 100399, cipDesc: 'New Media Arts', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'New Media Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400801, cipDesc: 'Physics', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Physics & Astronomy', group4: 'Physics', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 470603, cipDesc: 'Auto Body Repair & Painting', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Auto Body Repair & Painting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Windward CC', cip: 410101, cipDesc: 'Biology Technician', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Agripharmatech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 110103, cipDesc: 'Information Technology', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Information Systems', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 460201, cipDesc: 'Carpentry', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Carpentry Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 161409, cipDesc: 'Hawaiian Language & Literature', group1: 'Ka Haka Ula O Keelikolani', group2: 'Hawaiian Lang & Lit', group3: 'Hawaiian Language & Literature', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 470603, cipDesc: 'Auto Body Repair & Painting', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Auto Body Repair & Painting', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 513801, cipDesc: 'Registered Nursing/Reg Nurse', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Nursing', group4: 'Nursing', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Tech', group4: 'Automotive Technology', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131202, cipDesc: 'Elementary Education', group1: 'College of Education', group2: 'Education', group3: 'Inst for Teacher Ed', group4: 'Elementary Education', group5: 'Elementary Education', outcome: 'Other', hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 150406, cipDesc: 'Automation Engineer Technician', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Integrated Industrial Tech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Tech', group4: 'Automotive Technology', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510801, cipDesc: 'Medical/Clinical Assistant', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Medical Assisting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 14,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 110701, cipDesc: 'Computer Science', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Information & Comp Sci', group4: 'Computer Science', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 14,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 521401, cipDesc: 'Marketing', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Marketing Management', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Windward CC', cip: 240101, cipDesc: 'Liberal Arts', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Liberal Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 81,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 240101, cipDesc: 'Liberal Arts', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Liberal Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 388,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 90101, cipDesc: 'Speech Communicatn & Rhetoric', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Communication & Information', group4: 'Communications', group5: 'Communication', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 74,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 240101, cipDesc: 'Liberal Arts', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Liberal Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 102,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 470603, cipDesc: 'Auto Body Repair & Painting', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Auto Body Repair & Painting', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 240101, cipDesc: 'Liberal Arts', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Liberal Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 81,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 310505, cipDesc: 'Exercise & Sports Science', group1: 'College Natural & Health Sci', group2: 'Kinesiology & Exercise Science', group3: 'Kinesiology & Exercise Science', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 240101, cipDesc: 'Liberal Arts', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Liberal Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 186,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 261302, cipDesc: 'Marine Biology & Bio Ocean', group1: 'College Natural & Health Sci', group2: 'Marine Science', group3: 'Marine Science', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 38,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131202, cipDesc: 'Elementary Education', group1: 'College of Education', group2: 'Education', group3: 'Inst for Teacher Ed', group4: 'Elementary Education', group5: 'Elementary Education', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 55,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260301, cipDesc: 'Botany', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Botany', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Information Security Assurance', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 32,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 130301, cipDesc: 'Curriculum & Instruction', group1: 'College of Education', group2: 'Education', group3: 'Curriculum Studies', group4: 'Curriculum Studies', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 80,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131299, cipDesc: 'Teacher Education', group1: 'College of Education', group2: 'Education', group3: 'Inst for Teacher Ed', group4: 'Education', group5: 'Teaching', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 131001, cipDesc: 'Special Education', group1: 'Career & Tech Ed', group2: 'Teaching', group3: 'Special Education', group4: '', group5: '', outcome: 'Other', hawaiianLegacy: '', awards: 16,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 240101, cipDesc: 'Liberal Arts', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Liberal Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 23,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260702, cipDesc: 'Entomology', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Plant & Env Protect Sci', group4: 'Entomology', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510907, cipDesc: 'Radiology', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Radiologic Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 520301, cipDesc: 'Accounting', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'School of Accountancy', group4: 'Accounting', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 63,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 301801, cipDesc: 'Natural Science', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Natural Science', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 41,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 161001, cipDesc: 'Am Ind/Nat Am Lang Lit Ling', group1: 'Ka Haka Ula O Keelikolani', group2: 'Hawaiian Lang & Lit', group3: 'Indigenous Lang & Culture Educ', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 511004, cipDesc: 'Medical Laboratory Technician', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Medical Lab Technician', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 40301, cipDesc: 'Urban & Regional Planning Prog', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Urban & Reg Planning', group4: 'Urban and Regional Planning', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 513818, cipDesc: 'Nursing Practice', group1: 'College Natural & Health Sci', group2: 'Nursing', group3: 'Nursing Practice', group4: '', group5: '', outcome: 'Other', hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 520401, cipDesc: 'Adm Asst/Secretarial Science', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Business Tech', group4: 'Business Technology', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 512201, cipDesc: 'Pub Health Sci & Epidemiology', group1: 'School of Social Work', group2: 'School of Social Work', group3: 'Public Health', group4: 'Public Health', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 90101, cipDesc: 'Speech Communicatn & Rhetoric', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Communication & Information', group4: 'Communications', group5: 'Communication', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 14,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'Hawai`inuiakea Sch Hawn Knowledge', group2: 'Hawaiian Studies', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 450701, cipDesc: 'Geography', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Geography & Environment', group4: 'Geography', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 40301, cipDesc: 'Urban & Regional Planning Prog', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Urban & Reg Planning', group4: 'Urban and Regional Planning', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 450601, cipDesc: 'Economics', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Economics', group4: 'Economics', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 520204, cipDesc: 'Office Mmgt and Supervision', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Management', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 510707, cipDesc: 'Health Info/Med Records Tech', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Health Information Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 14,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Tech', group4: 'Automotive Technology', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 520301, cipDesc: 'Accounting', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'School of Accountancy', group4: 'Accounting', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 10,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131001, cipDesc: 'Special Education', group1: 'College of Education', group2: 'Education', group3: 'Special Education', group4: 'Special Education', group5: '', outcome: 'Other', hawaiianLegacy: 'HAWAIIAN', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 480508, cipDesc: 'Welding', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Welding Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 540101, cipDesc: 'History', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'History', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 470605, cipDesc: 'Diesel Mechanics', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Diesel Mechanics', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 301801, cipDesc: 'Natural Science', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Natural Science', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 140801, cipDesc: 'Civil Engineering', group1: 'College of Engineering', group2: 'Engineering', group3: 'Civil Engineering', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 301801, cipDesc: 'Natural Science', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Natural Science', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 510707, cipDesc: 'Health Info/Med Records Tech', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Health Information Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'College of Education', group2: 'Education', group3: 'Curriculum Studies', group4: 'Early Childhood Education', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 450101, cipDesc: 'Social Sciences', group1: 'Social Sciences Division', group2: 'Social Science', group3: 'Anthropology', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 10308, cipDesc: 'Agroecology & Sustainable Agri', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Tropical Plant & Soil Sci', group4: 'Trop Agriculture & Environment', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 141901, cipDesc: 'Mechanical Engineering', group1: 'College of Engineering', group2: 'Engineering', group3: 'Mechanical Engineering', group4: '', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Tech', group4: 'Automotive Technology', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 440401, cipDesc: 'Public Administration', group1: 'Professional Studies Division', group2: 'Public Administration', group3: 'Health Care Administration', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 450101, cipDesc: 'Social Sciences', group1: 'Social Sciences Division', group2: 'Social Science', group3: 'Economics', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 10606, cipDesc: 'Plant Nursery Ops & Mgmt', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Agriculture', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 450101, cipDesc: 'Social Sciences', group1: 'Social Sciences Division', group2: 'Social Science', group3: 'Political Science', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 460415, cipDesc: 'Construction Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Construction Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 220302, cipDesc: 'Paralegal', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Paralegal', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510601, cipDesc: 'Dental Assisting', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Dental Assisting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 120401, cipDesc: 'Cosmetology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Cosmetology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260502, cipDesc: 'Microbiology', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Microbiology', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 451001, cipDesc: 'Political Science/Government', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Political Science', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 10,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 151303, cipDesc: 'Arch Engineering & CAD Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Architectural Eng & CAD Tech', group4: 'Architectural Eng & CAD Tech', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 110901, cipDesc: 'Computer Sys Netwrk & Telecom', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Comp Security&Network Tech', group4: 'Comp Security&Network Tech', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400801, cipDesc: 'Physics', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Physics & Astronomy', group4: 'Physics', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 513901, cipDesc: 'Lic Practical/Voc Nurse Trng', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Nursing', group4: 'Practical Nursing', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Facilities Management', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 303301, cipDesc: 'Sustainability Studies', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Sustainable Science Management', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 151202, cipDesc: 'Electronics & Comp Engin Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electronics & Comp Engin Tech', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 480506, cipDesc: 'Sheet Metal & Plastics', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Sheet Metal & Plastics Tech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 304401, cipDesc: 'Geography & Environment', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Geography & Environment', group4: 'Geography & Environment', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 110103, cipDesc: 'Information Technology', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Information Tech', group4: 'Information Technology', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 304401, cipDesc: 'Geography & Environment', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Geography & Environment', group4: 'Geography & Environment', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260301, cipDesc: 'Botany', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Botany', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510907, cipDesc: 'Radiology', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Radiologic Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 513801, cipDesc: 'Registered Nursing/Reg Nurse', group1: 'Schl of Nurs & Dental Hygiene', group2: 'Nursing & Dental Hygiene', group3: 'Professional Nursing', group4: 'Nursing', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 103,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131001, cipDesc: 'Special Education', group1: 'College of Education', group2: 'Education', group3: 'Special Education', group4: 'Special Education', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 20,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 440701, cipDesc: 'Social Work', group1: 'School of Social Work', group2: 'School of Social Work', group3: 'Social Work', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 88,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 450601, cipDesc: 'Economics', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Economics', group4: 'Economics', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 52,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 450101, cipDesc: 'Social Sciences', group1: 'Social Sciences Division', group2: 'Social Science', group3: 'Psychology', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 52,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 261302, cipDesc: 'Marine Biology & Bio Ocean', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Marine Biology', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 520301, cipDesc: 'Accounting', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'School of Accountancy', group4: 'Accounting', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510908, cipDesc: 'Respiratory Care', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Respiratory Care', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510908, cipDesc: 'Respiratory Care', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Respiratory Care', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 451101, cipDesc: 'Sociology', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Sociology', group4: 'Sociology', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 140301, cipDesc: 'Agricultural Engineering', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Molecular Biosci & Bioeng', group4: 'Molecular Bioscience & Bioengr', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510904, cipDesc: 'Emergency Medical Services Mgt', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Mobile Intens Care Technician', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 460201, cipDesc: 'Carpentry', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Carpentry Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 30,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131202, cipDesc: 'Elementary Education', group1: 'College of Education', group2: 'Education', group3: 'Inst for Teacher Ed', group4: 'Elementary Education', group5: 'Elementary Education', outcome: 'Other', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 450101, cipDesc: 'Social Sciences', group1: 'Social Sciences Division', group2: 'Social Science', group3: 'Psychology', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 23,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 512201, cipDesc: 'Pub Health Sci & Epidemiology', group1: 'School of Social Work', group2: 'School of Social Work', group3: 'Public Health', group4: 'Public Health', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 161409, cipDesc: 'Hawaiian Language & Literature', group1: 'Hawai`inuiakea Sch Hawn Knowledge', group2: 'Hawaiian Language', group3: 'Hawaiian', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 15,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 44,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 310505, cipDesc: 'Exercise & Sports Science', group1: 'College Natural & Health Sci', group2: 'Kinesiology & Exercise Science', group3: 'Kinesiology & Exercise Science', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 22,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 451001, cipDesc: 'Political Science/Government', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Political Science', group4: 'Political Science', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 18,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 30201, cipDesc: 'Natural Resource Mgmt & Policy', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Nat Res & Env Mgt', group4: 'Natural Res & Environmentl Mgt', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 90101, cipDesc: 'Speech Communicatn & Rhetoric', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Communication & Information', group4: 'Communicology', group5: 'Communicology', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 20,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260502, cipDesc: 'Microbiology', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Microbiology', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 150406, cipDesc: 'Automation Engineer Technician', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Integrated Industrial Tech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 510707, cipDesc: 'Health Info/Med Records Tech', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Health Information Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 13,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400607, cipDesc: 'Oceanography', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Oceanography', group4: 'Oceanography', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 240101, cipDesc: 'Liberal Arts', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Liberal Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 45,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 520903, cipDesc: 'Travel Industry Management', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'School of Travel Industry Mgt', group4: 'Travel Industry Management', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 240101, cipDesc: 'Liberal Arts', group1: 'Academic Affairs', group2: 'Academic Affairs', group3: 'Interdisciplinary Studies', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 10,
  },
  {
    fiscalYear: 2023, campus: 'Windward CC', cip: 18301, cipDesc: 'Vet/AnimHlthTech/Techn&VetAsst', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Veterinary Assisting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 150303, cipDesc: 'Electronic Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electronics Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 460302, cipDesc: 'Elec Install & Maint Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electrical Install/Maint Tech', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 451101, cipDesc: 'Sociology', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Sociology', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 513801, cipDesc: 'Registered Nursing/Reg Nurse', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Nursing', group4: 'Nursing', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 110103, cipDesc: 'Information Technology', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Information Tech', group4: 'Information Technology', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 15,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 520301, cipDesc: 'Accounting', group1: 'Col of Business & Economics', group2: 'Business & Economics', group3: 'Accounting', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: 'Accounting', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 13,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 220302, cipDesc: 'Paralegal', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Paralegal', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131001, cipDesc: 'Special Education', group1: 'College of Education', group2: 'Education', group3: 'Special Education', group4: 'Special Education', group5: '', outcome: 'Other', hawaiianLegacy: '', awards: 24,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 480506, cipDesc: 'Sheet Metal & Plastics', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Sheet Metal & Plastics Tech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 430203, cipDesc: 'Fire & Environtl Emerg Resp', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Fire & Envir Emergency Resp', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 17,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400601, cipDesc: 'Geology', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Earth Sciences', group4: 'Earth and Planetary Sciences', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 140301, cipDesc: 'Agricultural Engineering', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Molecular Biosci & Bioeng', group4: 'Biological Engineering', group5: 'Biological Engineering', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 430203, cipDesc: 'Fire & Environtl Emerg Resp', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Fire Science', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 90101, cipDesc: 'Speech Communicatn & Rhetoric', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Communication & Information', group4: 'Communications', group5: 'Communication', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 440401, cipDesc: 'Public Administration', group1: 'Professional Studies Division', group2: 'Public Administration', group3: 'Community Health', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 400201, cipDesc: 'Astronomy', group1: 'College Natural & Health Sci', group2: 'Astronomy', group3: 'Astronomy', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 90101, cipDesc: 'Speech Communicatn & Rhetoric', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Communication & Information', group4: 'Communications', group5: 'Communication', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 470608, cipDesc: 'Aircraft Powerplant Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Aeronautics Maint Tech', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 14,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 451001, cipDesc: 'Political Science/Government', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Political Science', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 130401, cipDesc: 'Educational Administration', group1: 'College of Education', group2: 'Education', group3: 'Ed Foundations', group4: 'Professional Education Practice', group5: '', outcome: 'Other', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 310505, cipDesc: 'Exercise & Sports Science', group1: 'College of Education', group2: 'Education', group3: 'Kinesiology & Rehab Sci', group4: 'Kinesiology & Rehab Sci', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 512001, cipDesc: 'Pharmacy', group1: 'College of Pharmacy', group2: 'Pharmacy', group3: 'Pharmacy Studies', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 32,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 512001, cipDesc: 'Pharmacy', group1: 'College of Pharmacy', group2: 'Pharmacy', group3: 'Pharmacy', group4: '', group5: '', outcome: 'Other', hawaiianLegacy: '', awards: 32,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 440000, cipDesc: 'Adult Services', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Human Services', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 430203, cipDesc: 'Fire & Environtl Emerg Resp', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Fire Science', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Tech', group4: 'Automotive Technology', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 10,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 520204, cipDesc: 'Office Mmgt and Supervision', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Management', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 16,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260406, cipDesc: 'Cell/Cellular & Molecular Biol', group1: 'School of Medicine', group2: 'School of Medicine', group3: 'Cell & Molecular Biology', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 520101, cipDesc: 'General Business', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Business Administration', group4: 'Business Administration', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 512001, cipDesc: 'Pharmacy', group1: 'College of Pharmacy', group2: 'Pharmacy', group3: 'Pharmacy Studies', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 301801, cipDesc: 'Natural Science', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Natural Science', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 513801, cipDesc: 'Registered Nursing/Reg Nurse', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Nursing', group4: 'Nursing', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 520401, cipDesc: 'Adm Asst/Secretarial Science', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Business Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 240103, cipDesc: 'Humanities', group1: 'Humanities Division', group2: 'Humanities', group3: 'Creative Media', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 521201, cipDesc: 'Business Computer Info Sys', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Management Information Systems', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400401, cipDesc: 'Atmospheric Sci & Meteorology', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Atmospheric Sciences', group4: 'Atmospheric Sciences', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Health Professions', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 450101, cipDesc: 'Social Sciences', group1: 'Social Sciences Division', group2: 'Social Science', group3: 'Sociology', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260305, cipDesc: 'Plant Pathology', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Plant & Env Protect Sci', group4: 'Tropical Plant Pathology', group5: 'Tropical Plant Pathology', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 513818, cipDesc: 'Nursing Practice', group1: 'College Natural & Health Sci', group2: 'Nursing', group3: 'Nursing Practice', group4: '', group5: '', outcome: 'Other', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Creative Media', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 450101, cipDesc: 'Social Sciences', group1: 'Social Sciences Division', group2: 'Social Science', group3: 'Sociology', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Respiratory Care', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400801, cipDesc: 'Physics', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Physics & Astronomy', group4: 'Physics', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 510801, cipDesc: 'Medical/Clinical Assistant', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Medical Assisting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 500701, cipDesc: 'Art', group1: 'College of Arts & Sciences', group2: 'Arts & Humanities', group3: 'Art', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 10308, cipDesc: 'Agroecology & Sustainable Agri', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Sustainable Agriculture', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 513808, cipDesc: 'Nursing Science', group1: 'Schl of Nurs & Dental Hygiene', group2: 'Nursing & Dental Hygiene', group3: 'Professional Nursing', group4: 'Nursing (PhD)', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 190902, cipDesc: 'Apparel & Textile Manufacture', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Fashion Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 150303, cipDesc: 'Electronic Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electronics Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 240103, cipDesc: 'Humanities', group1: 'Humanities Division', group2: 'Humanities', group3: 'Hawaiian/Pacific Studies', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 30104, cipDesc: 'Global Environmental Science', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Oceanography', group4: 'Global Environmental Science', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Sustainable Community Food Sys', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 460415, cipDesc: 'Construction Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Construction Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131205, cipDesc: 'Secondary Education', group1: 'College of Education', group2: 'Education', group3: 'Inst for Teacher Ed', group4: 'Secondary Education', group5: 'Secondary Education', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 190901, cipDesc: 'Fashion Des & Merchandising', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Family & Consumer Sci', group4: 'Apparel Prod Dsgn & Merchandsg', group5: 'Fashion Design & Merchandising', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 150303, cipDesc: 'Electronic Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electronics Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 140301, cipDesc: 'Agricultural Engineering', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Molecular Biosci & Bioeng', group4: 'Molecular Bioscience & Bioengr', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400201, cipDesc: 'Astronomy', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Physics & Astronomy', group4: 'Astronomy', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 520903, cipDesc: 'Travel Industry Management', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'School of Travel Industry Mgt', group4: 'Travel Industry Management', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 81,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510806, cipDesc: 'Physical Therapy Assistant', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Physical Therapist Assistant', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 521201, cipDesc: 'Business Computer Info Sys', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Management Information Systems', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 30104, cipDesc: 'Global Environmental Science', group1: 'College Natural & Health Sci', group2: 'Interdisciplinary Studies', group3: 'Trop Conserv Bio & Environ Sci', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 14,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 513801, cipDesc: 'Registered Nursing/Reg Nurse', group1: 'Schl of Nurs & Dental Hygiene', group2: 'Nursing & Dental Hygiene', group3: 'Professional Nursing', group4: 'Nursing', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 450601, cipDesc: 'Economics', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Economics', group4: 'Economics', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 131501, cipDesc: 'Teacher Assistant/Aide', group1: 'Career & Tech Ed', group2: 'Teaching', group3: 'Teaching', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 13,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'Ka Haka Ula O Keelikolani', group2: 'Hawaiian Lang & Lit', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 15,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510801, cipDesc: 'Medical/Clinical Assistant', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Medical Assisting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 520801, cipDesc: 'Finance', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Finance', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 110701, cipDesc: 'Computer Science', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Information & Comp Sci', group4: 'Computer Science', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260701, cipDesc: 'Zoology', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Zoology', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400607, cipDesc: 'Oceanography', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Oceanography', group4: 'Oceanography', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 440401, cipDesc: 'Public Administration', group1: 'Professional Studies Division', group2: 'Public Administration', group3: 'Justice Administration', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'Windward CC', cip: 301801, cipDesc: 'Natural Science', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Natural Science', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510801, cipDesc: 'Medical/Clinical Assistant', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Medical Assisting', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 261302, cipDesc: 'Marine Biology & Bio Ocean', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Marine Biology', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 521401, cipDesc: 'Marketing', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'Marketing Management', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 15,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 30201, cipDesc: 'Natural Resource Mgmt & Policy', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Nat Res & Env Mgt', group4: 'Natural Res & Environmentl Mgt', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260305, cipDesc: 'Plant Pathology', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Plant & Env Protect Sci', group4: 'Tropical Plant Pathology', group5: 'Tropical Plant Pathology', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 450601, cipDesc: 'Economics', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Economics', group4: 'Economics', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260905, cipDesc: 'Biomed Sci (Reproductive Biol)', group1: 'School of Medicine', group2: 'School of Medicine', group3: 'Developmental & Reprod Biology', group4: '', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 261309, cipDesc: 'Epidemiology', group1: 'School of Medicine', group2: 'School of Medicine', group3: 'Public Health Studies', group4: 'Epidemiology', group5: 'Epidemiology', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 520204, cipDesc: 'Office Mmgt and Supervision', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Management', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 513801, cipDesc: 'Registered Nursing/Reg Nurse', group1: 'College Natural & Health Sci', group2: 'Nursing', group3: 'Nursing', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 11,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 430107, cipDesc: 'Administration of Justice', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Administration of Justice', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 520302, cipDesc: 'Acctg Technician & Bookkeeping', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Accounting', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 220302, cipDesc: 'Paralegal', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Paralegal', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 309999, cipDesc: 'Interdisciplinary Studies', group1: 'Professional Studies Division', group2: 'Applied Science', group3: 'Information Security Assurance', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 440000, cipDesc: 'Adult Services', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Human Services', group4: 'Human Services', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 470608, cipDesc: 'Aircraft Powerplant Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Aeronautics Maint Tech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 430203, cipDesc: 'Fire & Environtl Emerg Resp', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Fire & Envir Emergency Resp', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 20,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 190902, cipDesc: 'Apparel & Textile Manufacture', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Fashion Technology', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 511201, cipDesc: 'Medicine', group1: 'School of Medicine', group2: 'School of Medicine', group3: 'Medicine', group4: '', group5: '', outcome: 'Other', hawaiianLegacy: 'HAWAIIAN', awards: 9,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 451001, cipDesc: 'Political Science/Government', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Political Science', group4: 'Political Science', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 190707, cipDesc: 'Family and Community services', group1: 'Col of Trop Ag & Human Res', group2: 'Tropical Ag & Human Res', group3: 'Family & Consumer Sci', group4: 'Human Dev & Family Studies', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 13,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 220101, cipDesc: 'Law', group1: 'School of Law', group2: 'School of Law', group3: 'Law', group4: '', group5: '', outcome: 'Other', hawaiianLegacy: 'HAWAIIAN', awards: 17,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 440401, cipDesc: 'Public Administration', group1: 'College of Social Sciences', group2: 'Social Sciences', group3: 'Public Admin', group4: 'Public Administration', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 13,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 150701, cipDesc: 'Occuptnl Environmtl Safety Mgt', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Occupational Envir Safety Mgt', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 450101, cipDesc: 'Social Sciences', group1: 'Social Sciences Division', group2: 'Social Science', group3: 'Economics', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 7,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 460302, cipDesc: 'Elec Install & Maint Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Electrical Install/Maint Tech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 10,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 301801, cipDesc: 'Natural Science', group1: 'General & Pre-Prof Ed', group2: 'Natural Sciences', group3: 'Natural Science', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 470201, cipDesc: 'Refrigeration & Air Cond', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Refrigeration & Air Cond Tech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 513801, cipDesc: 'Registered Nursing/Reg Nurse', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Nursing', group4: 'Nursing', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 16,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 450701, cipDesc: 'Geography', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Geography', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 10,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 510801, cipDesc: 'Medical/Clinical Assistant', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Medical Assisting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 30104, cipDesc: 'Global Environmental Science', group1: 'College of Arts & Sciences', group2: 'Social Sciences', group3: 'Environmental Science', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 10,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 110901, cipDesc: 'Computer Sys Netwrk & Telecom', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Comp Elec & Net Tech', group4: 'Comp Electronics & Network Tech', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 520101, cipDesc: 'General Business', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Business Administration', group4: 'Business Administration', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 450101, cipDesc: 'Social Sciences', group1: 'Social Sciences Division', group2: 'Social Science', group3: 'Early Childhood Education', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: '', awards: 5,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 120500, cipDesc: 'Food Service', group1: 'Career & Tech Ed', group2: 'Food Services', group3: 'Culinary Arts', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 470608, cipDesc: 'Aircraft Powerplant Technology', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Aeronautics Maint Tech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH West O`ahu', cip: 440401, cipDesc: 'Public Administration', group1: 'Professional Studies Division', group2: 'Public Administration', group3: 'General Public Administration', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 520903, cipDesc: 'Travel Industry Management', group1: 'College of Business Admin', group2: 'Business Administration', group3: 'School of Travel Industry Mgt', group4: 'Travel Industry Management', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 151303, cipDesc: 'Arch Engineering & CAD Tech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Architectural Eng & CAD Tech', group4: 'Architectural Eng & CAD Tech', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 470617, cipDesc: 'High Perfrm&Cstm EngTech/Mech', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Automotive Tech', group4: 'Automotive Technology', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 6,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260301, cipDesc: 'Botany', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Botany', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 4,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 131210, cipDesc: 'Early Childhood Education', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Early Childhood Education', group4: 'Early Childhood Education', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 8,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 30599, cipDesc: 'Trop Forest Eco Mgmt & Agrofor', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Trop Forest Ecosys & Agrof Mgt', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 131202, cipDesc: 'Elementary Education', group1: 'College of Education', group2: 'Education', group3: 'Inst for Teacher Ed', group4: 'Elementary Education', group5: 'Elementary Education', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 12,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 440000, cipDesc: 'Adult Services', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Human Services', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 310505, cipDesc: 'Exercise & Sports Science', group1: 'College of Education', group2: 'Education', group3: 'Kinesiology & Rehab Sci', group4: 'Kinesiology & Rehab Sci', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 40902, cipDesc: 'Arch & Building Sciences/Tech', group1: 'School of Architecture', group2: 'School of Architecture', group3: 'Architecture', group4: '', group5: '', outcome: 'Other', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 510913, cipDesc: 'Athletic Training', group1: 'College of Education', group2: 'Education', group3: 'Kinesiology & Rehab Sci', group4: 'Athletic Training', group5: '', outcome: "Master's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 110701, cipDesc: 'Computer Science', group1: 'College Natural & Health Sci', group2: 'Computer Science', group3: 'Computer Science', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 510913, cipDesc: 'Athletic Training', group1: 'College of Education', group2: 'Education', group3: 'Kinesiology & Rehab Sci', group4: 'Athletic Training', group5: '', outcome: "Master's Degrees", hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 460201, cipDesc: 'Carpentry', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Carpentry Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 261302, cipDesc: 'Marine Biology & Bio Ocean', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Marine Biology', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 260406, cipDesc: 'Cell/Cellular & Molecular Biol', group1: 'College of Natural Sciences', group2: 'Natural Sciences', group3: 'Life Sciences', group4: 'Molecular & Cell Biology', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Hawai`i CC', cip: 30599, cipDesc: 'Trop Forest Eco Mgmt & Agrofor', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Trop Forest Ecosys & Agrof Mgt', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 50202, cipDesc: 'American Indian/Native Studies', group1: 'General & Pre-Prof Ed', group2: 'Liberal Arts', group3: 'Hawaiian Studies', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 470201, cipDesc: 'Refrigeration & Air Cond', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Refrigeration & Air Cond Tech', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 3,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 160102, cipDesc: 'Linguistics', group1: 'Ka Haka Ula O Keelikolani', group2: 'Hawaiian Lang & Lit', group3: 'Linguistics', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Kapi`olani CC', cip: 510601, cipDesc: 'Dental Assisting', group1: 'Career & Tech Ed', group2: 'Health Services', group3: 'Dental Assisting', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Kaua`i CC', cip: 460201, cipDesc: 'Carpentry', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Carpentry Technology', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400601, cipDesc: 'Geology', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Earth Sciences', group4: 'Earth and Planetary Sciences', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Honolulu CC', cip: 440000, cipDesc: 'Adult Services', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Human Services', group4: 'Human Services', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Leeward CC', cip: 520401, cipDesc: 'Adm Asst/Secretarial Science', group1: 'Career & Tech Ed', group2: 'Business Education', group3: 'Business Tech', group4: 'Business Technology', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 10301, cipDesc: 'Agriculture', group1: 'Career & Tech Ed', group2: 'Technology', group3: 'Agriculture', group4: '', group5: '', outcome: 'Certs of Achievement', hawaiianLegacy: 'HAWAIIAN', awards: 1,
  },
  {
    fiscalYear: 2023, campus: 'UH Hilo', cip: 500701, cipDesc: 'Art', group1: 'College of Arts & Sciences', group2: 'Arts & Humanities', group3: 'Art', group4: '', group5: '', outcome: "Bachelor's Degrees", hawaiianLegacy: 'HAWAIIAN', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'UH Manoa', cip: 400401, cipDesc: 'Atmospheric Sci & Meteorology', group1: 'Schl of Ocean & Earth Sci & Tech', group2: 'Ocean & Earth Sci & Tech', group3: 'Atmospheric Sciences', group4: 'Atmospheric Sciences', group5: '', outcome: 'Doctoral Degrees', hawaiianLegacy: '', awards: 2,
  },
  {
    fiscalYear: 2023, campus: 'Maui College', cip: 430107, cipDesc: 'Administration of Justice', group1: 'Career & Tech Ed', group2: 'Public Services', group3: 'Administration of Justice', group4: '', group5: '', outcome: 'Associate Degrees', hawaiianLegacy: '', awards: 1,
  },
];

function totalDegrees(data: UhData[]): number {
  return data.reduce((sum, data) => sum + data.awards, 0);
}

function percentageHawaiian(data: UhData[]): number {
  const total: number = totalDegrees(data);
  const hawaiian: number = data.reduce((sum, item) => {
    if (item.hawaiianLegacy === 'HAWAIIAN') {
      return sum + item.awards;
    }
    return sum;
  }, 0);
  return hawaiian / total;
}

const listCampuses = (data: UhData[]): string[] => (data.map((item) => item.campus));
const totalDegreesByCampus = (data: UhData[], campus: string):number => data.filter((item) => item.campus === campus).reduce((acc, cur) => acc + cur.awards, 0);

interface CampusTotal {
  campus: string;
  degrees: number;
}

function listCampusDegrees(data: UhData[]): CampusTotal[] {
  const groupedByCampus = Object.groupBy(data, (item: { campus: any; }) => item.campus);

  const results: CampusTotal[] = [];

  for (const [campusName, entries] of Object.entries(groupedByCampus)) {
    const totalDegrees = (entries ?? []).reduce((sum: any, entry: { awards: any; }) => sum + entry.awards, 0);

    results.push({
      campus: campusName,
      degrees: totalDegrees,
    });
  }

  return results;
}

function maxDegrees(data: UhData[]): number {
  const degreesPerCampus: Record<string, number> = {};

  data.forEach((entry) => {
    const { campus, awards } = entry;

    if (degreesPerCampus[campus]) {
      degreesPerCampus[campus] += awards;
    } else {
      degreesPerCampus[campus] = awards;
    }
  });

  const totals = Object.values(degreesPerCampus);

  return totals.length > 0 ? Math.max(...totals) : 0;
}
console.log(totalDegrees(uhdata));
console.log(percentageHawaiian(uhdata));
console.log(listCampuses(uhdata));
console.log(totalDegreesByCampus(uhdata, 'UH Manoa'));
console.log(listCampusDegrees(uhdata));
console.log(maxDegrees(uhdata));
