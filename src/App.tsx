import  PlayGround  from './components/PlayGround'
import  Settings  from './components/Settings'
import {
  Route,
  createHashRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path="" element={<PlayGround />} />
        <Route path="settings" element={<Settings />} />
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App