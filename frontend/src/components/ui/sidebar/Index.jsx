import {
  Smartphone,
  CirclePlus,
  PencilOff,
  AlarmClockCheck,
  LogOutIcon,
} from "lucide-react";
import React, { useState } from "react";
import Modal from "../../modal/Modal";
import { logout } from "../../../helpers/Index";
import { AddTasks } from "../../../screens/private/components/Tasks";

const Sidebar = ({ isModalOpen, setModalOpen, setRequestSent }) => {
  const iconStyles = {
    default: "cursor-pointer transition-colors hover:text-gray-200",
    blue: "text-blue-500 hover:text-blue-400",
    gray: "text-gray-400 hover:text-gray-200",
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const icons = [
    { Icon: AlarmClockCheck, size: 24, className: iconStyles.blue },
    {
      Icon: CirclePlus,
      size: 20,
      className: iconStyles.gray,
      onClick: openModal,
    },
    { Icon: PencilOff, size: 20, className: iconStyles.gray },
    { Icon: Smartphone, size: 20, className: iconStyles.gray },
    {
      Icon: LogOutIcon,
      size: 20,
      className: iconStyles.gray,
      position: "bottom",
    },
  ];

  const TopIcon = icons[0].Icon;
  const topIconSize = icons[0].size;
  const topIconClassName = icons[0].className;
  const BottomIcon = icons[4].Icon;
  const bottomIconSize = icons[4].size;
  const bottomIconClassName = icons[4].className;

  return (
    <nav className="fixed left-0 top-0 h-screen w-16 flex flex-col items-center bg-[#1a1a1a] py-4">
      <div className="flex flex-col items-center gap-8">
        <div className={topIconClassName}>
          <TopIcon size={topIconSize} />
        </div>

        <div className="flex flex-col items-center gap-6 cursor-pointer">
          {icons
            .slice(1, 4)
            .map(({ Icon, size, className, onClick }, index) => (
              <div key={index} className={className} onClick={onClick}>
                <Icon size={size} />
              </div>
            ))}
        </div>
        <div
          className="mt-auto absolute bottom-4 cursor-pointer"
          onClick={logout}
        >
          <div className={bottomIconClassName}>
            <BottomIcon size={bottomIconSize} />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        className={`min-h-[60vh] max-w-xl `}
        content={
          <AddTasks setRequestSent={setRequestSent} closeModal={closeModal} />
        }
      />
    </nav>
  );
};

export default Sidebar;
