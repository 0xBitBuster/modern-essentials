import debounce from "@/utils/debounce";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
	const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = debounce(() => setActive(window.scrollY > 50), 50);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
		<nav className="fixed w-full p-4 border-b border-dark-primary bg-[#e6e1db] bg-opacity-95 z-10">
			<div className={`relative flex justify-center ${active ? "h-10" : "h-14"} duration-300`}>
				<Link href="/" className="relative w-full">
					<Image src="/logo.png" fill priority className="object-contain" alt="Modern Essentials" />
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
