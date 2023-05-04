import {getJobs} from '@/services/jobs';
import JobListItem from "@/components/JobListItem";
import { type JobPost as IJobPost } from '@/types';

async function getData() {
    const jobsRes = await getJobs();

    if (!jobsRes.ok) {
        throw new Error('Failed to fetch data');
    }

    return jobsRes.json();
}

const JobsList = async () => {
    const { jobs, featuredJobs } = await getData();
    console.log('jobs', jobs)
    console.log('featuredJobs', featuredJobs)

    const isFeatured = (jobId: string): boolean => {
        return featuredJobs.includes(jobId);
    }

    return (
        <div className="mt-8">
            {jobs.map((job: IJobPost)=>(
                <JobListItem key={job.id} data={job} featured={isFeatured(job.sid)}/>
            ))}
        </div>
    )
}

export default JobsList;
