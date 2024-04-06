import  PlayGround  from './components/PlayGround'
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route
        index
        element={<PlayGround />}
      />
  ));

  return <RouterProvider router={router} />;
}

export default App