import Container from "./Container";

const useCases = [
  {
    title: "Customer Support Triage",
    description: "Automatically categorize and draft responses to incoming emails, escalating only the complex issues to human staff.",
    icon: "📫",
    metrics: "Saves ~15 hours/week",
  },
  {
    title: "Lead Generation & CRM Entry",
    description: "Extract data from forms, social media, and emails and seamlessly sync it into your CRM without manual data entry.",
    icon: "🧲",
    metrics: "100% data accuracy",
  },
  {
    title: "Invoice & Expense Processing",
    description: "Use vision AI to read receipts and invoices, match them to purchase orders, and draft accounting entries.",
    icon: "🧾",
    metrics: "Accelerates billing by 3x",
  },
  {
    title: "Appointment Scheduling",
    description: "An AI assistant that talks to your clients over SMS or email to find a time and books it directly onto your calendar.",
    icon: "📅",
    metrics: "Eliminates back-and-forth",
  },
];

export default function AutomationUseCases() {
  return (
    <section id="use-cases" className="py-24 bg-white dark:bg-neutral-900">
      <Container>
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
            Common workflows we can automate
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            If you do a task on a computer more than 5 times a week, chances are an AI agent can do it for you instantly. Here are some examples of what we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="flex flex-col rounded-2xl bg-neutral-50 dark:bg-neutral-950 p-8 border border-neutral-100 dark:border-neutral-800 transition-shadow hover:shadow-lg">
              <div className="text-4xl mb-6">{useCase.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                {useCase.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 flex-1 mb-6">
                {useCase.description}
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-500/20">
                  {useCase.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
