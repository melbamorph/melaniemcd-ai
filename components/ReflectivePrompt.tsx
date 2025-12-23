'use client';

import { useEffect, useState } from 'react';

const PROMPTS = [
  'What if government systems were designed to be delightful?',
  'What if public services felt easier than ordering takeout?',
  'What if permits and forms could be completed without friction?',
  'What if civic tech invited play, not frustration?',
  'What if gov interfaces had better user experience than the private sector?',
  'What if the most "serious" work also made room for wonder?',
];

const REQUIRED_PROMPT = 'What if government systems were designed to be delightful?';
const STORAGE_KEY = 'reflectivePromptLast';

function pickPrompt(lastPrompt: string | null) {
  const available = PROMPTS.filter((prompt) => prompt !== lastPrompt);
  const pool = available.length > 0 ? available : PROMPTS;
  return pool[Math.floor(Math.random() * pool.length)];
}

export default function ReflectivePrompt() {
  const [prompt, setPrompt] = useState(REQUIRED_PROMPT);

  useEffect(() => {
    try {
      const lastPrompt = window.localStorage.getItem(STORAGE_KEY);
      const nextPrompt = pickPrompt(lastPrompt);
      window.localStorage.setItem(STORAGE_KEY, nextPrompt);
      setPrompt(nextPrompt);
    } catch (error) {
      setPrompt(REQUIRED_PROMPT);
    }
  }, []);

  return (
    <p className="reflective-prompt text-base sm:text-lg text-accent-300 font-medium italic">
      &ldquo;{prompt}&rdquo;
    </p>
  );
}
