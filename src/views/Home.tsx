"use client";

import { motion } from "framer-motion";
import { useCursorStore } from "../store/useCursorStore";
import ParallaxImage from "../components/parallax-image";
import Link from "next/link";
import { useThemeStore } from "../store/useThemeStore";
import { GitHubSvg, LinkedInSvg, LeetCodeSvg, InstagramSvg } from "../components/navigation/contact";

const item = {
    initial: { y: "2rem", opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.2, 1, 0.4, 1] as const
        }
    },
};

export default function Home() {
    const set = useCursorStore((state) => state.setCursorType);
    const { theme } = useThemeStore();

    return (
        <motion.main
            className="pb-[10vh] overflow-y-scroll snap-y snap-mandatory"
            exit={{ opacity: 0, filter: "blur(1px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* about */}
            <motion.section
                className="relative w-screen pt-[15vh] pl-[10vw] flex flex-col lg:pt-[12vh] lg:pl-[15vw] lg:flex-row lg:items-center lg:gap-[8vw] snap-center"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
                <div className="w-[80vw] lg:w-[35vw] lg:min-h-[clamp(22rem,65vh,42rem)] flex flex-col items-start justify-between font-light leading-none">
                    <div>
                        <div className="text-[clamp(3rem,6.5vw,7rem)] md:text-[clamp(4rem,7vw,8rem)] font-light lg:font-thin">
                            <div className="h-auto overflow-hidden">
                                <motion.h1
                                    className="flex gap-[clamp(0.1rem,0.2vw,0.2rem)]"
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    transition={{
                                        staggerChildren: 0.08,
                                        delayChildren: 0.7,
                                    }}
                                >
                                    <motion.span variants={item}>A</motion.span>
                                    <motion.span variants={item}>N</motion.span>
                                    <motion.span variants={item}>I</motion.span>
                                    <motion.span variants={item}>K</motion.span>
                                    <motion.span variants={item}>E</motion.span>
                                    <motion.span variants={item}>T</motion.span>
                                </motion.h1>
                            </div>
                            <div className="h-auto overflow-hidden">
                                <motion.h1
                                    className="flex gap-[clamp(0.1rem,0.2vw,0.2rem)]"
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    transition={{
                                        staggerChildren: 0.08,
                                        delayChildren: 1,
                                    }}
                                >
                                    <motion.span variants={item}>T</motion.span>
                                    <motion.span variants={item}>R</motion.span>
                                    <motion.span variants={item}>I</motion.span>
                                    <motion.span variants={item}>P</motion.span>
                                    <motion.span variants={item}>A</motion.span>
                                    <motion.span variants={item}>T</motion.span>
                                    <motion.span variants={item}>H</motion.span>
                                    <motion.span variants={item}>I</motion.span>
                                </motion.h1>
                            </div>
                        </div>

                        <div className="text-[clamp(0.85rem,1.2vw,1.4rem)] pl-1 lg:pl-2 mt-2 leading-relaxed text-[#888888]">
                            <p className={theme === "dark" ? "text-white" : "text-black"}>AI / ML Engineer</p>
                            <p>Agentic AI &amp; GenAI</p>
                            <p>Distributed Systems &amp; Deep Learning</p>
                        </div>
                    </div>

                    <div className="pl-1 mt-[6vh] lg:pl-2 flex flex-col items-start justify-start text-[clamp(0.8rem,1.1vw,1.3rem)] leading-tight">
                        <p className="text-[#888888]">For inquiries, email me at</p>
                        <Email />

                        <div className="mt-5 flex flex-col gap-2">
                            <p className="text-[clamp(0.6rem,0.75vw,0.85rem)] tracking-widest font-mono text-[#888888]">CONNECT / PROFILES</p>
                            <div className="flex flex-row items-center gap-2.5">
                                <a
                                    href="https://github.com/Aniket982-ux"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-9 h-9 md:w-10 md:h-10 border border-[#88888855] rounded-lg flex items-center justify-center text-base md:text-lg transition-all duration-300 ${theme === "dark" ? "hover:bg-white/10 hover:border-white text-white" : "hover:bg-black/10 hover:border-black text-black"}`}
                                    onMouseEnter={() => set("hover")}
                                    onMouseLeave={() => set("default")}
                                    aria-label="GitHub Profile"
                                >
                                    <GitHubSvg />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/aniket-tripathi-516228369"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-9 h-9 md:w-10 md:h-10 border border-[#88888855] rounded-lg flex items-center justify-center text-base md:text-lg transition-all duration-300 ${theme === "dark" ? "hover:bg-white/10 hover:border-white text-white" : "hover:bg-black/10 hover:border-black text-black"}`}
                                    onMouseEnter={() => set("hover")}
                                    onMouseLeave={() => set("default")}
                                    aria-label="LinkedIn Profile"
                                >
                                    <LinkedInSvg />
                                </a>
                                <a
                                    href="https://leetcode.com/u/MDI08Wf8Ej/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-9 h-9 md:w-10 md:h-10 border border-[#88888855] rounded-lg flex items-center justify-center text-base md:text-lg transition-all duration-300 ${theme === "dark" ? "hover:bg-white/10 hover:border-white text-white" : "hover:bg-black/10 hover:border-black text-black"}`}
                                    onMouseEnter={() => set("hover")}
                                    onMouseLeave={() => set("default")}
                                    aria-label="LeetCode Profile"
                                >
                                    <LeetCodeSvg />
                                </a>
                                <a
                                    href="https://www.instagram.com/aniket64626"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-9 h-9 md:w-10 md:h-10 border border-[#88888855] rounded-lg flex items-center justify-center text-base md:text-lg transition-all duration-300 ${theme === "dark" ? "hover:bg-white/10 hover:border-white text-white" : "hover:bg-black/10 hover:border-black text-black"}`}
                                    onMouseEnter={() => set("hover")}
                                    onMouseLeave={() => set("default")}
                                    aria-label="Instagram Profile"
                                >
                                    <InstagramSvg />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[38vw] lg:min-h-[clamp(22rem,65vh,42rem)] flex flex-col items-start justify-end mt-10 lg:mt-0">
                    {/* Education Badge Card */}
                    <div className="flex items-center gap-3.5 mb-5">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden border border-[#88888844] bg-[#1a1a1a] flex-shrink-0">
                            <img src="/profile.jpg" alt="Aniket Tripathi" className="w-full h-full object-cover object-[center_15%]" />
                        </div>
                        <div className="flex flex-col gap-0.5 font-mono">
                            <span className="text-[clamp(0.65rem,0.8vw,0.85rem)] tracking-widest text-[#888888]">NIT JSR</span>
                            <span className="text-[clamp(0.85rem,1.1vw,1.15rem)] font-normal">B.Tech ECE&apos;27</span>
                            <span className="w-fit text-[0.65rem] md:text-[0.7rem] px-2 py-0.5 rounded bg-[#222222] border border-[#444444] text-[#cccccc] font-mono tracking-wider">
                                CGPA <strong className="text-white">8.36</strong>
                            </span>
                        </div>
                    </div>

                    <div className="h-[6vh] lg:h-[8vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
                        <h1>ABOUT ME</h1>
                    </div>

                    <div className="w-[80vw] lg:w-[38vw] h-[1px] bg-[#888888aa]" />

                    <div className="w-[80vw] lg:w-[38vw] flex flex-col pt-[3vh] lg:pt-[clamp(1rem,4vh,2rem)] text-[clamp(0.75rem,0.95vw,1.15rem)] tracking-[0.05rem] font-light gap-2.5 leading-[clamp(1.2rem,2.5vh,1.6rem)]">
                        <p>I am currently pursuing my B.Tech in Electronics and Communications Engineering at National Institute of Technology, Jamshedpur (2023 &ndash; 2027, CGPA 8.36).</p>
                        <p>My primary focus is Distributed Deep Learning systems, Reinforcement Learning (GRPO), Agentic AI, and Cloud Infrastructure. I specialize in building large models and training pipelines from scratch, including custom 3D-parallel Transformers and self-improving multi-agent environments.</p>
                        <p>I enjoy exploring resilient distributed backend architectures, scalable agent workflows, and automated MLOps pipelines.</p>
                    </div>
                </div>
            </motion.section>

            {/* experience & achievements */}
            <motion.section
                className="relative w-screen pt-[8vh] pl-[10vw] lg:pt-[clamp(5rem,12vh,8rem)] lg:pl-[15vw] flex flex-col lg:flex-row lg:items-center lg:gap-[8vw] snap-center"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="w-[80vw] lg:w-[38vw] flex flex-col items-start justify-start font-light">
                    <div className="h-[8vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
                        <h1>EXPERIENCE</h1>
                    </div>

                    <div className="w-[80vw] lg:w-[38vw] h-[1px] bg-[#888888aa]" />

                    <div className="w-[80vw] lg:w-[38vw] flex flex-col pt-[2.5vh] text-[clamp(0.75rem,0.95vw,1.15rem)] tracking-[0.05rem] font-light gap-3 leading-[clamp(1.2rem,2.5vh,1.6rem)]">
                        <div>
                            <div className="flex flex-row justify-between items-baseline">
                                <h3 className="font-normal text-[clamp(0.85rem,1.1vw,1.25rem)]">AI/ML Intern (Remote)</h3>
                                <span className="font-mono text-xs text-[#888888]">Dec 2025 &ndash; Jan 2026</span>
                            </div>
                            <p className="text-[#888888] text-[clamp(0.7rem,0.85vw,1rem)]">Akai Limited (EdTech Startup, Hong Kong)</p>
                        </div>
                        <p>&bull; Designed and implemented an agentic RAG pipeline using LangChain and LangGraph for adaptive tutoring and smart content generation.</p>
                        <p>&bull; Integrated and evaluated real-time TTS/STT pipelines across Deepgram, ElevenLabs, and Whisper for conversational voice interactions.</p>
                        <p>&bull; Debugged and optimized backend workflows, improving system accuracy by 10% and reducing latency by 10ms.</p>

                        <div className="w-[80vw] lg:w-[38vw] h-[1px] bg-[#888888aa] my-2" />

                        <div className="flex flex-col gap-2">
                            <h3 className="font-normal text-[clamp(0.85rem,1.1vw,1.25rem)]">HONORS &amp; ACHIEVEMENTS</h3>
                            <p className="text-[clamp(0.7rem,0.9vw,1.05rem)] text-[#cccccc]">&bull; Finalist &ndash; Meta &times; Scaler Hackathon, Bengaluru (backed by PyTorch &amp; Hugging Face) &ndash; 2025</p>
                            <p className="text-[clamp(0.7rem,0.9vw,1.05rem)] text-[#cccccc]">&bull; Semi-Finalist &ndash; Google Cloud GenAI Exchange Hackathon (270,000+ developers) &ndash; 2025</p>
                            <p className="text-[clamp(0.7rem,0.9vw,1.05rem)] text-[#cccccc]">&bull; 3rd Place &ndash; HackHorizon (2024)</p>
                            <p className="text-[clamp(0.7rem,0.9vw,1.05rem)] text-[#cccccc]">&bull; 3rd Place &ndash; TensorsCoded, OJASS&apos;25 (2025)</p>
                        </div>
                    </div>
                </div>

                <ParallaxImage
                    src="/wallhaven-85p79o_1920x1080.png"
                    alt="Musashi Miyamoto"
                    classname="mt-[5vh] w-[80vw] aspect-[8/5] lg:w-[35vw] lg:aspect-[8/5] flex items-center justify-center overflow-hidden rounded-sm"
                    hover="default"
                />
            </motion.section>

            {/* skills */}
            <motion.section
                className="relative w-screen pt-[6vh] pl-[10vw] lg:pt-[clamp(2rem,6vh,5rem)] lg:pl-[15vw] flex flex-col snap-center pb-[10vh]"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="w-[80vw] lg:w-[75vw] flex flex-col items-start justify-start">
                    <div className="h-[8vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
                        <h1>SKILLS</h1>
                    </div>

                    <div className="w-[80vw] lg:w-[75vw] h-[1px] bg-[#888888aa]" />

                    <div className="mt-[4vh] w-[80vw] lg:w-[75vw] flex flex-col items-start justify-start gap-8 lg:flex-row lg:items-start lg:justify-between">
                        {/* ML & DL */}
                        <div className="flex flex-col w-[80vw] lg:w-[24vw] gap-3 font-light">
                            <div className="text-[clamp(0.95rem,1.3vw,1.6rem)] tracking-wide">
                                <h2>ML &amp; DEEP LEARNING</h2>
                            </div>
                            <div className="w-full text-[clamp(0.75rem,0.95vw,0.95rem)] flex flex-wrap gap-1.5">
                                {["PyTorch", "Scikit-learn", "Transformers", "Diffusion Models", "GANs", "Distributed Training (3D)", "RL (GRPO)", "NLP", "Computer Vision (ViT)", "Joint Latent Fusion", "CUDA & Mixed Precision"].map((val, i) => (
                                    <p key={i} className={`w-fit h-fit py-1 px-3.5 m-0.5 border border-[#88888877] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>{val}</p>
                                ))}
                            </div>
                        </div>

                        {/* GenAI & LLMs */}
                        <div className="flex flex-col w-[80vw] lg:w-[24vw] gap-3 font-light">
                            <div className="text-[clamp(0.95rem,1.3vw,1.6rem)] tracking-wide">
                                <h2>GENAI &amp; AGENTIC LLMS</h2>
                            </div>
                            <div className="w-full text-[clamp(0.75rem,0.95vw,0.95rem)] flex flex-wrap gap-1.5">
                                {["Agentic RAG", "LangChain", "LangGraph", "Google ADK", "Fine-Tuning (LoRA / QLoRA)", "Hugging Face", "Model Context Protocol (MCP)", "Voice AI (Whisper, ElevenLabs)", "Prompt Engineering", "Vector Stores"].map((val, i) => (
                                    <p key={i} className={`w-fit h-fit py-1 px-3.5 m-0.5 border border-[#88888877] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>{val}</p>
                                ))}
                            </div>
                        </div>

                        {/* Systems, MLOps & Languages */}
                        <div className="flex flex-col w-[80vw] lg:w-[24vw] gap-3 font-light">
                            <div className="text-[clamp(0.95rem,1.3vw,1.6rem)] tracking-wide">
                                <h2>BACKEND, MLOPS &amp; CLOUD</h2>
                            </div>
                            <div className="w-full text-[clamp(0.75rem,0.95vw,0.95rem)] flex flex-wrap gap-1.5">
                                {["FastAPI", "Apache Airflow", "Kafka", "Docker", "MLflow", "DVC Pipelines", "Weights & Biases", "GitHub Actions", "Python", "Java", "SQL", "GCP & Azure"].map((val, i) => (
                                    <p key={i} className={`w-fit h-fit py-1 px-3.5 m-0.5 border border-[#88888877] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>{val}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="ml-auto flex flex-row items-center gap-8 mt-[10vh]">
                        <Link
                            href="/works"
                            className="flex flex-row items-center justify-center gap-2 text-[clamp(1rem,1.5vw,2rem)] font-light hover:opacity-75 transition-opacity"
                            onMouseEnter={() => set("hover")}
                            onMouseLeave={() => set("default")}
                        >
                            <span>WORKS</span>
                            <span>
                                <svg width="clamp(1rem,1.5vw,2rem)" height="clamp(1rem,1.5vw,2rem)" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.204656" y1="50.2071" x2="100.205" y2="50.2071" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                                    <line x1="65.4073" y1="15.2028" x2="100.763" y2="50.5581" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                                    <line x1="65.4073" y1="85.2064" x2="100.763" y2="49.851" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                                </svg>
                            </span>
                        </Link>
                        <Link
                            href="/gallery"
                            className="flex flex-row items-center justify-center gap-2 text-[clamp(1rem,1.5vw,2rem)] font-light hover:opacity-75 transition-opacity"
                            onMouseEnter={() => set("hover")}
                            onMouseLeave={() => set("default")}
                        >
                            <span>ANIME</span>
                            <span>
                                <svg width="clamp(1rem,1.5vw,2rem)" height="clamp(1rem,1.5vw,2rem)" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.204656" y1="50.2071" x2="100.205" y2="50.2071" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                                    <line x1="65.4073" y1="15.2028" x2="100.763" y2="50.5581" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                                    <line x1="65.4073" y1="85.2064" x2="100.763" y2="49.851" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </motion.section>
        </motion.main>
    )
}

function Email() {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <a
            href="mailto:anikettripathi19012005@gmail.com"
            aria-label="Send an email to Aniket Tripathi"
            className="hover:underline mt-1"
            onMouseEnter={() => set("hover")}
            onMouseLeave={() => set("default")}
        >
            anikettripathi19012005@gmail.com
        </a>
    )
}
