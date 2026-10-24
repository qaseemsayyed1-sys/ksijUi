import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        width: '44px', height: '44px', borderRadius: '50%',
        background: 'var(--bg-tertiary)', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        border: '1px solid var(--border-color)', transition: 'var(--transition)',
        color: 'var(--accent-gold)',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'rotate(20deg)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'rotate(0deg)'}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}