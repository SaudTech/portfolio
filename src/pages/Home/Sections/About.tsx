import React from "react";
import Section, { Eyebrow } from "./Section";
import { EMAIL, PHONE, RESUME_URL } from "./content";

const metrics = [
  { value: "3+", label: ["Years freelance,", "client SaaS"] },
  { value: "$6,000", label: ["SaaS founded, built,", "and acquired"] },
  { value: "10×", label: ["AWS cost cut on", "a client migration"] },
];

const About: React.FC = () => (
  <Section id="about">
    <Eyebrow index={1} className="mb-7">
      About
    </Eyebrow>
    <h1 className="mb-3 font-serif text-[44px] font-light leading-none tracking-[-.02em] text-ink sm:text-[64px]">
      Saud Zubedi
    </h1>
    <div className="mb-[30px] text-[17px] leading-[1.4] text-muted">
      Frontend Developer · React / Next.js / TypeScript
    </div>
    <p className="mb-[22px] max-w-[640px] font-serif text-[22px] font-light leading-[1.45] text-ink-soft [text-wrap:pretty] sm:text-[26px]">
      I build production SaaS front ends: fintech, healthcare, and one
      video-generation product I founded, shipped, and sold.
    </p>
    <p className="mb-[34px] max-w-[600px] text-base font-light leading-[1.65] text-muted [text-wrap:pretty]">
      Three years of freelance work in teams of three to four, leading the frontend on client SaaS
      from first screen to production. Comfortable owning the whole path: interface, integration,
      deployment, and the cost of running it.
    </p>

    <div className="mb-[34px] grid max-w-[640px] grid-cols-1 gap-px bg-rule sm:grid-cols-3">
      {metrics.map((metric) => (
        <div key={metric.value} className="bg-paper px-5 pb-5 pt-[18px]">
          <div className="font-serif text-[38px] font-light leading-none text-ink">{metric.value}</div>
          <div className="mt-2 text-[11px] uppercase leading-[1.4] tracking-[.1em] text-muted">
            {metric.label[0]}
            <br />
            {metric.label[1]}
          </div>
        </div>
      ))}
    </div>

    <div className="flex flex-wrap items-center gap-[22px]">
      <a
        href={RESUME_URL}
        download
        className="rounded-sm bg-accent px-[26px] py-4 text-[13px] font-medium leading-none text-on-accent transition-colors hover:bg-accent-ink"
      >
        Download resume
      </a>
      <div className="text-[13px] leading-[1.7] text-muted">
        <a href={`mailto:${EMAIL}`} className="hover:text-ink">
          {EMAIL}
        </a>
        &nbsp;·&nbsp;
        <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-ink">
          {PHONE}
        </a>
        &nbsp;·&nbsp; Hyderabad, India
      </div>
    </div>
  </Section>
);

export default About;
