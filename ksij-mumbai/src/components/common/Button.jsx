export default function Button({ children, variant = 'primary', href, onClick, style }) {
  const styles = {
    primary: {
      background: 'var(--accent-gold)',
      color: '#fff',
      padding: '14px 32px',
      borderRadius: '50px',
      fontWeight: 600,
      fontSize: '15px',
      letterSpacing: '0.02em',
      transition: 'var(--transition)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      padding: '14px 32px',
      borderRadius: '50px',
      fontWeight: 600,
      fontSize: '15px',
      border: '2px solid var(--accent-gold)',
      letterSpacing: '0.02em',
      transition: 'var(--transition)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    },
  };

  const Comp = href ? 'a' : 'button';

  return (
    <Comp
      href={href}
      onClick={onClick}
      style={{ ...styles[variant], ...style }}
      onMouseEnter={e => {
        if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-gold-dark)';
        if (variant === 'outline') { e.currentTarget.style.background = 'var(--accent-gold)'; e.currentTarget.style.color = '#fff'; }
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseLeave={e => {
        if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-gold)';
        if (variant === 'outline') { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-primary)'; }
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {children}
    </Comp>
  );
}