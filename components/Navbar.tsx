import Image from "next/image";
import Link from "next/link";
import logoSrc from "../public/logo.png";

export const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src={logoSrc} width={90} height={77} />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja Listing</Link>
        </nav>
    );
};
