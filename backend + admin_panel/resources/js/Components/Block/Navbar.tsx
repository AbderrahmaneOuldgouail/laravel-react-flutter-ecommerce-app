import React from "react";
import { Link, usePage } from "@inertiajs/react";
import Avatar from "../ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const Navbar = () => {
    // @ts-ignore
    const { user } = usePage().props.auth;

    const links = [
        {
            label: "Dashboard",
            route: "admin.dashboard",
            isPage: route().current("admin.dashboard"),
        },
        {
            label: "Gestion d'administrateur",
            route: "admin.admin.index",
            isPage: route().current("admin.admin.*"),
        },
        {
            label: "Gestion de brands",
            route: "admin.brand.index",
            isPage: route().current("admin.brand.*"),
        },
        {
            label: "Gestion de produits",
            route: "admin.product.index",
            isPage: route().current("admin.product.*"),
        },
        {
            label: "Gestion de commandes",
            route: "admin.order.index",
            isPage: route().current("admin.order.*"),
        },
    ];

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-4">
                <div className="lg:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost">Menu</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {links.map((link, idx) => {
                                return (
                                    <React.Fragment key={idx}>
                                        <DropdownMenuItem asChild>
                                            <Link
                                                href={route(link.route)}
                                                className="data-[state=page]:text-blue-700 data-[state=link]:text-gray-900 hover:text-blue-700"
                                                data-state={
                                                    link.isPage
                                                        ? "page"
                                                        : "link"
                                                }
                                            >
                                                {link.label}
                                            </Link>
                                        </DropdownMenuItem>
                                    </React.Fragment>
                                );
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="hidden lg:block">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {links.map((link, idx) => (
                            <li key={idx}>
                                <Link
                                    href={route(link.route)}
                                    className="block py-2 px-3 data-[state=page]:text-blue-700 data-[state=link]:text-gray-900 hover:text-blue-700 md:p-0"
                                    data-state={link.isPage ? "page" : "link"}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        >
                            <Avatar name={user.name} />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <div className="px-2 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">
                                {user.name}
                            </span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                                {user.email}
                            </span>
                        </div>
                        <DropdownMenuItem>Mon site</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link
                                as="button"
                                method="post"
                                href={route("logout")}
                                className="w-full"
                            >
                                Se deconncté
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};

export default Navbar;
