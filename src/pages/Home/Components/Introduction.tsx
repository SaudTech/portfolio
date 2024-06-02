import React from "react";
import { RoughNotation } from "react-rough-notation";
import SocialMediaButton from "./SocialMediaButton";
import { BiLogoMongodb, BiLogoNodejs, BiLogoReact } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import useResume from "../../../components/useResume";

const Introduction: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = React.useState(0);
  const { ResumeDownloadButton } = useResume(
    "SAUD_ZUBEDI_RESUME.pdf"
  );

  React.useEffect(() => {
    const maxIndex = 5;
    const interval = setInterval(() => {
      setVisibleIndex((currentIndex) => {
        if (currentIndex < maxIndex) {
          return currentIndex + 1;
        }
        clearInterval(interval);
        return currentIndex;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-7 text-2xl justify-center relative h-[calc(100vh-2rem)]">
      <div>
        <div className="flex items-center justify-center space-x-6">
          <div className="rounded-full bg-gradient-to-tl from-purple/30 to-pink/30 shadow-lg p-[3px]">
            <div className="rounded-full bg-gradient-to-tl from-purple to-pink shadow-lg p-[3px]">
              <div className="rounded-full p-px h-[64px] w-[64px]">
                <img
                  alt="A photo of Saud"
                  src="https://res.cloudinary.com/dafq69nvu/image/upload/v1703667893/profile-picture.png"
                  width="64"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                  className="rounded-full"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-medium text-white sm:text-4xl">
              Saud Zubedi
            </h1>
            <h2 className="align-middle text-lg leading-6 text-rose-100/50">
              <span className="flex items-center gap-2">
                MERN Stack Developer
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-center">
            Full stack Developer with{" "}
            <RoughNotation
              show={visibleIndex >= 1}
              type="underline"
              color="#8F2F70"
            >
              over 3 years
            </RoughNotation>{" "}
            of experience.
          </p>

          <h2 className="whitespace-nowrap w-full text-center mt-10">
            <RoughNotation
              show={visibleIndex >= 2}
              type="underline"
              color="#81C784"
            >
              <BiLogoMongodb className="inline-block" /> MongoDB{" "}
              <SiExpress className="inline-block ml-2" /> Express{" "}
              <BiLogoReact className="inline-block ml-2" /> React{" "}
              <BiLogoNodejs className="inline-block ml-2" /> Node{" "}
            </RoughNotation>
          </h2>
        </div>
      </div>

      <div className="w-full text-center">
        <ResumeDownloadButton />

        <div className="flex justify-center text-xs gap-3 mt-5">
          <SocialMediaButton type="upwork" label="Upwork" />
          <SocialMediaButton type="github" label="Github" />
        </div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 text-center text-xs">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
