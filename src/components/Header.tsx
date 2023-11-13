import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

// import {  SignUpButton, UserButton } from "@clerk/nextjs";

import Link from "next/link";

export function Header() {

    return (
        <header>
            <nav className="shadow">
                <div className="px-8 mx-auto max-w-7xl">
                    <div className="flex items-center justify-between h-16">

                        <div className="block">
                            <Link className="flex-shrink-0" href="/">
                                Authorization with Clerk + Nextjs
                            </Link>
                        </div>

                        <div className="hidden sm:block">
                            <div className="flex items-baseline ml-10 space-x-4">
                                <Link className="hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium" href="/">
                                    Home
                                </Link>
                                <Link className="hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium" href="/about">
                                    About
                                </Link>
                                <Link className=" hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium" href="/contact">
                                    Contact
                                </Link>
                            </div>
                        </div>

                        <div className="flex w-[180px] flex-row justify-between items-center">

                            <UserButton userProfileUrl="/profile" afterSignOutUrl="/" />
                            <SignInButton />
                            <SignUpButton />
                        </div>

                    </div>
                </div>
            </nav>
        </header>

    )
}