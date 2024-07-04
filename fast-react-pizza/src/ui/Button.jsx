import { Link } from 'react-router-dom';

function Button({ children, disabled, onClick, to }) {
  if (to) {
    return (
      <Link
        to={to}
        className="rounded-full bg-yellow-400 px-[25px] py-[9px] font-semibold uppercase tracking-wider text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-red-500 sm:px-6 sm:py-4"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className="rounded-full bg-yellow-400 px-[25px] py-[9px] font-semibold uppercase tracking-wider text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-red-500 sm:px-6 sm:py-4"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
