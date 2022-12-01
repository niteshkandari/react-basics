import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HttpApiServiceProvider } from "../src/core/facade/Htpp-service";
import ProtectedRoute from "./core/ProtectedRoute";
import MemoComponent from "./components/UseMemo/Index";
const HomePage = React.lazy(() => import("./components/HomePage/Home"));
const LoginPage = React.lazy(() => import("./components/LoginPage/Login"));
const UserInfoDetailPage = React.lazy(() =>
  import("./components/UserInfoDetailpage/UserInfoDetail")
);
const UserDataByIdPage = React.lazy(() => import("./components/UserData/UserDataById"));
const CallbackComponent = React.lazy (() => import("./components/UseCallback/Index"));

const App = () => {
 
  return (
    <div className="h-screen overflow-y-scroll">
      <HttpApiServiceProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={"/auth/login"} element={<LoginPage />}/>
          <Route path={"/user/detail"} element={<ProtectedRoute><UserInfoDetailPage /></ProtectedRoute>} />
          <Route path={"/user/detail/:id"} element={<UserDataByIdPage/>}/>
         <Route path={"/callback"} element={<CallbackComponent/>}/>
         <Route path={"/memo"} element={<MemoComponent/>}/>
        </Routes>
      </HttpApiServiceProvider>
    </div>
  );
};

export default App;
