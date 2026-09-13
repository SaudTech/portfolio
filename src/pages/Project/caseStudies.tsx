import React from "react";
import Term from "../Home/Sections/Term";
import { TIPS } from "../Home/Sections/content";

export type CaseStudy = {
  slug: string;
  name: string;
  fullName?: string;
  tag: string;
  highlightTag: boolean;
  summary: string;
  facts: { label: string; value: string }[];
  metrics: { value: string; label: string }[];
  overview: React.ReactNode[];
  features: { title: string; body: React.ReactNode }[];
  stack: { name: React.ReactNode; key: string; role: string }[];
  result: React.ReactNode;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "br-max",
    name: "BR Max",
    tag: "Acquired",
    highlightTag: true,
    summary:
      "An iMessage-style video generation SaaS for content creators. I founded it, built the whole stack alone, and sold it to a private buyer.",
    facts: [
      { label: "Role", value: "Founder & sole developer" },
      { label: "Year", value: "2026" },
      { label: "Type", value: "Video generation SaaS" },
      { label: "Website", value: "brmax.xyz" },
    ],
    metrics: [
      { value: "$6,000", label: "Acquired by a private buyer" },
      { value: "750K+", label: "Followers on the owner's TikTok, built with BR Max" },
      { value: "1", label: "Developer across the whole stack" },
    ],
    overview: [
      "BR Max makes iMessage-style videos: chat stories in the look TikTok audiences already know, ready to post on short-form platforms.",
      "I built it alone, from the first screen to billing: the editor, the video pipeline, the voiceovers, and the subscriptions. It found real users among TikTok story creators, and a private buyer then acquired it.",
    ],
    features: [
      {
        title: "iMessage-style videos",
        body: "Creators get chat-story videos in the familiar iMessage look, without building each frame by hand.",
      },
      {
        title: "Live video preview",
        body: "The video updates in the browser while the creator edits, so they see the result before a final render.",
      },
      {
        title: "Auto-trim of silent pauses",
        body: "Silent gaps in voiceovers are cut out automatically, so the video keeps its pace without manual editing.",
      },
      {
        title: "Token-based subscription billing",
        body: "Subscriptions give users tokens to spend on videos, so what a user pays follows how much they create.",
      },
    ],
    stack: [
      { key: "nextjs", name: "Next.js", role: "The web app: editor, account, and billing screens." },
      {
        key: "remotion",
        name: <Term tip={TIPS.remotion}>Remotion</Term>,
        role: "Videos written as React components, which also powers the live preview.",
      },
      { key: "lambda", name: "AWS Lambda", role: "Renders the final videos in the cloud." },
      {
        key: "elevenlabs",
        name: <Term tip={TIPS.elevenLabs}>ElevenLabs</Term>,
        role: "Generates the voiceovers.",
      },
    ],
    result: (
      <>
        Acquired by a private buyer for $6,000. Adopted by TikTok creators including @texty.stories.daily and
        @speakingtexts. The owner's own TikTok account, built with videos made in BR Max, has 750K+
        followers.
      </>
    ),
  },
  {
    slug: "hospital-ms",
    name: "Hospital MS",
    fullName: "Hospital Management System",
    tag: "In daily use",
    highlightTag: false,
    summary:
      "A full OPD/IPD management system for a private hospital in Hyderabad. Built on contract, deployed on the hospital's own servers, and used every day by clinical and admin staff.",
    facts: [
      { label: "Role", value: "Developer, on contract" },
      { label: "Year", value: "2026" },
      { label: "Client", value: "Private hospital, Hyderabad" },
      { label: "Deployment", value: "On-premise" },
    ],
    metrics: [
      { value: "Daily", label: "Used by clinical and admin staff" },
      { value: "OPD + IPD", label: "Outpatient and inpatient in one system" },
      { value: "On-site", label: "Deployed on hospital premises" },
    ],
    overview: [
      <>
        The system covers the patient journey inside the hospital: intake, <Term tip={TIPS.opdIpd}>OPD</Term>{" "}
        consultations, and <Term tip={TIPS.opdIpd}>IPD</Term> admissions, plus the commissions, reports, and
        documents around them.
      </>,
      "Different staff roles work in the same system, each with their own workflow. It runs on the hospital premises with PostgreSQL, and clinical and admin staff use it every day.",
    ],
    features: [
      {
        title: "Patient intake and consultations",
        body: "Registering patients and recording their outpatient consultations.",
      },
      {
        title: "Admissions",
        body: "Admitting patients and managing their inpatient stay.",
      },
      {
        title: "Multi-role workflows",
        body: "Each staff role gets the screens and actions that match their work.",
      },
      {
        title: "Doctor commission tracking",
        body: "Commission for doctors is tracked inside the system instead of by hand.",
      },
      {
        title: "End-of-day reports",
        body: "Staff close each day with reports built from that day's records.",
      },
      {
        title: "Customizable documents",
        body: (
          <>
            Printable documents built with <Term tip={TIPS.pdfme}>PDFme</Term>, so layouts can be adjusted to
            match the hospital's own paperwork.
          </>
        ),
      },
    ],
    stack: [
      { key: "nextjs", name: "Next.js", role: "The application: every screen and workflow." },
      { key: "postgres", name: "PostgreSQL", role: "Stores patient, admission, and report data." },
      {
        key: "pdfme",
        name: <Term tip={TIPS.pdfme}>PDFme</Term>,
        role: "Designs and generates the printable documents.",
      },
      {
        key: "on-premise",
        name: <Term tip={TIPS.onPremise}>On-premise deployment</Term>,
        role: "Runs on the hospital's own servers.",
      },
    ],
    result: <>Built, deployed on hospital premises, and used daily by clinical and admin staff.</>,
  },
];
