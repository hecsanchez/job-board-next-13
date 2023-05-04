'use client';
import clsx from 'clsx';
import {FC, useState} from 'react';
import Image from "next/image";

import { type Job } from '@/types';

import locationIcon from '@/assets/svg/location.svg';
import arrowRightIcon from '@/assets/svg/arrow-right.svg';

import Link from "next/link";
import CompanyLogo from "@/components/molecules/CompanyLogo";

interface JobListItemProps {
    data: Job;
}

const JobListItem: FC<JobListItemProps> = ({ data }) => {

    return (
        <>
            <Link href={`/jobs/${data.id}`} className={clsx('rounded-lg py-5 pl-5 pr-8 mb-3 text-left border cursor-pointer flex justify-between items-center group hover:shadow-[0px_5px_24px_rgba(88,46,255,0.1)] transition hover:border-primary')}>
                <div className="flex gap-3">
                    <div className="rounded-lg h-20 w-20 overflow-hidden">
                        {/*<CompanyLogo data={data}/>*/}
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>
                            <h3 className='font-bold text-xl'>{data.title}</h3>
                            <p>{ data.company.name }</p>
                        </div>
                        <p className="capitalize flex gap-1"><Image src={locationIcon} alt='Location icon'/>{data.location_type}, {data.location}</p>
                    </div>
                </div>
                <div className="bg-gray-100 px-3 py-2 rounded-md">{data.category}</div>
                <div className="opacity-0 group-hover:opacity-100 flex gap-1 text-primary transition">See more<Image src={arrowRightIcon} alt='See more icon'/></div>
            </Link>
        </>

    )
}

export default JobListItem;
