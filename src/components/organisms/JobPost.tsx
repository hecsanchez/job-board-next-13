import Image from "next/image";
import locationIcon from "@/assets/svg/location.svg";
import Button from "@/components/atoms/Button";
import CompanyLogo from "@/components/molecules/CompanyLogo";
import {FC} from "react";
import {Job} from "@/types";

interface JobPostProps {
    data: Job;
}
const JobPost: FC<JobPostProps> = ({ data }) => {

    return (
        <div>
            <div className="border-b border-gray-200 pb-5">
                <div className="sm:flex justify-between">
                    <div className="flex gap-3 justify-between">
                        <div>
                            <CompanyLogo data={data}/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className='sm:pt-1'>
                                <h3 className='font-medium text-base sm:text-2xl'>{data.title}</h3>
                                <p className='text-sm sm:text-lg mt-1 mb-0'>{ data.company.name }</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:flex gap-2 sm:w-1/3 justify-end">
                        <div><Button type='button' secondary>Save</Button></div>
                        <div><Button type='button'>Apply</Button></div>
                    </div>
                </div>

                <div className="flex items-center sm:gap-16 mt-0 pt-3">
                    <div className="capitalize flex gap-1 text-sm sm:text-lg">
                        <Image src={locationIcon} alt='Location icon'/>
                        {data.location_type} • {data.location}
                    </div>
                    <div className="bg-gray-100 px-3 py-2 rounded-md w-1/2 sm:w-auto text-sm sm:text-base">{data.category}</div>
                </div>
                <div className="sm:hidden flex w-full gap-2 justify-between mt-4">
                    <div className="w-1/2"><Button type='button' secondary>Save</Button></div>
                    <div className="w-1/2"><Button type='button'>Apply</Button></div>
                </div>
            </div>
            <div
                className="mt-8"
                dangerouslySetInnerHTML={{
                    __html: `${data.description}`
                }}
            />
        </div>
    )
}

export default JobPost;
