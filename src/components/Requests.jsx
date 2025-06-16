import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequests, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
  const reviewRequest = async (status, _id) =>{
    try {
        const res = await axios.post(BASE_URL + "/requests/review/"+status+"/"+_id,{},{withCredentials:true});
        dispatch(removeRequest(_id))
       console.log(res) 

    } catch (error) {
        console.log(error)
    }
  }

  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data?.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, []);
  if (!requests) return;
  if (requests.length === 0) return <h1 className="flex justify-center my-10">No Requests found</h1>;
  return (
    <div className=" text-center my-10">
      <h1 className="text-2xl font-bold">Connections</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className="flex justify-center items-center m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              {" "}
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold">{firstName + " " + lastName}</h2>
              {age && gender && <p>{age + "," + gender}</p>}
              <p>{about}</p>
            </div>
            <div>
              <button className="btn btn-active btn-primary mx-2" onClick={()=> reviewRequest("rejected",request._id)}>Reject</button>
              <button className="btn btn-active btn-secondary mx-2" onClick={()=> reviewRequest("accepted",request._id)}>
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
