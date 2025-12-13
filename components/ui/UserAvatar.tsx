import Image from "next/image"

type Props = {
    src ?: string | null | undefined,
    name : string,
    size ?: "sm" | "md" | "lg" | "xl"
};

const sizeClasses = {
    sm : "w-8 h-8 text-sm",
    md : "w-12 h-12 text-base",
    lg : "w-16 h-16 text-lg",
    xl : "w-24 h-24 text-2xl"
};

export default function UserAvatar({ src, name, size = "md" } : Props) {
    const initials = name
        .split(' ')
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
        
    if(src) {
        return(
            <Image
                src={src}
                alt={name}
                width={size === "sm" ? 32 : size === "md" ? 48 : size === "lg" ? 64 : 96}
                height={size === "sm" ? 32 : size === "md" ? 48 : size === "lg" ? 64 : 96}
                unoptimized
            />
        )
    }

    return(
        <div className={`${sizeClasses[size]} rounded-full bg-purple-500 text-white flex items-center justify-center font-semibold`}>
            {initials}
        </div>
    )
}