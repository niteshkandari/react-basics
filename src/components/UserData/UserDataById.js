import React, { useState,useEffect } from "react";
import {
  useLocation,
  useParams,
} from "react-router-dom";
import { useHttpApiService } from "../../core/facade/Htpp-service";
const UserDataById = () => {
  const httpApiService = useHttpApiService();
  const location = useLocation();
  const param = useParams();
  const [data, setData] = useState([]);
  const [useData, setUserData] = useState("");

  useEffect(() => {
    if(!location.state) {
    httpApiService.get(`/form/${param.id}`).then(success => {
      console.log(success)
      setData(success.data);
    }).catch(err => console.log(err))
  } else {
    setUserData(location.state);
  }
  }, [])

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto relative mt-[10%]">
      <p className=" font-serif font-extrabold text-7xl text-teal-400">{useData}</p>
      {data ? <>
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.name}
        </h5>
      </a>
      
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {data.name}<br/>
        {data.email}<br/>
        {data.address}<br/>
        {data.phoneNumber}<br/>
      </p>
      </>:  <p className="mb-3 absolute font-normal dark:text-gray-400 text-white">Loading...</p>}
      

    </div>
  );
};

export default UserDataById;
