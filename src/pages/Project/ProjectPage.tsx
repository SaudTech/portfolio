import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { caseStudies } from "./caseStudies";
import { Eyebrow } from "../Home/Sections/Section";
import ThemeToggle from "../Home/Sections/ThemeToggle";
import { useTheme } from "../Home/Sections/useTheme";
import { EMAIL, RESUME_URL } from "../Home/Sections/content";
import { cn } from "../../utils/cn";

// Header, hero, blocks, and footer all share this column so their edges line up.
const container = "mx-auto w-full max-w-[1080px] px-5 sm:px-10";
const label = "text-[11px] uppercase leading-none tracking-[.14em] text-muted-2";
const body = "text-base font-light leading-[1.65] text-ink-soft";

const Block: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="grid grid-cols-1 gap-5 border-t border-rule py-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12 lg:py-12">
    <h2 className="font-serif text-[26px] font-light leading-[1.2] text-ink lg:-mt-1">{title}</h2>
    <div className="min-w-0">{children}</div>
  </section>
);

const ProjectPage: React.FC = () => {
  const { slug } = useParams();
  const { theme, toggleTheme } = useTheme();
  const index = caseStudies.findIndex((study) => study.slug === slug);
  const study = caseStudies[index];

  useEffect(() => {
    if (!study) return;
    document.title = `${study.name} | Saud Zubedi`;
    // Jump to the top without the smooth scroll set on html.
    const root = document.documentElement;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = "";
  }, [study]);

  if (!study) return <Navigate to="/" replace />;

  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <div className="min-h-screen bg-paper font-sans text-ink transition-colors duration-300">
      <header className="sticky top-0 z-20 border-b border-rule bg-paper/95 backdrop-blur">
        <div className={cn(container, "flex items-center justify-between py-2.5")}>
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 text-[13px] tracking-[.06em] text-muted transition-colors hover:text-ink"
          >
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            All projects
          </Link>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      <main className={cn(container, "pb-20 pt-12 sm:pt-16")}>
        <Eyebrow index={index + 1}>Case study</Eyebrow>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
          <h1 className="font-serif text-[44px] font-light leading-none tracking-[-.02em] text-ink sm:text-[64px]">
            {study.name}
          </h1>
          <span
            className={cn(
              "whitespace-nowrap border px-2 py-[5px] text-[10px] font-medium uppercase leading-none tracking-[.1em]",
              study.highlightTag ? "border-accent text-accent" : "border-rule-strong text-muted"
            )}
          >
            {study.tag}
          </span>
        </div>
        {study.fullName && <div className="mt-3 text-[17px] leading-[1.4] text-muted">{study.fullName}</div>}

        <p className="mt-6 max-w-[780px] font-serif text-[21px] font-light leading-[1.5] text-ink-soft [text-wrap:pretty] sm:text-2xl">
          {study.summary}
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-rule py-5 md:grid-cols-4">
          {study.facts.map((fact) => (
            <div key={fact.label} className="min-w-0">
              <dt className={label}>{fact.label}</dt>
              <dd className="mt-2 font-serif text-[17px] leading-[1.35] text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mb-12 mt-8 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-3">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="bg-paper px-5 py-5">
              <div className="font-serif text-[36px] font-light leading-none text-ink">{metric.value}</div>
              <div className="mt-3 text-[11px] uppercase leading-[1.5] tracking-[.1em] text-muted">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <Block title="Overview">
          <div className={cn("flex max-w-[680px] flex-col gap-5", body)}>
            {study.overview.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Block>

        <Block title="What I built">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {study.features.map((feature) => (
              <div key={feature.title} className="border border-rule-soft bg-card p-6">
                <h3 className="mb-2 font-serif text-xl font-normal leading-[1.3] text-ink">{feature.title}</h3>
                <p className={body}>{feature.body}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Stack">
          <div>
            {study.stack.map((item, i) => (
              <div
                key={item.key}
                className={cn(
                  "grid grid-cols-1 gap-1 py-4 sm:grid-cols-[200px_minmax(0,1fr)] sm:items-baseline sm:gap-6",
                  i === 0 ? "pt-0" : "border-t border-rule"
                )}
              >
                <div className="font-serif text-lg leading-[1.4] text-ink">{item.name}</div>
                <div className={body}>{item.role}</div>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Result">
          <div className="bg-accent-wash px-6 py-5 font-serif text-[19px] leading-[1.55] text-ink">{study.result}</div>
        </Block>

        <div className="flex flex-col gap-8 border-t border-rule pt-10 md:flex-row md:items-end md:justify-between">
          <Link to={`/projects/${next.slug}`} className="group">
            <div className={label}>Next project</div>
            <div className="mt-3 flex items-center gap-3 font-serif text-[30px] font-light leading-none text-ink">
              {next.name}
              <span aria-hidden="true" className="text-accent transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
          <div className="flex flex-wrap gap-2.5">
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
      </main>
    </div>
  );
};

export default ProjectPage;
