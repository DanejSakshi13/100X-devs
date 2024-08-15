import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../auth-components/SubmitButton";

export default function Users() {
  //   const [users, setUsers] = useState([]);
  const [users, setUsers] = useState([
    {
      firstName: "Sakshi",
      lastName: "Danej",
      _id: 1,
    },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <>
      <div className="font-medium text-base pl-12">Users</div>

      <div>
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="search"
          id="default-search"
          className="mt-2 ml-12 w-11/12 block p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          placeholder="Search account holder..."
          required
        />
      </div>

      <div>
      {users.map(user => <User key={user._id} user={user} />)}
      </div>
    </>
  );
}

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full">
        <SubmitButton
        //   onClick={(e) => {
            // navigate("/send?id=" + user._id + "&name=" + user.firstName);
        //   }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
