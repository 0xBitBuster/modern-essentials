import Layout from "@/components/Layout";
import Image from "next/image";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import items from "@/data/products"
import Link from "next/link";

const tags = ["✈️ Traveling", "🚽 Bathroom", "🎮 Gaming", "💡 Lighting", "⚽ Sport", "🪑 Furniture", "💌 Love", "💯 Decoration"]

export default function Home() {
    const [filteredItems, setFilteredItems] = useState(items);
    const [activeTag, setActiveTag] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        let newFilteredItems = [...items];
        if (search.trim() !== "") {
            newFilteredItems = newFilteredItems.filter(i => i.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
        }

        if (activeTag !== "") {
            newFilteredItems = newFilteredItems.filter(i => i.tags.includes(activeTag));
        }

        setFilteredItems(newFilteredItems);
    }, [search, activeTag])

    return (
        <Layout title="Elevate Everyday Living">
            <div className="flex flex-col pt-32 items-center px-2">
                <p className="italic mb-4 text-center">Elevate Everyday Living...</p>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="bg-[#AF8A8A] text-white text-center outline-none px-5 py-2.5 rounded-full placeholder:text-amber-50 w-full max-w-sm focus:ring-1 ring-[#7D5D54]" placeholder="Search ..." />
                <div className="max-w-7xl mt-6">
                    <div className="mb-8 flex gap-4 flex-wrap justify-center">
                        {tags.map(t => (
                            <button key={t} onClick={() => setActiveTag(t === activeTag ? "" : t)} className={`border-2 border-[#33211d] px-2.5 py-1.5 font-medium hover:bg-[#33211d] hover:text-white duration-200 ${activeTag === t ? "bg-[#33211d] text-white" : ""}`}>{t}</button>
                        ))}
                    </div>
                    <motion.div layout className="flex flex-wrap justify-center gap-6">
                        {filteredItems.length !== 0 ? (
                            <>
                                {filteredItems.map(i => (
                                    <motion.div layout key={i.title} >
                                        <Link href={i.link} target="_blank" rel="sponsored noopener">
                                            <div className="bg-white rounded-xl overflow-hidden drop-shadow-sm hover:drop-shadow-md duration-200 hover:scale-[1.03] group">
                                                <div className="relative">
                                                    <Image
                                                        src={i.img}
                                                        width={250}
                                                        height={150}
                                                        className="rounded-t-xl w-full object-contain duration-200 scale-95"
                                                    />
                                                    <h3 className="font-medium px-4 py-3 bg-white group-hover:text-primary">{i.title}</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </>
                        ) : (
                            <p>No products were found matching your search.</p>
                        )}
                    </motion.div>
                    <p className="text-center text-xs italic mt-8">* All links on this page are affiliate links.</p>
                </div>
            </div>
        </Layout>
    );
}
