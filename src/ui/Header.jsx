import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

const Header = () => {
  return (
    <header className="uppercse font-roboto flex items-center justify-between border-b bg-yellow-400 px-4 py-3 sm:px-6">
      <Link to="/" className="tracking-[3px]">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
