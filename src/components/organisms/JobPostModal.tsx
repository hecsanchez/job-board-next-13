'use client';
import { Dialog, Transition } from '@headlessui/react'
import {Fragment, useEffect, useState} from 'react'
import JobPost from "@/components/organisms/JobPost";
import {getJobById} from "@/services/jobs";
import JobPostSkeleton from "@/components/molecules/JobPostSkeleton";
import {useParams} from "next/navigation";
import Image from "next/image";
import closeIcon from '@/assets/svg/close.svg';
const JobPostModal = ({ open, onClose }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [job, setJob] = useState(null)
    const params = useParams();

    useEffect(()=>{
        const pathParts = params.slug.split('/')
        const id = pathParts[1];

        const fetchJobs = async () => {
            const jobData = getJobById(id);
            setJob(jobData);
        }

        fetchJobs();
    }, [])

    useEffect(()=>{
        if (open) {
            setTimeout(()=>{
                setIsOpen(true)
            }, 100)
        }
    }, [])

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(()=>{
            onClose?.();
        }, 200)
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-screen items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-5xl min-h-[80vh] mt-10 sm:mt-20 mb-5 transform overflow-hidden rounded-lg bg-white p-5 sm:p-10 text-left align-middle shadow-xl transition-all">
                                    <>
                                        <div onClick={closeModal} className="absolute top-0 left-0 cursor-pointer p-3">
                                            <Image src={closeIcon}/>
                                        </div>
                                        {job ? (
                                            <JobPost data={job}/>
                                        ): (
                                            <JobPostSkeleton />
                                        )}
                                    </>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default JobPostModal;
