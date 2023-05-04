import api from "@/services/config";
import jobs from '../../mock/jobs.json';
export const getJobs = () => jobs;
export const getJobById = async (id: string) => await api.get(`/api/jobs/${id}`);
