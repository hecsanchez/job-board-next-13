import logo from "@/assets/svg/job-board-logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="items-center sticky top-0 bg-white">
            <div className="max-w-[1400px] flex justify-center py-3 sm:py-6 m-auto px-3 items-center">
                <Link href='/'><Image src={logo} className="w-12" alt="unitrabajos-logo"/></Link>
                <h1 className="text-xl font-bold ml-2">Fantastic jobs</h1>
            </div>
        </div>
    )
}

export default Header;
