import { Link } from 'react-router-dom';
import SearchOder from '../features/order/SearchOrder';
import { useSelector } from 'react-redux';
function Header() {
  const username = useSelector((state) => state.user.username);
  return (
    <header className="flex items-center justify-between border-b-4 border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="text-sm tracking-widest sm:text-base">
        Fast React Pizza Co.
      </Link>
      <SearchOder />
      {username && (
        <p className="hidden text-sm font-semibold md:block">{username}</p>
      )}
    </header>
  );
}

export default Header;
