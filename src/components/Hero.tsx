import Button from "./Button";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
      {/* Background decorations */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column: Text */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl dark:text-white">
              Engineering intelligence & automation.
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              I specialize in designing scalable AI backend systems and building robust automation solutions that transform small businesses.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/ai-engineer" variant="primary" className="w-full sm:w-auto">
                Hire for AI Engineering
              </Button>
              <Button href="/automation" variant="outline" className="w-full sm:w-auto">
                Automation Services
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative w-full rounded-2xl bg-neutral-900/5 p-2 ring-1 ring-inset ring-neutral-900/10 dark:bg-white/5 dark:ring-white/10 lg:rounded-3xl lg:p-4">
              <div className="overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-neutral-950">
                <div className="flex bg-neutral-100/80 px-4 py-3 dark:bg-neutral-900/80 border-b border-neutral-200/50 dark:border-neutral-800/50 items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-6 font-mono text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">systems</span> = [</p>
                  <p className="ml-4">&quot;AI Model Serving&quot;,</p>
                  <p className="ml-4">&quot;Agentic Workflows&quot;,</p>
                  <p className="ml-4">&quot;Dental Clinic Automation&quot;,</p>
                  <p className="ml-4">&quot;Scalable Microservices&quot;</p>
                  <p>];</p>
                  <br />
                  <p><span className="text-purple-600 dark:text-purple-400">function</span> <span className="text-blue-600 dark:text-blue-400">build</span>() &#123;</p>
                  <p className="ml-4">systems.forEach(optimize);</p>
                  <p className="ml-4">systems.forEach(scale);</p>
                  <p>&#125;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
