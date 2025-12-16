'use client';

import { useState, useEffect, useCallback } from 'react';

const themes = [
  { name: 'pink', color: '#ec4899', label: 'Pink' },
  { name: 'amber', color: '#fbbf24', label: 'Gold' },
  { name: 'cyan', color: '#06b6d4', label: 'Cyan' },
  { name: 'emerald', color: '#10b981', label: 'Green' },
];

export function ThemePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('pink');
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((themeName: string, dark: boolean) => {
    const theme = themes.find(t => t.name === themeName) || themes[0];
    const root = document.documentElement;
    
    root.style.setProperty('--color-accent', theme.color);
    
    if (dark) {
      root.style.setProperty('--color-surface', '#0a0a0f');
      root.style.setProperty('--color-surface-elevated', '#12121a');
      root.classList.remove('light-mode');
      root.classList.add('dark-mode');
    } else {
      root.style.setProperty('--color-surface', '#f8fafc');
      root.style.setProperty('--color-surface-elevated', '#ffffff');
      root.classList.remove('dark-mode');
      root.classList.add('light-mode');
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('accent-theme') || 'pink';
    const savedMode = localStorage.getItem('color-mode') || 'dark';
    setActiveTheme(savedTheme);
    setIsDark(savedMode === 'dark');
    applyTheme(savedTheme, savedMode === 'dark');
  }, [applyTheme]);

  const handleThemeChange = (themeName: string) => {
    setActiveTheme(themeName);
    localStorage.setItem('accent-theme', themeName);
    applyTheme(themeName, isDark);
  };

  const handleModeToggle = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('color-mode', newMode ? 'dark' : 'light');
    applyTheme(activeTheme, newMode);
  };

  if (!mounted) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-surface-100/50">
        <svg className="h-4 w-4 text-muted-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-surface-100/50 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-surface-200/50"
        aria-label="Open theme picker"
        type="button"
      >
        <svg className="h-4 w-4 text-muted-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="theme-picker-panel">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-400">Theme</span>
              <button
                onClick={handleModeToggle}
                type="button"
                className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-muted-300 transition-all hover:border-white/20 hover:text-white"
              >
                {isDark ? (
                  <>
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                    Light
                  </>
                ) : (
                  <>
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    Dark
                  </>
                )}
              </button>
            </div>
            
            <div className="flex gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme.name)}
                  type="button"
                  className={`theme-swatch ${activeTheme === theme.name ? 'ring-2 ring-white/50 ring-offset-2 ring-offset-surface-100' : ''}`}
                  style={{ backgroundColor: theme.color }}
                  aria-label={`Select ${theme.label} theme`}
                  title={theme.label}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
