import {getJobs} from '@/services/jobs';
import JobListItem from "@/components/organisms/JobListItem";
import { type Job } from '@/types';
import {FC} from "react";

interface JobsListProps {
    jobs: Job[];
}

const JobsList: FC<JobsListProps> = ({ jobs }) => {
    return (
        <div className="mt-8">
            {jobs.map((job: Job)=>(
                <JobListItem key={job.id} data={job}/>
            ))}
        </div>
    )
}

export default JobsList;
