import { AlarmClockCheck, CirclePlus, LogOutIcon } from "lucide-react";
import React from "react";
import { logout } from "../../../helpers/Index";
import { AddTasks } from "../../../screens/private/components/Tasks";
import Button from "../button/Button";

export const Logout = ({ closeModal }) => {
  return (
    <>
      <p className="font-Monsterrat font-bold text-center mb-2 text-gray-800 text-[17px]">
        Are you sure you want to logout?
      </p>
      <p className="font-Monsterrat font-bold text-center mb-5 text-[12px] ">
        If you choose to log out, you will need to log in again to access your
        account.
      </p>
      <div className="flex justify-end gap-4 mt-4">
        <Button
          label="Cancel"
          type="button"
          onClick={closeModal}
          className="rounded-md text-center w-24 justify-center"
        />
        <Button
          label="Logout"
          type="button"
          onClick={logout}
          className="rounded-md text-center w-24 justify-center bg-red-600 text-white"
        />
      </div>
    </>
  );
};

const Sidebar = ({ setModal, setRequestSent, requestSent }) => {
  const openModal = () =>
    setModal({
      open: true,
      component: (
        <AddTasks
          setModal={setModal}
          setRequestSent={setRequestSent}
          requestSent={requestSent}
        />
      ),
    });

  const openLogoutModal = () =>
    setModal({
      open: true,
      component: <Logout closeModal={() => setModal({ open: false })} />,
    });

  const icons = [
    {
      Icon: AlarmClockCheck,
      size: 24,
      className: "text-blue-500 hover:text-blue-400 cursor-pointer",
    },
    {
      Icon: CirclePlus,
      size: 20,
      className: "text-gray-400 hover:text-gray-200 cursor-pointer",
      onClick: openModal,
    },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-16 flex flex-col items-center bg-[#1a1a1a] py-4">
      <div className="flex flex-col items-center gap-8">
        {icons.map(({ Icon, size, className, onClick }, index) => (
          <div key={index} className={className} onClick={onClick}>
            <Icon size={size} />
          </div>
        ))}
        <div
          className="mt-auto absolute bottom-4 cursor-pointer text-gray-400 hover:text-gray-200"
          onClick={openLogoutModal}
        >
          <LogOutIcon size={20} />
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
