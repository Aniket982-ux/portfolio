"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useCursorStore } from "../store/useCursorStore";
import Link from "next/link";
import { projects, Project } from "../components/projects";
import Media from "../components/media";
import { useThemeStore } from "../store/useThemeStore";

export default function Works() {
    const [focus, setFocus] = useState<Project>(projects[0]);
    const set = useCursorStore((state) => state.setCursorType);
    const { theme } = useThemeStore();

    return (
        <motion.main
            className="relative w-screen h-full overflow-x-auto lg:portrait:w-full lg:portrait:min-h-screen landscape:w-full landscape:min-h-screen flex justify-start items-center pt-[15vh] pl-[15vw] pr-[15vw] lg:portrait:justify-start lg:portrait:items-start lg:portrait:pt-[45vh] lg:portrait:pb-[45vh] lg:portrait:pl-[15vw] landscape:justify-start landscape:items-start landscape:pt-[40vh] landscape:pb-[30vh] landscape:pl-[15vw]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="hidden lg:portrait:flex lg:portrait:flex-col lg:portrait:w-[40vw] lg:portrait:h-auto lg:portrait:gap-[40vh] landscape:flex landscape:flex-col landscape:w-[40vw] landscape:h-auto landscape:gap-[40vh]">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, filter: "blur(1px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                    >
                        <Link
                            href={`/works/${project.id}`}
                            className="relative w-[40vw] aspect-[2/1] flex items-center justify-center overflow-hidden"
                            onMouseEnter={() => set("VIEW")}
                            onMouseLeave={() => set("default")}
                        >
                            <motion.img
                                src={project.bg1}
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover"
                                onViewportEnter={() => setFocus(project)}
                                viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                            />
                            <Media
                                src={project.image1}
                                alt={project.title}
                                className="w-[35vw] z-10 max-h-[90%] object-contain"
                                loading={idx === 0 ? "eager" : "lazy"}
                            />
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="lg:portrait:hidden landscape:hidden flex flex-row overflow-x-auto flex-shrink-0 h-[70vh] gap-[40vw]">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        className="h-[70vh] flex items-end"
                        onViewportEnter={() => setFocus(project)}
                        viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                        initial={{ opacity: 0, filter: "blur(1px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <Link href={`/works/${project.id}`} className="relative w-[70vw] aspect-[2/1] flex items-center justify-center overflow-hidden">
                            <img
                                src={project.bg1}
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <Media
                                src={project.image1}
                                alt={project.title}
                                className="w-[60vw] z-10 max-h-[90%] object-contain"
                                loading={idx === 0 ? "eager" : "lazy"}
                            />
                        </Link>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="fixed top-[5vh] left-[10vw] w-[80vw] lg:portrait:top-[12vh] lg:portrait:left-[60vw] lg:portrait:w-[35vw] landscape:top-[12vh] landscape:left-[60vw] landscape:w-[35vw] flex flex-col pointer-events-none"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="w-[80vw] lg:portrait:w-[35vw] landscape:w-[35vw] h-[8vh] flex flex-row items-end justify-between pointer-events-auto">
                    <h1 className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">WORKS</h1>
                    <a
                        className="flex items-end justify-center text-[clamp(0.8rem,1vw,1.3rem)] font-light mb-1 hover:underline"
                        href="https://github.com/Aniket982-ux"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => set("hover")}
                        onMouseLeave={() => set("default")}
                    >
                        /Aniket982-ux
                    </a>
                </div>

                <div className="w-[80vw] lg:portrait:w-[35vw] landscape:w-[35vw] h-[1px] bg-[#888888aa]" />

                <div className="mt-[2.5vh] lg:portrait:mt-[4vh] landscape:mt-[4vh] pointer-events-auto max-h-[65vh] overflow-y-auto pr-2">
                    <div className="h-auto overflow-hidden flex flex-row items-center text-[clamp(0.7rem,1vw,1.1rem)] lg:text-[clamp(0.9rem,1.1vw,1.3rem)] font-light tracking-widest mb-3">
                        <div className="w-3 lg:w-4">[</div>
                        <AnimatePresence mode="wait">
                            <motion.div key={focus.id} className="w-[clamp(1.2rem,1.8vw,2.2rem)] flex flex-row">
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-100%" }}
                                    transition={{ duration: 0.225, ease: "easeOut" }}
                                >
                                    0
                                </motion.div>
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-100%" }}
                                    transition={{ duration: 0.225, ease: "easeOut", delay: 0.05 }}
                                >
                                    {focus.id}
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                        <div>/</div>
                        <div className="w-[clamp(1.2rem,1.8vw,2.2rem)] flex justify-end">
                            {String(projects.length).padStart(2, "0")}
                        </div>
                        <div className="w-3 lg:w-4 flex justify-end">]</div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={focus.id}
                            className="flex flex-col w-[80vw] lg:portrait:w-[35vw] landscape:w-[35vw] whitespace-normal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <h2 className="text-[clamp(1rem,1.4vw,1.7rem)] font-light leading-snug">{focus.title}</h2>
                            <h3 className="text-[clamp(0.7rem,0.9vw,1.05rem)] font-light text-[#888888] mt-1">{focus.sub}</h3>
                            <p className="text-[clamp(0.75rem,0.95vw,1.1rem)] font-light mt-3 leading-relaxed opacity-90">{focus.description}</p>
                            
                            <div className="flex flex-row items-center gap-4 mt-4 pt-2">
                                <Link
                                    href={`/works/${focus.id}`}
                                    className="inline-flex items-center gap-1.5 text-[clamp(0.75rem,0.9vw,1rem)] font-light border-b border-current pb-0.5 transition-opacity hover:opacity-70"
                                    onMouseEnter={() => set("hover")}
                                    onMouseLeave={() => set("default")}
                                >
                                    <span>VIEW DETAILS</span>
                                    <span>&rarr;</span>
                                </Link>

                                <a
                                    href={focus.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[clamp(0.75rem,0.9vw,1rem)] font-light text-[#888888] hover:text-white transition-colors"
                                    onMouseEnter={() => set("hover")}
                                    onMouseLeave={() => set("default")}
                                >
                                    <span>SOURCE CODE</span>
                                    <svg width="12" height="12" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.353478" y1="71.3571" x2="71.0642" y2="0.646433" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="6"/>
                                        <line x1="21.707" y1="0.5" x2="71.707" y2="0.5" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="6"/>
                                        <line x1="71.207" y1="50" x2="71.207" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="6"/>
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.main>
    )
}
