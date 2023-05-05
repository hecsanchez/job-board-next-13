'use client';
import JobListItem from "@/components/organisms/JobListItem";
import { type Job } from '@/types';
import {FC, LegacyRef, MutableRefObject, useEffect, useRef, useState} from "react";
import {getJobs} from "@/services/jobs";
import Spinner from "@/components/atoms/Spinner";


const JobsList: FC = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [jobs, setJobs] = useState([])
    const [endOfPage, setEndOfPage] = useState(false);
    const [loading, setLoading] = useState(true);
    const ref = useRef<Element>()

    useEffect(()=>{
        const fetchJobs = async () => {
            const jobsRes = await getJobs(currentPage, 10);
            setJobs(jobsRes.data);
            setLoading(false)
        }
        fetchJobs();

    }, [])

    useEffect(()=>{
        if (endOfPage) {
            setLoading(true);
            setEndOfPage(false);
            const fetchMoreJobs = () => {
                const page = currentPage + 1
                const jobsRes = getJobs(page, 10);

                setJobs(prevState => [...prevState, ...jobsRes.data]);
                setLoading(false)
            }

            setTimeout(()=>{
                fetchMoreJobs();
            }, 500)
        }

    }, [endOfPage])

    const intesectionObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0,
    } as IntersectionObserverInit;

    const observerCallback = (entries: IntersectionObserverEntry[]): void => {
        const [entry] = entries;
        setEndOfPage(entry.isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            observerCallback,
            intesectionObserverOptions,
        );

        if (ref.current) {
            observer.observe(ref.current as Element);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current as Element);
        };
    }, [ref]);

    return (
        <div className="mt-8">
            {jobs.map((job: Job)=>(
                <JobListItem key={job.id} data={job}/>
            ))}
            {loading ? <div className="flex justify-center"><Spinner/></div> : null}
            <div ref={ref as LegacyRef<HTMLDivElement>}/>
        </div>
    )
}

export default JobsList;
