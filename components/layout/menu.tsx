"use client";

import React, { useEffect, useState } from "react";
import { ResumeLink, Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { routes } from "@/lib/routes";
import { ModeToggle } from "./mode-toggle";
import { Button } from "../ui/button";
import { Pin, PinOff } from "lucide-react";
import { useBreakpoint } from "../providers/breakpoint-provider";

export function Menu() {
  const isLargeScreen = useBreakpoint(768);
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState(false);

  useEffect(() => {
    if (isLargeScreen) {
      setPin(true);
      setOpen(true);
    }
  }, [isLargeScreen]);

  return (
    <Sidebar open={open} setOpen={setOpen} pin={pin}>
      <SidebarBody className="justify-between gap-10 pl-5 h-screen">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <div className="h-10 flex flex-col justify-center">
            {open ? <Logo setPin={setPin} setOpen={setOpen} pin={pin} isLargeScreen={isLargeScreen} /> : <LogoIcon />}
          </div>
          <div className="mt-8 flex flex-col gap-2">
            {routes.map((route, idx) => (
              <SidebarLink key={idx} link={route} />
            ))}
            <ResumeLink />
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Abhishek Mishra",
              href: "/",
              image: <Image src="/profile.png" width={20} height={20} alt="Profile" />,
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
export const Logo = ({
  pin,
  setPin,
  setOpen,
  isLargeScreen,
}: {
  pin: boolean;
  setPin: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLargeScreen: boolean;
}) => {
  return (
    <div className="flex md:justify-between items-center gap-5">
      <Link href="/" className="font-normal flex space-x-2 items-center text-xl uppercase py-1 relative z-20">
        <Image src="/logo.webp" alt="Portfolio" height={30} width={30} />
        <motion.span className="whitespace-pre">Portfolio</motion.span>
      </Link>
      <div className="flex gap-1">
        {isLargeScreen && (
          <Button
            className="ml-auto text-foreground hidden md:inline-flex"
            variant="outline"
            size="icon"
            onClick={() => {
              setPin((pin) => !pin);
              setOpen(true);
            }}
          >
            {pin ? <PinOff className="h-[1.2rem] w-[1.2rem]" /> : <Pin className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export const LogoIcon = () => {
  return (
    <Link href="/" className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20">
      <div className="h-5 w-6 bg-primary rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
