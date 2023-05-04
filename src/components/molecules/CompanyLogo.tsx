import Image from "next/image";
import {getCompanyInitials} from "@/utils/jobData";
import {Job} from "@/types/Job";
import {FC} from "react";

interface CompanyLogoProps {
    data: Job;
}
const CompanyLogo: FC<CompanyLogoProps> = ({data}) => {
    return data.company.logo !== null ? (
        <Image src={data.company.logo} alt="company-logo" className="h-20 w-20"/>
    ) : (
        <div className="h-20 w-20 flex items-center justify-center bg-gray-700 text-3xl font-bold text-white tracking-wider">{getCompanyInitials(data)}</div>
    )
}

export default CompanyLogo;
