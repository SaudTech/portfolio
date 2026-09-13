import React from "react";
import Section, { Eyebrow } from "./Section";
import Term from "./Term";
import Expandable from "./Expandable";
import { TIPS } from "./content";
import { cn } from "../../../utils/cn";

type Client = {
  name: string;
  sector: string;
  summary: React.ReactNode;
  outcomes?: { value: string; label: string }[];
  stack?: string[];
};

const clients: Client[] = [
  {
    name: "Emvive",
    sector: "Fintech SaaS",
    summary: (
      <>
        MERN-stack SaaS integrated with <Term tip={TIPS.zatca}>ZATCA</Term> Saudi e-invoicing; an
        in-system validation layer reduced rejections. Migrated per-client EC2 + RDS instances to a shared
        SaaS model, built a no-code dynamic forms module, and led the frontend team through the migration
        and HCM module rollout.
      </>
    ),
    outcomes: [
      { value: "₹30,000 → under ₹3,000", label: "Monthly AWS spend" },
      { value: "days → under an hour", label: "Form creation time" },
    ],
  },
  {
    name: "Vizzhy",
    sector: "Healthcare",
    summary: (
      <>
        Patient-facing healthcare app in React and Redux. Integrated automated speech recognition and a{" "}
        <Term tip={TIPS.firebase}>Firebase</Term> real-time chat system between doctors and patients.
      </>
    ),
    stack: ["React · Redux", "Firebase"],
  },
  {
    name: "Wellyfe",
    sector: "Healthcare",
    summary: (
      <>
        Patient-doctor portal with React, Redux, <Term tip={TIPS.twilio}>Twilio</Term>, and{" "}
        <Term tip={TIPS.recharts}>Recharts</Term>. Real-time video consultations between doctors and
        patients, plus automated SMS reminders.
      </>
    ),
    stack: ["React · Redux", "Twilio · Recharts"],
  },
];

const smallCaps = "text-[11px] uppercase leading-[1.6] tracking-[.08em] text-muted-2";

const Experience: React.FC = () => (
  <Section id="experience">
    <Eyebrow index={3} className="mb-[26px]">
      Experience
    </Eyebrow>
    <h2 className="mb-1.5 font-serif text-[34px] font-light leading-[1.1] text-ink sm:text-[40px]">
      Arcgen Technologies
    </h2>
    <div className="mb-[30px] text-sm leading-[1.5] text-muted">
      Freelance · Hyderabad · 2022 to Present · frontend lead in teams of 3 to 4
    </div>

    <div>
      {clients.map((client, i) => (
        <div
          key={client.name}
          className={cn(
            "grid grid-cols-1 gap-3 border-t border-rule py-[22px] md:grid-cols-[170px_minmax(0,1fr)_150px] md:gap-7",
            i === clients.length - 1 && "border-b"
          )}
        >
          <div>
            <div className="font-serif text-[22px] leading-[1.2] text-ink">{client.name}</div>
            <div className="mt-1.5 text-[11px] uppercase leading-none tracking-[.12em] text-accent-ink">
              {client.sector}
            </div>
          </div>
          <Expandable className="text-[15px] font-light leading-[1.65] text-ink-soft">{client.summary}</Expandable>
          {client.outcomes ? (
            <div className="flex flex-col gap-4">
              {client.outcomes.map((outcome) => (
                <div key={outcome.label}>
                  <div className="font-serif text-[15px] font-light leading-[1.35] text-ink">{outcome.value}</div>
                  <div className={smallCaps}>{outcome.label}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className={smallCaps}>
              {client.stack?.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </Section>
);

export default Experience;
