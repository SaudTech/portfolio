import { useEffect } from "react";
import useResume from "../components/useResume";

const Resume = () => {
  const { triggerDownload, ResumeDownloadButton } = useResume(
    "SAUD_ZUBEDI_RESUME.pdf"
  );
  useEffect(() => {
    triggerDownload();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col gap-3 text-center h-full mt-[260px]">
      <h3>Resume should automatically be downloaded.</h3>

      <p>
        If the download doesn't start automatically, click
         the button below.
      </p>
      <ResumeDownloadButton />
    </div>
  );
};

export default Resume;
