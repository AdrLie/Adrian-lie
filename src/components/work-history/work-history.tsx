"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  X,
  Maximize2,
  Minimize2,
  Copy,
  Check,
} from "lucide-react";
import { useMobile } from "./hooks/use-mobile";

// Work history data
const workHistory = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2023 – Present",
    description:
      "Building responsive UI and integrating APIs using React, TypeScript, and Tailwind CSS.",
    skills: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    color: "#10b981",
  },
  {
    role: "Web Developer Intern",
    company: "Creative Agency",
    period: "Jul 2022 – Dec 2022",
    description:
      "Assisted in developing client websites and optimizing performance with modern frontend tools.",
    skills: ["HTML/CSS", "JavaScript", "WordPress", "UI/UX"],
    color: "#0ea5e9",
  },
];

const commands = [
  { name: "help", description: "Show available commands" },
  { name: "ls", description: "List work experiences" },
  {
    name: "view",
    description: "View details of a specific role (e.g., view 1)",
  },
  { name: "skills", description: "List all skills" },
  { name: "clear", description: "Clear the terminal" },
  { name: "about", description: "About this developer" },
];
const aboutMe = `I'm a passionate frontend developer with experience in building modern, responsive web applications. I specialize in React, TypeScript, and modern CSS frameworks.`;

type TerminalLine = {
  id: number;
  type: "command" | "response" | "error" | "welcome" | "skills" | "job";
  content: string | React.ReactNode;
};

export function WorkHistory() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [lineCount, setLineCount] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useMobile();

  // Initialize terminal with welcome message
  useEffect(() => {
    const initialLines: TerminalLine[] = [
      {
        id: 0,
        type: "welcome",
        content: (
          <div className="space-y-1 text-zinc-300 pb-2">
            <p className="text-emerald-400 font-semibold">
              Welcome to the interactive work history terminal!
            </p>
            <p>
              Type <span className="text-emerald-400 font-mono">help</span> to
              see available commands.
            </p>
          </div>
        ),
      },
    ];
    setLines(initialLines);
    setLineCount(1);

    // Focus the input on load
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Auto-scroll to bottom when lines change
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Focus input when clicking on terminal
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Handle command execution
  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const cmdParts = trimmedCmd.split(" ");
    const mainCmd = cmdParts[0];
    const arg = cmdParts[1];

    // Add the command to terminal
    const newLineId = lineCount;
    setLines([
      ...lines,
      {
        id: newLineId,
        type: "command",
        content: `$ ${cmd}`,
      },
    ]);
    setLineCount(lineCount + 1);

    // Process command
    switch (mainCmd) {
      case "help":
        showHelp();
        break;
      case "ls":
        listJobs();
        break;
      case "view":
        viewJob(arg);
        break;
      case "skills":
        listSkills();
        break;
      case "clear":
        clearTerminal();
        break;
      case "about":
        showAbout();
        break;
      default:
        showError(mainCmd);
    }

    setInput("");
  };

  // Show help command
  const showHelp = () => {
    setLines((prevLines) => [
      ...prevLines,
      {
        id: lineCount + 1,
        type: "response",
        content: (
          <div className="space-y-2 py-2">
            <p className="text-emerald-400 font-semibold">
              Available Commands:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-4">
              {commands.map((cmd, index) => (
                <div key={index} className="flex">
                  <span className="text-emerald-400 font-mono w-16">
                    {cmd.name}
                  </span>
                  <span className="text-zinc-400">{cmd.description}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ]);
    setLineCount(lineCount + 2);
  };

  // List jobs command
  const listJobs = () => {
    setLines((prevLines) => [
      ...prevLines,
      {
        id: lineCount + 1,
        type: "response",
        content: (
          <div className="space-y-2 py-2">
            <p className="text-emerald-400 font-semibold">Work Experience:</p>
            {workHistory.map((job, index) => (
              <div key={index} className="flex items-center">
                <span className="text-emerald-400 font-mono w-8">
                  {index + 1}.
                </span>
                <span className="font-medium">{job.role}</span>
                <span className="text-zinc-400 ml-2">@ {job.company}</span>
                <span className="text-zinc-500 ml-2 text-xs">
                  ({job.period})
                </span>
              </div>
            ))}
            <p className="text-zinc-400 text-sm mt-1">
              Type{" "}
              <span className="text-emerald-400 font-mono">view [number]</span>{" "}
              to see details
            </p>
          </div>
        ),
      },
    ]);
    setLineCount(lineCount + 2);
  };

  // View job command
  const viewJob = (arg: string) => {
    const jobIndex = parseInt(arg) - 1;

    if (isNaN(jobIndex) || jobIndex < 0 || jobIndex >= workHistory.length) {
      setLines((prevLines) => [
        ...prevLines,
        {
          id: lineCount + 1,
          type: "error",
          content: `Error: Invalid job number. Type 'ls' to see available jobs.`,
        },
      ]);
      setLineCount(lineCount + 2);
      return;
    }

    const job = workHistory[jobIndex];

    setLines((prevLines) => [
      ...prevLines,
      {
        id: lineCount + 1,
        type: "job",
        content: (
          <div
            className="space-y-3 py-2 px-3 border-l-2 my-2"
            style={{ borderColor: job.color }}
          >
            <div>
              <h3
                className="text-lg font-semibold"
                style={{ color: job.color }}
              >
                {job.role}
              </h3>
              <p className="text-zinc-300">{job.company}</p>
              <p className="text-zinc-500 text-sm">{job.period}</p>
            </div>

            <p className="text-zinc-300">{job.description}</p>

            <div>
              <p className="text-zinc-400 text-sm mb-1">Skills:</p>
              <div className="flex flex-wrap gap-1">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: `${job.color}22`,
                      color: job.color,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ),
      },
    ]);
    setLineCount(lineCount + 2);
  };

  // List skills command
  const listSkills = () => {
    // Extract and deduplicate all skills
    const allSkills = Array.from(
      new Set(workHistory.flatMap((job) => job.skills))
    ).sort();

    setLines((prevLines) => [
      ...prevLines,
      {
        id: lineCount + 1,
        type: "skills",
        content: (
          <div className="space-y-2 py-2">
            <p className="text-emerald-400 font-semibold">Skills:</p>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-full bg-zinc-700 text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ),
      },
    ]);
    setLineCount(lineCount + 2);
  };

  // Clear terminal command
  const clearTerminal = () => {
    setLines([]);
  };

  // Show about command
  const showAbout = () => {
    setLines((prevLines) => [
      ...prevLines,
      {
        id: lineCount + 1,
        type: "response",
        content: (
          <div className="space-y-2 py-2">
            <p className="text-emerald-400 font-semibold">About Me:</p>
            <p className="text-zinc-300">{aboutMe}</p>
          </div>
        ),
      },
    ]);
    setLineCount(lineCount + 2);
  };

  // Show error for unknown command
  const showError = (cmd: string) => {
    setLines((prevLines) => [
      ...prevLines,
      {
        id: lineCount + 1,
        type: "error",
        content: `Command not found: ${cmd}. Type 'help' to see available commands.`,
      },
    ]);
    setLineCount(lineCount + 2);
  };

  // Handle input submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
    }
  };

  // Handle copy to clipboard
  const handleCopy = () => {
    const text = lines
      .map((line) => {
        if (typeof line.content === "string") {
          return line.content;
        }
        return `[Content displayed in terminal]`;
      })
      .join("\n");

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section
      className={`py-12 md:py-24 bg-zinc-900 text-white ${
        isFullscreen ? "fixed inset-0 z-50" : ""
      }`}
    >
      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-8 ${
          isFullscreen ? "h-full" : ""
        }`}
      >
        {!isFullscreen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work Experience
            </h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto mb-4 md:mb-8" />
            <p className="text-base md:text-lg text-zinc-300">
              Explore my professional journey through this interactive terminal
            </p>
          </motion.div>
        )}

        <div
          className={`mx-auto rounded-lg overflow-hidden border border-zinc-700 shadow-xl flex flex-col ${
            isFullscreen ? "h-full" : "max-w-4xl"
          }`}
        >
          {/* Terminal header */}
          <div className="bg-zinc-800 px-4 py-2 flex items-center justify-between border-b border-zinc-700">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium">work-history.terminal</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleCopy}
                className="p-1 rounded hover:bg-zinc-700 transition-colors"
                aria-label="Copy terminal content"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-1 rounded hover:bg-zinc-700 transition-colors"
                aria-label={
                  isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
                }
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
              {isFullscreen && (
                <button
                  onClick={toggleFullscreen}
                  className="p-1 rounded hover:bg-zinc-700 transition-colors"
                  aria-label="Close terminal"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Terminal content */}
          <div
            ref={terminalRef}
            className="bg-zinc-900 p-4 flex-1 overflow-y-auto font-mono text-sm"
            onClick={focusInput}
            style={{ height: isFullscreen ? "calc(100% - 40px)" : "400px" }}
          >
            <AnimatePresence>
              {lines.map((line) => (
                <motion.div
                  key={line.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`mb-2 ${
                    line.type === "command"
                      ? "text-zinc-200"
                      : line.type === "error"
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {line.content}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-emerald-400 mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-zinc-200 caret-emerald-400"
                aria-label="Terminal input"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </div>
        </div>

        {!isFullscreen && !isMobile && (
          <div className="max-w-4xl mx-auto mt-4 text-center text-zinc-500 text-sm">
            <p>
              Type <span className="text-emerald-400 font-mono">help</span> to
              see available commands
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
