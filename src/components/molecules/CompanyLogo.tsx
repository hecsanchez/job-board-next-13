import Image from "next/image";
import {getCompanyInitials} from "@/utils/jobData";
import {Job} from "@/types/Job";
import {FC} from "react";

interface CompanyLogoProps {
    data: Job;
}
const CompanyLogo: FC<CompanyLogoProps> = ({data}) => {
    return (
        <div className="rounded-lg h-10 w-10 sm:h-20 sm:w-20 overflow-hidden">
            {data.company?.logo !== null ? (
                <Image src={data.company?.logo} alt="company-logo" className="h-10 w-10 sm:h-20 sm:w-20"/>
            ) : (
                <div className="h-10 w-10 sm:h-20 sm:w-20 flex items-center justify-center bg-gray-700 text-xl sm:text-3xl font-bold text-white tracking-wider">{getCompanyInitials(data)}</div>
            )}
        </div>
    )
}

export default CompanyLogo;
