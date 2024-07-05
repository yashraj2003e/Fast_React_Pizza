import CreateUser from '../features/user/CreateUser';
import { useSelector } from 'react-redux';
import Button from './Button';
function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 flex h-[50dvh] flex-col items-center justify-center px-8 text-center sm:my-16">
      <h1 className="mb-8 text-2xl font-semibold text-stone-700 md:text-3xl">
        The best pizza
        <br />
        <span className="font-bold text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!username && <CreateUser />}
      {username && (
        <Button to="/menu" type="secondary">
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
