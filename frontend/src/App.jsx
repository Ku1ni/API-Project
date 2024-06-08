import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import * as sessionActions from './store/session';
import Landing from './components/Landing/Landing';
import SpotsDetails from './components/Spots/SpotsDetails';
import CreateSpot from './components/Spots/CreateSpot';
import ManageSpot from './components/Spots/ManageSpot';
import UpdateSpot from './components/Spots/UpdateSpot';
function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Landing />
  // },
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/spots/:spotId',
        element: <SpotsDetails />
      },
      {
        path: '/:spotId/images',
        element: <SpotsDetails />
      },
      {
        path: "spots/new",
        element: <CreateSpot />,
      },
      {
        path: "/manage",
        element: <ManageSpot />,
      },
      {
        path: "spots/:spotId/update-spot",
        element: <UpdateSpot />,
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
