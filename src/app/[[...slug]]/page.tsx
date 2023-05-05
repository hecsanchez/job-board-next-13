import Header from "@/components/organisms/Header";
import JobsList from "@/components/organisms/JobsList";
export default async function ListingsPage() {
  return (
      <>
        <Header/>
        <main className="flex min-h-screen flex-col items-center px-3 py-16">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold leading-4xl mb-5">Find the job you are looking for</h2>
          </div>
          <div className="max-w-5xl w-full">
              <JobsList />
          </div>
        </main>
      </>
  )
}

