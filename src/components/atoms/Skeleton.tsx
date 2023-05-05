import clsx from "clsx";

const Skeleton = ({className}) => {
    return (
        <div data-placeholder className={clsx('relative rounded-lg overflow-hidden bg-gray-100', className)}/>
    )
}

export default Skeleton;
