import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/50 dark:border-neutral-800/50 bg-white dark:bg-neutral-950">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row text-sm text-neutral-500 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">Twitter</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">GitHub</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">LinkedIn</a>
        </div>
      </Container>
    </footer>
  );
}
