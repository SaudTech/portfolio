import React from "react";
import Section, { Eyebrow } from "./Section";
import { Tech, TechList } from "./Term";
import { EMAIL, RESUME_URL, TIPS } from "./content";

const skillGroups: { label: string; items: Tech[] }[] = [
  { label: "Languages", items: ["JavaScript (ES6+)", "TypeScript"] },
  { label: "Backend", items: ["Node.js", "Express", "MongoDB"] },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      { label: "ShadCN", tip: TIPS.shadcn },
      { label: "Recharts", tip: TIPS.recharts },
      { label: "Remotion", tip: TIPS.remotion },
    ],
  },
  {
    label: "Cloud & Tools",
    items: [
      "AWS (S3, Lambda, EC2, RDS)",
      { label: "Vercel", tip: TIPS.vercel },
      { label: "Firebase", tip: TIPS.firebase },
      "Git",
      { label: "Twilio", tip: TIPS.twilio },
      { label: "ElevenLabs", tip: TIPS.elevenLabs },
    ],
  },
];

const Skills: React.FC = () => (
  <Section id="skills">
    <Eyebrow index={4} className="mb-[26px]">
      Skills
    </Eyebrow>
    <h2 className="mb-[30px] font-serif text-[34px] font-light leading-[1.1] text-ink sm:text-[40px]">
      What I work with
    </h2>

    <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.label} className="border border-rule-soft bg-card px-6 py-[22px]">
          <div className="mb-3 text-[11px] uppercase leading-none tracking-[.14em] text-muted">{group.label}</div>
          <div className="font-serif text-[19px] font-light leading-[1.5] text-ink">
            <TechList items={group.items} separator=", " />
          </div>
        </div>
      ))}
    </div>

    <div className="mt-7 flex max-w-[730px] flex-col items-start gap-7 border-t border-rule pt-[22px] md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-2 text-[11px] uppercase leading-none tracking-[.14em] text-muted-2">Education</div>
        <div className="font-serif text-[19px] font-light leading-[1.4] text-ink">
          Bachelor of Computer Applications, Osmania University{" "}
          <span className="text-muted-2">(currently pursuing)</span>
        </div>
      </div>
      <div className="flex flex-none gap-2.5">
        <a
          href={RESUME_URL}
          download
          className="rounded-sm bg-accent px-[22px] py-[15px] text-[13px] font-medium leading-none text-on-accent transition-colors hover:bg-accent-ink"
        >
          Download resume
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-sm border border-rule-strong px-[22px] py-[15px] text-[13px] font-medium leading-none text-ink transition-colors hover:border-ink"
        >
          Get in touch
        </a>
      </div>
    </div>
  </Section>
);

export default Skills;
