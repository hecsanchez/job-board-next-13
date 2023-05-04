import clsx from "clsx";
import {FC, ReactNode} from "react";

interface ButtonProps {
    secondary: boolean;
    children: ReactNode;
    type: 'button' | 'submit';
}
const Button: FC<ButtonProps> = ({ secondary = false, children, type}) => {

    return (
        <button className={clsx(
            'px-3 sm:px-10 py-3 sm:py-4 text-sm sm:text-base border border-primary uppercase rounded-lg cursor-pointer font-medium transition active:top-[1.5px] relative select-none', {
            'bg-primary text-white hover:bg-white hover:text-primary': !secondary,
            'bg-white text-primary hover:bg-primary hover:text-white': secondary,
        })}
        type={type}>
            {children}
        </button>
    )
}

export default Button;
