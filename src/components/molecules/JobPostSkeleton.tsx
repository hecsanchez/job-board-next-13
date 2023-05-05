import Skeleton from "@/components/atoms/Skeleton";

const JobPostSkeleton = () => {
    return (
        <div>
            <div className="border-b border-gray-200 pb-5">
                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <Skeleton className="mr-2 h-20 w-20"/>
                        <div className="flex flex-col gap-1">
                            <div>
                                <Skeleton className="mr-2 h-8 w-96 mt-1"/>
                                <Skeleton className="mr-2 h-6 w-80 mt-3"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Skeleton className="h-[58px] w-[225px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobPostSkeleton;
