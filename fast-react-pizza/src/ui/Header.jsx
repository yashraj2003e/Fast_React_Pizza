import { Link } from 'react-router-dom';
import SearchOder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="flex items-center justify-between border-b-4 border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOder />
      <p className="hidden text-sm font-semibold md:block">Jonas</p>
    </header>
  );
}

export default Header;
