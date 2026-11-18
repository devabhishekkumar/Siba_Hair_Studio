'use client';

import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

const storageKey = 'studio-a1-theme';
const themeEvent = 'studio-a1-theme-change';

function applyTheme(theme: string) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#15251d' : '#f5f2e9');
  window.dispatchEvent(new Event(themeEvent));
}

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) {
      applyTheme(event.newValue === 'dark' ? 'dark' : 'light');
    }
  };
  window.addEventListener(themeEvent, onChange);
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(themeEvent, onChange);
    window.removeEventListener('storage', onStorage);
  };
}

function getTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'light');
  const isLight = theme === 'light';
  const label = isLight ? 'Switch to deep green and gold theme' : 'Switch to cream and gold theme';

  function toggleTheme() {
    const next = isLight ? 'dark' : 'light';
    applyTheme(next);
    try { localStorage.setItem(storageKey, next); } catch { /* The switch still works when storage is unavailable. */ }
  }

  return <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={label} title={label}>
    {isLight ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}
    <span>{isLight ? 'Forest' : 'Cream'}</span>
  </button>;
}
