import clsx from "clsx";
import {FC, ReactNode} from "react";

interface ButtonProps {
    secondary?: boolean;
    children: ReactNode;
    type: 'button' | 'submit';
}
const Button: FC<ButtonProps> = ({ secondary = false, children, type}) => {

    return (
        <button className={clsx(
            'w-full px-3 sm:px-6 py-3 sm:py-4 text-sm border border-violet-900 uppercase rounded-lg cursor-pointer font-medium transition active:top-[1.5px] relative select-none', {
            'bg-violet-900 text-white hover:bg-white hover:text-violet-900': !secondary,
            'bg-white text-violet-900 hover:bg-violet-900 hover:text-white': secondary,
        })}
        type={type}>
            {children}
        </button>
    )
}

export default Button;
