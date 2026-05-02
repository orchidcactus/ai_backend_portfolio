"use client";

import { useEffect, useState } from "react";

const outputLines = [
  "[INFO] Booting system...",
  "[INFO] Loading neural pathways...",
  "[SUCCESS] Connected to cluster.",
  "> Initiating agentic workflows...",
  "[OK] Agent 1: Data parsing complete.",
  "[OK] Agent 2: Semantic analysis active.",
  "> Ready for input."
];

export default function TerminalBox() {
  const [lines, setLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < outputLines.length) {
        setLines((prev) => [...prev, outputLines[currentLine]]);
        currentLine++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-xl bg-neutral-950 font-mono text-sm shadow-2xl ring-1 ring-white/10">
      <div className="flex bg-neutral-900 px-4 py-3 items-center gap-2 border-b border-neutral-800">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="ml-2 text-xs text-neutral-500">user@ai-system:~</div>
      </div>
      <div className="p-6 text-green-400 min-h-[250px]">
        {lines.map((line, i) => (
          <div key={i} className="mb-2 opacity-90">
            {line}
          </div>
        ))}
        {isTyping && (
          <div className="animate-pulse w-2 h-4 bg-green-400 inline-block align-middle ml-1"></div>
        )}
        {!isTyping && (
          <div className="flex">
            <span className="mr-2">&gt;</span>
            <div className="animate-pulse w-2 h-4 bg-green-400 inline-block align-middle mt-1"></div>
          </div>
        )}
      </div>
    </div>
  );
}
