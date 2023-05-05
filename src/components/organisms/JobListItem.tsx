'use client';
import clsx from 'clsx';
import {FC, useEffect, useState} from 'react';
import Image from "next/image";

import { type Job } from '@/types';

import locationIcon from '@/assets/svg/location.svg';
import arrowRightIcon from '@/assets/svg/arrow-right.svg';

import Link from "next/link";
import CompanyLogo from "@/components/molecules/CompanyLogo";
import { usePathname, useRouter } from 'next/navigation';
import JobPostModal from "@/components/organisms/JobPostModal";

interface JobListItemProps {
    data: Job;
}

const JobListItem: FC<JobListItemProps> = ({ data }) => {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(()=>{
        if (pathname.includes(data.id)) {
            setShowModal(true);
        }
    }, [pathname])

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        router.push('/')
        setShowModal(false)
    }

    return (
        <>
            <Link href={`/jobs/${data.id}`} className={clsx('block rounded-lg py-5 pl-5 pr-8 mb-3 text-left border cursor-pointer sm:flex justify-between items-center group hover:shadow-[0px_5px_24px_rgba(88,46,255,0.1)] transition hover:border-primary')}>
                <div className="flex gap-3">
                    <div>
                        <CompanyLogo data={data}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>
                            <h3 className='font-bold text-sm sm:text-xl'>{data.title}</h3>
                            <p className='mb-0'>{ data.company?.name }</p>
                        </div>
                        <p className="capitalize flex gap-1 text-sm sm:text-base"><Image src={locationIcon} alt='Location icon'/>{data.location_type} • {data.location}</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center justify-between">
                    <div className="bg-gray-100 px-3 py-2 rounded-md text-sm sm:text-base">{data.category}</div>
                    <div className="opacity-100 sm:opacity-0 group-hover:opacity-100 flex gap-1 text-primary transition">See more<Image src={arrowRightIcon} alt='See more icon'/></div>
                </div>
            </Link>
            {showModal ? (
                <>
                    <JobPostModal open={showModal} onClose={handleCloseModal}/>
                </>
            ): null}
        </>

    )
}

export default JobListItem;
