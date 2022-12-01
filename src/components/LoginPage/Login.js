import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useHttpApiService } from "../../core/facade/Htpp-service";
import { storeToken } from "../../core/utils/authService";
import Component from "./Component";

const Login = () => {
  const httpApiService = useHttpApiService();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(httpApiService,"from login")
  const handleSubmitForm = (e) => {
    e.preventDefault();
    httpApiService
      .post("/user/login", { email, password })
      .then((succes) => {
        storeToken(succes.data.token);
        navigate("/user/detail");
      })
      .catch((err) => console.log(err));
  };
  const handleSendData = () => {
    const userInput = window.prompt("enter something....");
    navigate("/user/detail/234", { replace: true, state: userInput });

  }
  return (
    <div className="mx-auto my-36 flex h-[300px] w-[350px] flex-col border-2 bg-white text-black shadow-xl">
      <button
          className={
            "absolute top-20 right-5 boreder rounded-md text-white p-2 bg-[#9089FC]"
          }
        onClick={handleSendData}
      >
        navigate to user component
      </button>
      <Component
        className={
          "absolute top-4 right-5 boreder rounded-md text-white p-2 bg-[#9089FC]"
        }
        onClick={() =>
          navigate("/",
           {
            state: { message: "came from login page", data: [1, 2, 3, 4] },
          })
        }
      >
        {"Go back"}
      </Component>
      <div className="mx-8 mt-7 mb-1 flex flex-row justify-start space-x-2">
        <div className="h-7 w-3 bg-[#9089FC]"></div>
        <div className="w-3 text-center font-sans text-xl font-bold">
          <h1>Login</h1>
        </div>
      </div>
      <form onSubmit={handleSubmitForm}>
        <div className="flex flex-col items-center">
          <input
            className="my-2 w-72 border p-2"
            type="email"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="my-2 w-72 border p-2"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="my-2 flex justify-center">
          <button
            className={`w-72 border ${
              email && password ? "bg-[#9089FC]" : "bg-[#c7c4f9]"
            } text-white p-2 font-sans`}
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <div className="mx-7 my-3 flex justify-between text-sm font-semibold">
        <div>
          <h1>Forget Password</h1>
        </div>
        <div>
          <h1 className="underline underline-offset-2">Signup</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
