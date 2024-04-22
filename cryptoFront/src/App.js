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
import StandartDeposit2 from "./pages/standart_deposit2";
import StandartDeposit3 from "./pages/standart_deposit3";
import StandartWithDraw1 from "./pages/standart_withdraw1";
import StandartWithDraw2 from "./pages/standart_withdraw2";
import MasterDeposit1 from "./pages/master_deposit1";
import MasterDeposit2 from "./pages/master_deposit2";
import MasterChoose from "./pages/master_deposit_choose";
import MasterDeposit3 from "./pages/master_deposit3";
import MasterWithdrawList from "./pages/master_withdraw_list";
import MasterWithDraw2 from "./pages/master_withdraw2";
import MasterWithDraw3 from "./pages/master_withdraw3";
import MasterWithdraw4 from "./pages/master_withdraw4";

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
  { path: "/st_deposit_2", element: <StandartDeposit2 /> },
  { path: "/st_deposit_3", element: <StandartDeposit3 /> },
  { path: "/st_withdraw_1", element: <StandartWithDraw1 /> },
  { path: "/st_withdraw_2", element: <StandartWithDraw2 /> },
  { path: "/master_deposit1", element: <MasterDeposit1 /> },
  { path: "/master_choose", element: <MasterChoose /> },
  { path: "/master_deposit2", element: <MasterDeposit2 /> },
  { path: "/master_deposit3", element: <MasterDeposit3 /> },
  { path: "/master_withdraw1", element: <MasterWithdrawList /> },
  { path: "/master_withdraw2", element: <MasterWithDraw2 /> },
  { path: "/master_withdraw3", element: <MasterWithDraw3 /> },
  { path: "/master_withdraw4", element: <MasterWithdraw4 /> },
]);

const App = () => {
  return (
    <MainContainerPage>
      <RouterProvider router={router} />;
    </MainContainerPage>
  );
};

export default App;
