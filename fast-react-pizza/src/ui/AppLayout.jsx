import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === 'loading';
  return (
    <>
      <div className="grid h-screen grid-rows-[auto_1fr]">
        {isLoading && <Loader />}
        <Header />
        <div className="overflow-scroll">
          <main className="mx-auto max-w-3xl overflow-scroll">
            <Outlet />
          </main>
        </div>
      </div>
      <CartOverview />
    </>
  );
}

export default AppLayout;
