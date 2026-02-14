import MainNavBar from '@/components/Navigation/MainNavbar';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <>
      <MainNavBar />
      <Outlet />
    </>
  )
}

export default App;
