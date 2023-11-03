"use client";
import { Navlinks } from "@/Constants/NavLinks";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
    const pathName = usePathname();
    return (
        <div className="flex justify-between items-center bg-[#161D2F] h-[60px] px-5">
            <Link href="/">
                <Image src={"/logo.svg"} alt="logo" width={20} height={20} className="w-[20px] h-[20px]" />
            </Link>
            <div className="flex gap-6">
                {Navlinks.map(link => (
                    <Link key={nanoid()} href={link.href}>
                        <Image
                            src={pathName === link.href ? link.imgActive : link.img}
                            alt={link.alt}
                            height={20}
                            width={20}
                            className="w-[20px] h-[20px]"
                        />
                    </Link>
                ))}
            </div>
            <Image src={"/image-avatar.png"} alt="profile-picture" height={20} width={20} />
        </div>
    );
};
