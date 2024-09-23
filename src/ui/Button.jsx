import { Link } from 'react-router-dom';

const Button = ({ children, disabled, to, type, onClick }) => {
  const base =
    'inline-block rounded-full bg-yellow-400 text-sm px-4 py-3 font-bold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed sm:px-6 sm:py-4';
  const styles = {
    primary: base + 'px-4 py-3 sm:px-6 sm:py-4',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'inline-block bg-transparent border-2 text-sm border-stone-300 rounded-full bg-white-400 px-4 py-3 font-bold uppercase tracking-wide text-stone-800 transition-colors duration-300  hover:bg-red-500 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed sm:px-6 sm:py-4 px-4 py-3 sm:px-6 sm:py-4',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
