type Props = {
    src?: string | null,
    alt?: string,
    className?: string,
    loading?: "eager" | "lazy" | undefined
}

export default function Media({ src, alt, className, loading = undefined }: Props) {
    if (!src) return null;

    const ext = src.split(".").pop()?.toLowerCase();

    if (ext === "mp4" || ext === "webm" || ext === "ogg") {
        return (
            <video
                src={src}
                className={className}
                preload="auto"
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
            />
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading={loading}
            decoding="async"
        />
    );
}
