import WorkListInterface from "../Constant/WorkListInterface";

const WorkList: WorkListInterface[] = [
  {
    companyName: "Arcgen Consultants",
    from: "Jan 2021",
    to: "Present",
    position: "React & Vue Developer",
    location: "Hyderabad, India",
    projects: [
      {
        title: "Vizzhy ~ Healhcare",
        from: "June 2023",
        to: "November 2023",
        position: "Developer",
        description: "Vizzhy created an AI-based platform that integrates genomics, metabolomics, and microbiome data for personalized management of metabolic diseases. It combines IoT and AI for in-depth analysis and customized care plans, focusing on the root causes of metabolic disorders.",
        url: "vizzhy",
        technologies: ["React", "Redux", "Material UI", "Chart.js", "Tailwind CSS", "Git"]
      },
      {
        title: "Dr.Voxel ~ Healhcare",
        from: "August 2022",
        to: "June 2023",
        position: "Lead Developer",
        description: "A dynamic patient-doctor engagement platform, facilitating both in-person and virtual consultations. Features include easy appointment booking, real-time video calls, and automated delivery of digital consultation summaries to patients. Integrated data visualization enhances the healthcare experience.",
        url: "drvoxel",
        technologies: ["React", "Redux", "React Charts", "Vue", "Nuxt", "Vuetify", "Tailwind CSS", "Git"]
      },
      {
        title: "E-Invoicing & HCM",
        from: "January 2022",
        to: "April 2023",
        position: "Lead Developer",
        description: "A Saudi e-invoicing platform that simplifies invoice generation and ensures compliance with Zatca requirements. Powered by Vue.js, it offers users the convenience of seamless invoice submission, leaving the rest to the platform's robust Zatca integration. Led the development effort as the lead frontend developer.",
        url: "emvive",
        technologies: ["Vue", "Nuxt", "Vuetify", "Tailwind CSS", "Git"]
      }
    ]
  }
];

export default WorkList;