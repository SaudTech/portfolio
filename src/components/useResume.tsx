import React, { useState, useCallback } from "react";
import { Button } from "./ui/moving-border";
import Resume from "../assets/Resume.pdf";

interface UseResumeResult {
  triggerDownload: () => void;
  ResumeDownloadButton: React.FC;
}

function useResume(resumeFilename: string): UseResumeResult {
  const [downloadStatus, setDownloadStatus] = useState<
    "Downloading..." | "Downloaded!" | null
  >(null);

  const triggerDownload = useCallback(() => {
    setDownloadStatus("Downloading...");

    const reader = new FileReader();
    reader.onloadend = () => {
      const link = document.createElement("a");
      link.href = reader.result as string;
      link.download = resumeFilename;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadStatus("Downloaded!");
    };
    const resumeBlob = new Blob([Resume]);
    reader.readAsDataURL(resumeBlob); // Read the Blob as a data URL
  }, [resumeFilename]);

  const ResumeDownloadButton: React.FC = () => (
    <Button
      disabled={downloadStatus === "Downloading..."}
      onClick={triggerDownload}
      borderRadius="5rem"
      duration={4000}
      containerClassName="w-60 h-12"
      borderClassName="bg-gradient-to-tl from-purple to-pink opacity-60 h-10 w-16"
      className="bg-white dark:bg-transparent text-md font-bold text-black dark:text-white dark:border-slate-800"
    >
      {downloadStatus || "Download Resume"}
    </Button>
  );

  return { triggerDownload, ResumeDownloadButton };
}

export default useResume;
