import React, { useEffect } from "react";
import SearchUser from "../../../../components/SearchUser/SearchUser";
import UserService from "../../../../services/userService";
import { useDispatch } from "react-redux";
import { storeAllUsers } from "../../../../store/usersSlice";

function DashboardUserListDesktop({ users }) {
  const dispatch = useDispatch();

  useEffect(() => {
    UserService.getAllUsers()
      .then((res) => {
        dispatch(storeAllUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="desktop">
      <div>
        <div className="flex flex-col">
          <h2 className="text-[40px] font-bold mb-[50px]">Lista Korisnika</h2>
        </div>
        <div>
          <SearchUser />
        </div>
        <div>
          <div className="mt-[30px] w-[100%] rounded-xl !bg-[#fff] p-2 shadowBorder">
            <table className=" text-start w-[100%] text-[14px]">
              <thead>
                <tr className="text-left p-[50px]">
                  <th className="px-6 py-3 border-r border-b border-[#00000029]">
                    SI
                  </th>
                  <th className="px-6 py-3 border-r border-b border-[#00000029]">
                    Ime
                  </th>
                  <th className="px-6 py-3 border-r border-b border-[#00000029]">
                    Prezime
                  </th>
                  <th className="px-6 py-3 border-r border-b border-[#00000029]">
                    Email
                  </th>
                  <th className="px-6 py-3 border-r border-b border-[#00000029]">
                    Broj Telefona
                  </th>
                  <th className="px-6 py-3 border-r border-b border-[#00000029]">
                    Pozicija
                  </th>
                  <th className="px-6 py-3 border-b border-[#00000029]">
                    Akcija
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => {
                  return (
                    <tr key={user._id} className="">
                      <td className="px-6 py-3 border-r border-b border-[#00000029]">
                        {i + 1}
                      </td>
                      <td className="px-6 py-3 border-r border-b border-[#00000029]">
                        {user.firstName}
                      </td>
                      <td className="px-6 py-3 border-r border-b border-[#00000029]">
                        {user.lastName}
                      </td>
                      <td className="px-6 py-3 border-r border-b border-[#00000029]">
                        {user.email}
                      </td>
                      <td className="px-6 py-3 border-r border-b border-[#00000029]">
                        {user.phone}
                      </td>
                      <td className="px-6 py-3 border-r border-b border-[#00000029]">
                        {user.title}
                      </td>
                      <td className="px-6 py-3 border-b border-[#00000029]">
                        Akcija
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardUserListDesktop;
