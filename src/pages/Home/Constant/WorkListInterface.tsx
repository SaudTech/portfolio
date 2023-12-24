import Work from "../Constant/WorkInterface";

interface WorkListInterface {
  projects: Work[];
  companyName: string;
  from: string; // Month Year (eg. June 2021)
  to: string; // Month Year (eg. June 2022s)
  position: string;
  location?: string;
}

export default WorkListInterface;