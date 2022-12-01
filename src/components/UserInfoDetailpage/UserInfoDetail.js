import React, { useEffect, useState } from "react";
import { useHttpApiService } from "../../core/facade/Htpp-service";
import { UserCreateDrawer } from "./UserCreateDrawer";
import { logOutUser } from "../../core/utils/authService";
import { useNavigate, useLocation } from "react-router-dom";

const UserInfoDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const httpApiService = useHttpApiService();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(location)
    httpApiService
      .get("/form")
      .then((success) => {
        setData(success.data.Form);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const tHeadData = ["Name", "Email", "Address", " Phone Number", "Status"];
  const handleShowDrawer = () => {
    setIsOpen((prev) => !prev);
  };
  const handleUserLogout = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <div className="relative">
      <div
        className={`bg-white p-8 rounded-md w-full ${
          loading ||(isOpen && "blur-sm")
        }`}
      >
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">User Info</h2>
            <span className="text-xs">Dashboard</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex bg-gray-50 items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="bg-gray-50 outline-none ml-1 block "
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
            <div className="lg:ml-40 ml-10 space-x-8">
              <button
                onClick={handleUserLogout}
                className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
              >
                Log out
              </button>
              <button
                onClick={handleShowDrawer}
                className="hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
              >
                Create
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    {tHeadData.map((data, idx) => {
                      return (
                        <th
                          key={idx}
                          className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          {data}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((item) => {
                      return (
                        <tr
                          key={item._id}
                          onClick={() => navigate(`/user/detail/${item._id}`)}
                        >
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  className="w-full h-full rounded-full"
                                  src={
                                    "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                  }
                                  alt=""
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {item.name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {item.email}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {item.address}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {item.phoneNumber}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                className={`absolute inset-0 ${
                                  item.service ? "bg-green-200" : "bg-red-600"
                                } opacity-50 rounded-full`}
                              ></span>
                              <span className="relative">
                                {item.service ? "Active" : "Deactive"}
                              </span>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span className="text-xs xs:text-sm text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  &nbsp; &nbsp;
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserCreateDrawer
        onClose={() => setIsOpen((prev) => !prev)}
        isOpen={isOpen}
      />
    </div>
  );
};

export default UserInfoDetail;
