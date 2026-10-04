import { ThemeToggle } from "@/components/theme-toggle";
import { LINKS, PROJECTS, SKILL_GROUPS, SPECIALTIES } from "@/lib/content";

function Eyebrow({ en, he }: { en: string; he: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
      {en}
      <span aria-hidden="true"> · </span>
      <span lang="he" dir="rtl" className="tracking-normal text-accent">
        {he}
      </span>
    </p>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4">
        <a href="#top" className="font-display text-lg font-medium whitespace-nowrap">
          Yossi Mendelovitz
        </a>
        <div className="flex items-center gap-5">
          <nav aria-label="Sections" className="flex items-center gap-5 font-mono text-xs text-muted">
            <a href="#about" className="transition-colors hover:text-accent">
              About
            </a>
            <a href="#projects" className="transition-colors hover:text-accent">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-accent">
              Contact
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="rise">
        <Eyebrow en="Full-Stack Developer — Jerusalem, Israel" he="ירושלים" />
      </div>
      <h1 className="rise mt-6 font-display text-[clamp(2.5rem,7.5vw,5.25rem)] leading-[1.08] font-medium [--rise-delay:80ms]">
        <span className="block">Products that read</span>
        <span className="block">left-to-right,</span>
        <span lang="he" dir="rtl" className="block text-accent">
          ומימין לשמאל.
        </span>
        <span className="sr-only">— and from right to left.</span>
      </h1>
      <p className="rise mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg [--rise-delay:160ms]">
        Three years of building web and mobile products end to end — from
        Hebrew-first consumer apps to industrial Modbus systems. TypeScript,
        React, and Node.js are home; Java and Spring when the job goes deeper.
      </p>
      <div className="rise mt-10 flex flex-wrap items-center gap-3 [--rise-delay:240ms]">
        <a
          href="#projects"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
        >
          View projects
        </a>
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          GitHub
          <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-8 border-t border-line">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
        <Eyebrow en="About" he="אודות" />
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-medium md:text-4xl">
          Both sides of the stack, both directions of the page.
        </h2>
        <div className="mt-12 grid gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              For the last three years I&apos;ve built products end to end:
              typed APIs with tRPC and Prisma, realtime features over
              WebSockets, React and React Native up front, Node.js or Spring
              Boot behind.
            </p>
            <p>
              My home turf is Hebrew-first product engineering. Most software
              treats right-to-left as a patch applied at the end; I design for
              it from the first commit — layout, typography, data, and search.
            </p>
            <p>
              I&apos;ve also worked closer to the wire, building a Modbus
              TCP/RTU transport layer for an industrial IoT platform, and I
              work AI-assisted every day — agents and code generation as
              ordinary tools, with the review discipline to match.
            </p>
          </div>
          <ul className="space-y-6">
            {SPECIALTIES.map((s) => (
              <li key={s.title} className="border-t border-line pt-5 first:border-t-0 first:pt-0">
                <h3 className="text-sm font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Toolbox</h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label}>
                <h4 className="text-sm font-semibold">{group.label}</h4>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-line bg-surface px-2 py-1 font-mono text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-8 border-t border-line">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
        <Eyebrow en="Selected work" he="עבודות נבחרות" />
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-medium md:text-4xl">
          From consumer mobile to the factory floor.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-medium">{project.name}</h3>
                  {project.href ? (
                    <span className="mt-1.5 text-muted transition-colors group-hover:text-accent">
                      <ArrowUpRight />
                    </span>
                  ) : null}
                </div>
                {project.note ? (
                  <p className="mt-2 font-mono text-xs text-accent">{project.note}</p>
                ) : null}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded border border-line px-2 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </>
            );
            const cardClass = `flex flex-col rounded-md border border-line bg-surface p-6 transition-colors${
              project.featured ? " sm:col-span-2" : ""
            }`;
            return project.href ? (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${cardClass} hover:border-accent`}
              >
                {inner}
              </a>
            ) : (
              <article key={project.name} className={`${cardClass} sm:col-span-2`}>
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-8 border-t border-line">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
        <Eyebrow en="Contact" he="יצירת קשר" />
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-medium md:text-4xl">
          Open to my next full-stack role.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          If you&apos;re building something that has to work in Hebrew as well
          as it works in English — or just need an engineer who ships end to
          end — write to me.
        </p>
        <a
          href={`mailto:${LINKS.email}`}
          className="mt-10 inline-block break-all font-display text-2xl font-medium underline decoration-accent/40 decoration-2 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent sm:text-4xl md:text-5xl"
        >
          {LINKS.email}
        </a>
        <div className="mt-10 flex flex-wrap gap-6 font-mono text-sm">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
          >
            GitHub
            <ArrowUpRight />
          </a>
          {LINKS.linkedin ? (
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
            >
              LinkedIn
              <ArrowUpRight />
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-6 font-mono text-xs text-muted">
        <p>
          © {new Date().getFullYear()} Yossi Mendelovitz · Jerusalem ·{" "}
          <span lang="he">ירושלים</span>
        </p>
        <p>Next.js · Tailwind CSS · ready for Vercel</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div id="top">
        <Header />
        <main id="main">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
