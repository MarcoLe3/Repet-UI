import MainNavBar from "@/components/Navigation/MainNavBar";
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <>
      <MainNavBar />
      <Outlet />
    </>
  );
}

export default App;
