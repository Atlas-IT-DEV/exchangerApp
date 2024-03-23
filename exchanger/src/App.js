import { createMemoryRouter, RouterProvider } from "react-router";
import Main from "./pages/main_page";
import ProfilePage from "./pages/profile_pafe";
import MainContainerPage from "./components/main_container_page";

const router = createMemoryRouter([
  { path: "/", element: <Main /> },
  { path: "/profile", element: <ProfilePage /> },
]);

const App = () => {
  return (
    <MainContainerPage>
      <RouterProvider router={router} />;
    </MainContainerPage>
  );
};

export default App;
