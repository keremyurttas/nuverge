"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { menuOptions } from "@/lib/constants";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import {
  Database,
  GitBranch,
  LucideMousePointerClick,
  Menu,
} from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Sidebar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Manage body scroll behavior
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    // Cleanup: ensure scrolling is restored when component unmounts
    return () => {
      document.body.style.overflow = ""; // Reset on unmount
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Menu Button for mobile */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar Navigation */}
      <nav
        className={clsx(
          "fixed left-0 top-0 w-20 z-50 bg-white dark:bg-black h-screen flex flex-col justify-between py-6 px-4 overflow-scroll md:overflow-visible shadow-lg transform transition-transform",
          {
            "translate-x-0": isOpen,
            "-translate-x-full": !isOpen, // Hide sidebar on mobile when closed
            "lg:translate-x-0": true, // Always show sidebar on large screens
          }
        )}
      >
        <div className="flex flex-col items-center gap-8">
          {/* Brand Name */}
          <Link className="flex font-bold text-lg" href="/">
            NuVerge
          </Link>

          {/* Sidebar Menu */}
          <TooltipProvider>
            {menuOptions.map((menuItem) => (
              <ul key={menuItem.name}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <li>
                      <Link
                        href={menuItem.href}
                        className={clsx(
                          "group h-8 w-8 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer",
                          {
                            "dark:bg-[#2F006B] bg-[#EEE0FF] ":
                              pathName === menuItem.href,
                          }
                        )}
                      >
                        <menuItem.Component
                          selected={pathName === menuItem.href}
                        />
                      </Link>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-black/10 backdrop-blur-xl"
                  >
                    <p>{menuItem.name}</p>
                  </TooltipContent>
                </Tooltip>
              </ul>
            ))}
          </TooltipProvider>
          <Separator />

          {/* Icons Section */}
          <div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-auto scrollbar-hide border-[1px]">
            <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
              <LucideMousePointerClick className="dark:text-white" size={18} />
              <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
            </div>
            <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
              <GitBranch className="text-muted-foreground" size={18} />
              <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
            </div>
            <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
              <Database className="text-muted-foreground" size={18} />
              <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
            </div>
            <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
              <GitBranch className="text-muted-foreground" size={18} />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col gap-8">
          <ModeToggle />
        </div>
      </nav>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
