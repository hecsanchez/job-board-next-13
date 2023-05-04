import {Job} from "@/types/Job";

export const getCompanyInitials = (data: Job) => {
    const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
    let initials: RegExpMatchArray[] | any[] = [...data.company.name.matchAll(rgx)] || [];
    initials = ((initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')).toUpperCase();
    return initials
}
