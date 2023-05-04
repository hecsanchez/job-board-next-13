import {Company} from "@/types/Company";

export interface Job {
    id: string;
    title: string;
    description: string;
    category: string;
    published_on: string;
    location: string;
    skills: string[];
    levels_of_experience: string[];
    company: Company;
}

