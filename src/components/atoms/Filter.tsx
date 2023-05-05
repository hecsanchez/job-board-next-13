import {FC} from "react";
import clsx from "clsx";

interface FilterProps {
    label: string;
    onClick?: (vlaue: string) => void;
    value: string;
    active: boolean;
}

const Filter: FC<FilterProps> = ({ label, onClick, value, active = false }) => {

    const handleClick = () => {
        onClick?.(value)
    }

    return (
        <div onClick={handleClick} className={clsx("border border-gray-300 rounded-full px-4 py-2 cursor-pointer",
            {'border-violet-700': active}
        )}>
            { label }
        </div>
    )
}

export default Filter;
