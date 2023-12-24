// WorkInterface.ts
interface Work {
  title: string;
  from: string;
  to: string;
  position: string;
  description?: string;
  isSideProject?: boolean;
  url?: string;
  technologies?: string[];
}

export default Work;