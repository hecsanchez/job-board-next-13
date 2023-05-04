import Header from "@/components/organisms/Header";
import JobsList from "@/components/organisms/JobsList";
import {getJobs} from "@/services/jobs";
import {NextPage} from "next";
import {Job} from "@/types";

async function getData() {
    const jobsRes = await getJobs();

    return jobsRes;
}
export default async function ListingsPage() {

    const res = await getData();

  return (
      <>
        <Header/>
        <main className="flex min-h-screen flex-col items-center px-3 py-16">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl sm:text-5xl font-bold leading-4xl mb-5">Find the job you are looking for</h2>
          </div>
          <div className="max-w-5xl w-full">
              <JobsList jobs={res.data} />
          </div>
        </main>
      </>
  )
}

