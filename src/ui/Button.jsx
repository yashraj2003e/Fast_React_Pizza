import { Link } from 'react-router-dom';

function Button({ children, disabled, onClick, to, type }) {
  const secondary =
    'inline-block rounded-full border-2 font-semibold border-stone-300 uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 hover:text-stone-800 hover:text-stone-800 focus:text-stone-800';

  if (type === 'secondary') {
    return (
      <Link className={secondary} to={to} disabled={disabled} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const cls = `rounded-full bg-yellow-400 px-[25px] py-[9px] font-semibold uppercase tracking-wider text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed disabled:bg-red-500 sm:px-6 sm:py-4 ${type === 'small' ? 'text-xs py-[12px]' : ''}`;

  let round = cls;

  round += ` text-xs md:text-base`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={type === 'round' ? round : cls}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
