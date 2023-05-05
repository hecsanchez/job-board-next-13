import {Job} from "@/types";

export const paginate = (data: Job[], currentPage: number, itemsPerPage: number): Job[] => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
};
