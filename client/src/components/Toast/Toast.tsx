import { IoClose } from "react-icons/io5";

import "./toast.scss";

interface IToast {
  message: string;
  onClose: () => void;
};

export default function Toast({ message, onClose }: IToast) {
  return (
    <div className="absolute top-1 py-2 px-4 rounded flex items-center justify-center gap-4 bg-[var(--color-red)]" >
      <p className="text-[var(--color-white)]" >{message}</p>
      <IoClose onClick={() => onClose()} color="#FFFFFF" className="cursor-pointer" size={18}  />
    </div>
  )
};

