'use client';
import Filter from "@/components/atoms/Filter";
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

const filters = [
    {
        label: 'Remote Jobs',
        value: '"Remote"',
    },
    {
        label: 'Customer Service',
        value: '"Customer+Service"+OR+"Client+Services"+OR+"Tech+Support"+OR+"Communication+Officer"+OR+"Customer+Support"',
    },
    {
        label: 'Software Engineering',
        value: '"Software+Engineering"+OR+Developer+OR+Engineer+OR+"Backend+Developer"+OR+"Frontend+Developer"+OR+"Fullstack+Developer"+OR+"Mobile+Developer"+OR+"Game+Developer"+OR+"Engineering+Manager"',
    },
    {
        label: 'Data',
        value: '"Data+Scientist"+OR+"Data+Analyst"+OR+"Big+Data+Engineer"+OR+"Machine+Learning+Engineer"+OR+"AI+Engineer"+OR+"Cloud+Engineer"+OR+"Data+Architect"+OR',
    },
]

const FilterList = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const search = searchParams.get('s');
    const handleFilter = (value) => {
        router.push(pathname + '?s=' + value)
    }

    const isActive = (value: string) => {
        return search?.includes(value.replaceAll('+', ' '))
    }

    return (
        <div className="flex gap-3 items-center">
            Quick filters:
            {filters.map(filter=>(
                <Filter key={filter.label} label={filter.label} value={filter.value} onClick={handleFilter} active={isActive(filter.value)}/>
            ))}
        </div>
    )
}

export default FilterList;
