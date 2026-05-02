import Button from "./Button";
import Container from "./Container";
import TerminalBox from "./TerminalBox";

export default function AIHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-24 pb-32 lg:pt-36 lg:pb-40">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          {/* Left Column: Tech Stack & Intro */}
          <div className="max-w-2xl text-neutral-50">
            <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-sm font-medium text-neutral-300 backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Available for new opportunities
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
              Building Intelligent Systems & Agentic Workflows.
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-400">
              I specialize in robust backend architectures, distributed systems, and integrating Large Language Models to solve complex problems.
            </p>
            
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Go", "TypeScript", "PyTorch", "LangChain", "Docker", "Kubernetes", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2 text-sm text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="#" variant="secondary" className="w-full sm:w-auto">
                Download Resume
              </Button>
              <Button href="#" variant="outline" className="w-full sm:w-auto border-neutral-700 text-white hover:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-800">
                View GitHub
              </Button>
            </div>
          </div>

          {/* Right Column: TerminalBox */}
          <div className="w-full max-w-lg lg:max-w-none mx-auto">
            <TerminalBox />
          </div>
        </div>
      </Container>
    </section>
  );
}
