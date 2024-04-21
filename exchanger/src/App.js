import { createMemoryRouter, RouterProvider } from "react-router";
import Main from "./pages/main_page";
import ProfilePage from "./pages/profile_pafe";
import MainContainerPage from "./components/main_container_page";
import MasterMain from "./pages/master_balance_main";
import MasterStats from "./pages/master_stats";
import StandartMain from "./pages/standart_main";
import StandartStats from "./pages/standart_stats";
import ReferalMain from "./pages/referral_main";
import ReferalStats from "./pages/referal_stats";
import CalcIncome from "./pages/calc_income";
import StandartDeposit1 from "./pages/standart_deposit1";

const router = createMemoryRouter([
  { path: "/", element: <Main /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/master_main", element: <MasterMain /> },
  { path: "/master_stats", element: <MasterStats /> },
  { path: "/standart_main", element: <StandartMain /> },
  { path: "/standart_stats", element: <StandartStats /> },
  { path: "/referal_main", element: <ReferalMain /> },
  { path: "/referal_stats", element: <ReferalStats /> },
  { path: "/calc_income", element: <CalcIncome /> },
  { path: "/st_deposit_1", element: <StandartDeposit1 /> },
]);

const App = () => {
  return (
    <MainContainerPage>
      <RouterProvider router={router} />;
    </MainContainerPage>
  );
};

export default App;
