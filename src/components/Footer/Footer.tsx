import React from "react";
import { VscCopy } from "react-icons/vsc";
import { RoughNotation } from "react-rough-notation";
import { toast } from "react-toastify";

const Footer: React.FC = () => {
  const email: string = "Saaud266@gmail.com";
  const copy_email = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email Copied!", {
      theme: "dark",
      hideProgressBar: true,
      style: {
        color: "#99908D",
        fontSize: "12px",
        minWidth: "250px",
      },
    });
  };

  return (
    <div className="flex gap-2 items-center justify-center w-full text-center">
      <div className="h-40 w-full flex flex-col justify-center">
        <p className="text-lightTextColor/50">
          Built with <Link href="https://react.dev/" label="React" />,{" "}
          <Link href="https://www.typescriptlang.org/" label="TypeScript" />,{" "}
          <Link href="https://tailwindcss.com/" label="Tailwind" />, and{" "}
          <Link href="https://vercel.com/" label="Vercel" />.
        </p>
        <p className="text-lightTextColor/50">
          Contact email address:{" "}
          <RoughNotation
            type="underline"
            color="#F59E0B"
            show={true}
            animationDelay={500}
            animationDuration={2000}
          >
            {email}
          <VscCopy className="inline cursor-pointer" onClick={copy_email} />
          </RoughNotation>
        </p>
      </div>
    </div>
  );
};

const Link = ({ href, label }: { href: string; label: string }) => (
  <a
    className="hover:text-lightTextColor hover:underline transition-all duration-200"
    href={href}
    target="_blank"
  >
    {label}
  </a>
);

export default Footer;
