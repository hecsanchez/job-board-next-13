import api from "@/services/config";

export const getJobs = async () => await api.get('/api/jobs');
export const getJobById = async (id: string) => await api.get(`/api/jobs/${id}`);
