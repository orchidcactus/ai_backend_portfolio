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
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl dark:text-white">
              Hi, My name is Maitri Patel.
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600 dark:text-neutral-300">
              I&apos;m an AI backend developer and an automation consultant.
            </p>
            <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8">
              <Button href="/ai-engineer" variant="primary" className="w-full sm:w-auto">
                Are you a recruiter looking to hire?
              </Button>
              <Button href="/automation" variant="outline" className="w-full sm:w-auto">
                Are you a small business looking to automate?
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
