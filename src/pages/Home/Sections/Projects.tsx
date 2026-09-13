import React from "react";
import { Link } from "react-router-dom";
import Section, { Eyebrow } from "./Section";
import Term, { Tech, TechList } from "./Term";
import Expandable from "./Expandable";
import { TIPS } from "./content";
import { cn } from "../../../utils/cn";

type Project = {
  slug: string;
  name: React.ReactNode;
  tag: string;
  highlightTag: boolean;
  meta: string;
  description: React.ReactNode;
  outcome: string;
  stack: Tech[];
};

const projects: Project[] = [
  {
    slug: "br-max",
    name: "BR Max",
    tag: "Acquired",
    highlightTag: true,
    meta: "Founder & sole developer · 2026 · brmax.xyz",
    description: (
      <>
        Video generation SaaS for content creators. Built the whole stack solo: live video preview,
        auto-trim of silent pauses in voiceovers, token-based subscription billing.
      </>
    ),
    outcome:
      "Acquired by a private buyer for $6,000. Adopted by TikTok creators including @texty.stories.daily and @speakingtexts.",
    stack: [
      "Next.js",
      { label: "Remotion", tip: TIPS.remotion },
      "AWS Lambda",
      { label: "ElevenLabs", tip: TIPS.elevenLabs },
    ],
  },
  {
    slug: "hospital-ms",
    name: <Term tip={TIPS.hms}>Hospital MS</Term>,
    tag: "In daily use",
    highlightTag: false,
    meta: "Contract · 2026 · private hospital, Hyderabad",
    description: (
      <>
        Full <Term tip={TIPS.opdIpd}>OPD/IPD</Term> management system: patient intake, admissions,
        consultations, multi-role workflows, doctor commission tracking, staff end-of-day reports,{" "}
        <Term tip={TIPS.pdfme}>PDFme</Term>-based customizable documents.
      </>
    ),
    outcome: "Built, deployed on hospital premises, and used daily by clinical and admin staff.",
    stack: ["Next.js", "PostgreSQL", { label: "on-premise deployment", tip: TIPS.onPremise }],
  },
];

const Projects: React.FC = () => (
  <Section id="projects">
    <div className="mb-[22px] flex max-w-[730px] flex-wrap items-baseline justify-between gap-3">
      <Eyebrow index={2}>Projects</Eyebrow>
      <div className="text-xs leading-none text-muted-2">Two shipped products, built end to end by me</div>
    </div>

    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.slug} className="flex flex-col border border-rule-soft bg-card p-7">
          <div className="mb-1.5 flex items-baseline justify-between gap-3">
            <h2 className="font-serif text-[30px] font-normal leading-[1.1] text-ink">{project.name}</h2>
            <span
              className={cn(
                "whitespace-nowrap border px-2 py-[5px] text-[10px] font-medium uppercase leading-none tracking-[.1em]",
                project.highlightTag ? "border-accent text-accent" : "border-rule-strong text-muted"
              )}
            >
              {project.tag}
            </span>
          </div>
          <div className="mb-4 text-xs leading-[1.5] text-muted-2">{project.meta}</div>
          <Expandable className="mb-4 text-[15px] font-light leading-[1.6] text-ink-soft">
            {project.description}
          </Expandable>
          <div className="mb-4 bg-accent-wash px-3.5 py-3 font-serif text-sm leading-[1.5] text-ink">
            {project.outcome}
          </div>
          <div className="mt-auto border-t border-rule-soft pt-3.5 text-[13px] leading-[1.7] text-muted">
            <TechList items={project.stack} />
          </div>
          <Link
            to={`/projects/${project.slug}`}
            className="group mt-4 inline-flex items-center gap-1.5 self-start text-[13px] font-medium text-accent-ink"
          >
            Read case study
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </article>
      ))}
    </div>
  </Section>
);

export default Projects;
