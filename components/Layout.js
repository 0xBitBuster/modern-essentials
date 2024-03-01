import { Open_Sans } from 'next/font/google'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NextSeo } from 'next-seo';

const openSans = Open_Sans({ 
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: '--font-open-sans'
})

function Layout({ title, description, noindex, children }) {
    return (
        <>
            <NextSeo 
                title={`${title || "Unbekannte Seite"} | Modern Essentials`}
                description={description || ""} 
                noindex={noindex}
            />
            <main className={`${openSans.variable}`}>
                <Navbar />
                {children}
                <Footer />
            </main>
        </>
    );
}

export default Layout;