import Button from "./Button";
import Container from "./Container";

export default function AutomationHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 pt-24 pb-32 lg:pt-36 lg:pb-40 dark:bg-neutral-950">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm font-medium text-neutral-600 mb-6 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
            Stop Doing Manual Work
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-neutral-900 dark:text-white">
            Reclaim your time with <span className="text-blue-600 dark:text-blue-500">intelligent automation.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            From dental clinics to e-commerce, I build custom automated systems that handle your repetitive tasks, organize your data, and let you focus on growing your business.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#consultation" variant="primary" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white border-blue-600">
              Book a Free Consultation
            </Button>
            <Button href="#use-cases" variant="outline" className="w-full sm:w-auto">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Abstract Visualization of Automation */}
        <div className="mt-16 lg:mt-24 max-w-5xl mx-auto">
          <div className="rounded-2xl bg-white/50 backdrop-blur-sm p-4 ring-1 ring-neutral-200 shadow-xl dark:bg-neutral-900/50 dark:ring-neutral-800">
            <div className="flex flex-col md:flex-row items-center gap-8 justify-center p-8">
              {/* Input */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex -space-x-4">
                  <div className="h-16 w-16 rounded-full bg-neutral-200 border-4 border-white dark:bg-neutral-800 dark:border-neutral-900 flex items-center justify-center shadow-sm text-2xl">📧</div>
                  <div className="h-16 w-16 rounded-full bg-neutral-200 border-4 border-white dark:bg-neutral-800 dark:border-neutral-900 flex items-center justify-center shadow-sm text-2xl">📝</div>
                  <div className="h-16 w-16 rounded-full bg-neutral-200 border-4 border-white dark:bg-neutral-800 dark:border-neutral-900 flex items-center justify-center shadow-sm text-2xl">📞</div>
                </div>
                <span className="text-sm font-medium text-neutral-500">Messy Inputs</span>
              </div>
              
              {/* Processing */}
              <div className="hidden md:flex items-center">
                <div className="h-0.5 w-16 bg-gradient-to-r from-neutral-300 to-blue-500 dark:from-neutral-700 dark:to-blue-500 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                </div>
              </div>
              <div className="md:hidden flex items-center rotate-90">
                <div className="h-0.5 w-16 bg-gradient-to-r from-neutral-300 to-blue-500 dark:from-neutral-700 dark:to-blue-500 relative"></div>
              </div>

              {/* AI Engine */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full animate-pulse"></div>
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 p-1 shadow-lg relative z-10 rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="h-full w-full bg-neutral-950 rounded-xl flex items-center justify-center flex-col gap-2">
                     <span className="text-2xl">⚡</span>
                     <span className="text-[10px] font-mono text-blue-400 font-semibold tracking-wider">AI AGENT</span>
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="hidden md:flex items-center">
                <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-green-500 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
              </div>
              <div className="md:hidden flex items-center rotate-90">
                <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-green-500 relative"></div>
              </div>

              {/* Result */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-md border border-neutral-100 dark:border-neutral-700 w-40">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs dark:bg-green-900/30 dark:text-green-400">✓</div>
                    <div className="h-2 w-16 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs dark:bg-green-900/30 dark:text-green-400">✓</div>
                    <div className="h-2 w-20 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
                  </div>
                </div>
                <span className="text-sm font-medium text-neutral-500">Structured Results</span>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
