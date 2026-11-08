"use client";

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";
import { useCursorStore } from "../store/useCursorStore"

const item = {
    initial: { y: "1rem", opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.2, 1, 0.3, 1] as const
        }
    },
};

const animeList = [
    { url: "/anime/aot.jpg", title: "Attack on Titan", studio: "WIT STUDIO / MAPPA" },
    { url: "/anime/yourname.png", title: "Your Name", studio: "CoMix Wave Films" },
    { url: "/anime/vinland.jpg", title: "Vinland Saga", studio: "WIT STUDIO / MAPPA" },
    { url: "/anime/jjk.jpg", title: "Jujutsu Kaisen", studio: "MAPPA" },
    { url: "/anime/suzume.jpg", title: "Suzume no Tojimari", studio: "CoMix Wave Films" },
    { url: "/anime/demonslayer.jpg", title: "Demon Slayer", studio: "ufotable" },
    { url: "/anime/sololeveling.png", title: "Solo Leveling", studio: "A-1 Pictures" },
    { url: "/anime/cote.jpg", title: "Classroom of the Elite", studio: "Lerche" },
];

export default function Gallery() {
    const set = useCursorStore((state) => state.setCursorType);

    const containerRef = useRef(null);
    
    const { scrollYProgress } = useScroll();

    const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

    return (
        <motion.main
            className="relative w-screen flex flex-col items-center pt-[5vh] pb-[10vh] lg:pt-[15vh] lg:pb-[25vh] lg:pl-[10vw]"
            initial={{ opacity: 0, filter: "blur(1px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(1px)", transition: { duration: 0.8, ease: "easeOut" } }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
            <div className="w-[80vw] lg:w-[70vw] h-[15vh] sm:landscape:h-[30vh] md:landscape:h-[30vh] lg:landscape:h-[15vh] flex flex-row items-end justify-between">
                <h1 className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">Anime</h1>
                <a
                    className="flex items-end justify-center text-[clamp(0.8rem,1vw,1.5rem)] font-light mb-1 hover:underline"
                    href="https://github.com/Aniket982-ux"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => set("hover")}
                    onMouseLeave={() => set("default")}
                >
                    @Aniket982-ux
                </a>
            </div>

            <div className="w-[80vw] lg:w-[70vw] h-[1px] bg-[#888888aa]"/>

            <div
                ref={containerRef}
                className="hidden md:flex md:flex-row md:pt-[clamp(1rem,7.5vh,3rem)] md:gap-[10vw]"
            >
                <motion.div
                    style={{ y: yLeft }}
                    className="w-[30vw] flex flex-col gap-[10vh]"
                >
                    <AnimeCard url={animeList[0].url} title={animeList[0].title} studio={animeList[0].studio} load="eager" />
                    <AnimeCard url={animeList[1].url} title={animeList[1].title} studio={animeList[1].studio} load="eager" />
                    <AnimeCard url={animeList[2].url} title={animeList[2].title} studio={animeList[2].studio} load={undefined} />
                    <AnimeCard url={animeList[3].url} title={animeList[3].title} studio={animeList[3].studio} load={undefined} />
                </motion.div>

                <div className="w-[30vw] flex flex-col gap-[10vh]">
                    <AnimeCard url={animeList[4].url} title={animeList[4].title} studio={animeList[4].studio} load="lazy" />
                    <AnimeCard url={animeList[5].url} title={animeList[5].title} studio={animeList[5].studio} load="lazy" />
                    <AnimeCard url={animeList[6].url} title={animeList[6].title} studio={animeList[6].studio} load="lazy" />
                    <AnimeCard url={animeList[7].url} title={animeList[7].title} studio={animeList[7].studio} load="lazy" />
                </div>
            </div>

            <div className="md:hidden w-[70vw] flex flex-col pt-[5vh] gap-[10vh]">
                {animeList.map((anime, idx) => (
                    <AnimeCard
                        key={idx}
                        url={anime.url}
                        title={anime.title}
                        studio={anime.studio}
                        load={idx < 2 ? "eager" : "lazy"}
                    />
                ))}
            </div>

            <div className="w-full flex flex-col items-center justify-center mt-[15vh] pb-[5vh]">
                <div className="cursive w-full h-auto overflow-hidden flex items-center justify-center text-[clamp(1.2rem,2vw,2.5rem)] md:text-[clamp(1.6rem,2.2vw,2.8rem)] md:font-thin">
                    <motion.h2 
                        className="flex gap-[clamp(0.05rem,0.2vw,0.2rem)]"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false }}
                        transition={{ 
                            staggerChildren: 0.02,
                            delayChildren: 0.2,
                        }}
                    >
                        <motion.span variants={item}>T</motion.span>
                        <motion.span variants={item}>h</motion.span>
                        <motion.span variants={item}>a</motion.span>
                        <motion.span variants={item}>n</motion.span>
                        <motion.span variants={item}>k</motion.span>
                        <motion.span className="w-[clamp(0.5rem,0.8vw,1rem)]" variants={item}> </motion.span>
                        <motion.span variants={item}>y</motion.span>
                        <motion.span variants={item}>o</motion.span>
                        <motion.span variants={item}>u</motion.span>
                        <motion.span className="w-[clamp(0.5rem,0.8vw,1rem)]" variants={item}> </motion.span>
                        <motion.span variants={item}>f</motion.span>
                        <motion.span variants={item}>o</motion.span>
                        <motion.span variants={item}>r</motion.span>
                        <motion.span className="w-[clamp(0.5rem,0.8vw,1rem)]" variants={item}> </motion.span>
                        <motion.span variants={item}>v</motion.span>
                        <motion.span variants={item}>i</motion.span>
                        <motion.span variants={item}>s</motion.span>
                        <motion.span variants={item}>i</motion.span>
                        <motion.span variants={item}>t</motion.span>
                        <motion.span variants={item}>i</motion.span>
                        <motion.span variants={item}>n</motion.span>
                        <motion.span variants={item}>g.</motion.span>
                    </motion.h2>
                </div>
                <div className="cursive w-full h-auto overflow-hidden flex items-center justify-center mt-3 text-[clamp(0.8rem,1vw,1.4rem)] md:text-[clamp(1rem,1.2vw,1.6rem)] md:font-thin">
                    <motion.h2 
                        className="flex gap-[clamp(0.05rem,0.1vw,0.2rem)]"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false }}
                        transition={{ 
                            staggerChildren: 0.02,
                            delayChildren: 0.35,
                        }}
                    >
                        <motion.span variants={item}>C</motion.span>
                        <motion.span variants={item}>r</motion.span>
                        <motion.span variants={item}>e</motion.span>
                        <motion.span variants={item}>a</motion.span>
                        <motion.span variants={item}>t</motion.span>
                        <motion.span variants={item}>e</motion.span>
                        <motion.span variants={item}>d</motion.span>
                        <motion.span className="w-[clamp(0.3rem,0.4vw,0.8rem)]" variants={item}> </motion.span>
                        <motion.span variants={item}>b</motion.span>
                        <motion.span variants={item}>y</motion.span>
                        <motion.span className="w-[clamp(0.3rem,0.4vw,0.8rem)]" variants={item}> </motion.span>
                        <motion.span variants={item}>A</motion.span>
                        <motion.span variants={item}>n</motion.span>
                        <motion.span variants={item}>i</motion.span>
                        <motion.span variants={item}>k</motion.span>
                        <motion.span variants={item}>e</motion.span>
                        <motion.span variants={item}>t</motion.span>
                        <motion.span className="w-[clamp(0.3rem,0.4vw,0.8rem)]" variants={item}> </motion.span>
                        <motion.span variants={item}>T</motion.span>
                        <motion.span variants={item}>r</motion.span>
                        <motion.span variants={item}>i</motion.span>
                        <motion.span variants={item}>p</motion.span>
                        <motion.span variants={item}>a</motion.span>
                        <motion.span variants={item}>t</motion.span>
                        <motion.span variants={item}>h</motion.span>
                        <motion.span variants={item}>i</motion.span>
                    </motion.h2>
                </div>
            </div>
        </motion.main>
    )
}

type Props = {
    url: string,
    title: string,
    studio: string,
    load?: "eager" | "lazy" | undefined,
}

function AnimeCard({ url, title, studio, load }: Props) {
    return (
        <div className="w-full md:w-[30vw] flex flex-col items-start justify-start">
            <img src={url} alt={title} className="w-full aspect-[2/3] object-cover opacity-[90%] rounded-sm shadow-md" loading={load} decoding="async" />
            <h2 className="mt-2 pl-1 text-[clamp(1rem,1.5vw,1.5rem)] font-light w-full mb-1 border-[#888888aa] border-b-[0.3px]">{title}</h2>
            <div className="w-full flex flex-col items-start justify-start text-[clamp(0.7rem,1.2vw,1.2rem)] font-light">
                <div className="w-full flex flex-row justify-between border-[#888888aa] border-b-[0.3px]">
                    <p className="mb-1 text-[#888888] pl-1">Studio</p>
                    <p className="mb-1 pr-1">{studio}</p>
                </div>
            </div>
        </div>
    )
}
