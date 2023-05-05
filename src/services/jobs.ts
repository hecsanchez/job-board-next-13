import jobs from '../../mock/jobs.json';
import {paginate} from '@/utils';
export const getJobs = (currentPage, itemsPerPage) => {
    const pages = 333/itemsPerPage;
    const nextPage = currentPage + 1 <= pages ? currentPage + 1 : null;
    const prevPage = currentPage - 1 >= pages ? currentPage - 1 : null;

    return {
        data: paginate(jobs.data, currentPage, itemsPerPage),
        meta: {
            per_page: itemsPerPage,
            total: 333,
            pages,
            page: currentPage,
            next_page: nextPage,
            prev_page: prevPage
        }
    }
}
export const getJobById = (jobId: string) => {
    return jobs.data.find(item=>item.id === Number(jobId))
}
