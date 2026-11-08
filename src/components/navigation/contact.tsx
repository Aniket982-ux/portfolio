import { useCursorStore } from "../../store/useCursorStore";

export default function Contact() {
    return (
        <>
            <div className="lg:hidden flex flex-row items-end justify-center gap-3 text-[clamp(0.4rem,1.5vw,1.5rem)] font-extralight">
                <IconLink url="https://github.com/Aniket982-ux" label="Visit GitHub profile">
                    <GitHubSvg />
                </IconLink>
                <IconLink url="https://www.linkedin.com/in/aniket-tripathi-516228369" label="Visit LinkedIn profile">
                    <LinkedInSvg />
                </IconLink>
                <IconLink url="https://leetcode.com/u/MDI08Wf8Ej/" label="Visit LeetCode profile">
                    <LeetCodeSvg />
                </IconLink>
                <IconLink url="https://www.instagram.com/aniket64626" label="Visit Instagram profile">
                    <InstagramSvg />
                </IconLink>
            </div>

            <div className="hidden lg:flex lg:flex-col lg:items-start lg:gap-2.5 lg:pt-5 lg:text-[clamp(1rem,1.5vw,1.5rem)] lg:font-extralight">
                <IconLink url="https://github.com/Aniket982-ux" label="Visit GitHub profile">
                    <GitHubSvg />
                </IconLink>
                <IconLink url="https://www.linkedin.com/in/aniket-tripathi-516228369" label="Visit LinkedIn profile">
                    <LinkedInSvg />
                </IconLink>
                <IconLink url="https://leetcode.com/u/MDI08Wf8Ej/" label="Visit LeetCode profile">
                    <LeetCodeSvg />
                </IconLink>
                <IconLink url="https://www.instagram.com/aniket64626" label="Visit Instagram profile">
                    <InstagramSvg />
                </IconLink>
            </div>
        </>
    )
}

type Props = {
    children: React.ReactNode,
    url: string,
    label: string,
}

function IconLink({ children, url, label }: Props) {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <a
            href={url}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-opacity hover:opacity-70"
            onMouseEnter={() => set("hover")}
            onMouseLeave={() => set("default")}
        >
            {children}
        </a>
    )
}

export function GitHubSvg() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
    )
}

export function LinkedInSvg() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    )
}

export function LeetCodeSvg() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.815 3.93 5.861 5.861 0 0 0 2.709-.343 5.658 5.658 0 0 0 1.486-1.043l3.664-3.692a1.372 1.372 0 1 0-1.947-1.933l-3.659 3.68c-.562.563-1.28.84-2.09.772a2.964 2.964 0 0 1-1.786-.882 2.901 2.901 0 0 1-.614-2.45c.139-.762.577-1.412 1.17-1.806l3.824-4.09 5.312-5.7a1.37 1.37 0 0 0-.96-2.348z" />
            <path d="M9.833 13.921a1.373 1.373 0 0 0-1.373 1.373v.005a1.373 1.373 0 1 0 2.746 0v-.005a1.373 1.373 0 0 0-1.373-1.373zm9.838-3.056H11.23a1.372 1.372 0 1 0 0 2.744h8.441a1.372 1.372 0 1 0 0-2.744z" />
        </svg>
    )
}

export function InstagramSvg() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    )
}
