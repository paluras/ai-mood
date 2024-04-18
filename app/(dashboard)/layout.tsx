import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ReactNode } from "react"

interface DashboarLayoutProps {
    children: ReactNode;
}

const links = [
    { href: "/", value: "Home" },
    { href: "/journal", value: "Journal" },
    { href: "/history", value: "History" }

]

const DashboarLayout = ({ children }: DashboarLayoutProps) => {
    return (
        <>
            <div className="h-screen w-screen relative">
                <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-black/10">Mood
                    <div>
                        <ul>
                            {links.map((link) => (
                                <li key={link.value}>

                                    <Link href={link.href} >{link.value}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
                <div className="ml-[200px]">
                    <header className="h-[60px] border-b border-black/10">
                        <div className="h-full w-full px-6 flex items-center justify-end">
                            <UserButton />
                        </div>
                    </header>
                    <div>{children}</div></div>

            </div>

        </>
    )
}

export default DashboarLayout