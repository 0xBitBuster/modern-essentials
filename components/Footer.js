import Link from "next/link";
import React from "react";

function Footer() {
    return (
		<footer className="flex flex-col items-center text-sm py-8 border-t border-dark-primary mt-12">
			<p className="mb-2 text-primary">Modern Essentials &copy; 2024 All rights reserved.</p>
			<div className="flex items-center text-secondary gap-x-2 mb-4">
				<Link href="/legal/en/imprint" className="hover:underline">Imprint</Link>
				<div className="w-2 h-2 rounded-full bg-secondary"></div>
				<Link href="/legal/en/privacy-policy" className="hover:underline">Privacy Policy</Link>
			</div>
		</footer>
	);
}

export default Footer;
