"use client";

import { cn } from "@/lib/utils";
import { IconExternalLink, IconTextPlus } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  project: { imageSrc, title, description, demoLink, knowMoreLink },
}: {
  project: { imageSrc: string; title: string; description: string; demoLink: string; knowMoreLink: string };
}) {
  return (
    <div className="w-fit group/card overflow-hidden">
      <div
        className={cn(
          "relative border overflow-hidden relative card h-40 rounded-md shadow-xl w-80 backgroundImage flex flex-col justify-between p-4 bg-cover",
        )}
      >
        <Image src={imageSrc} width={1200} height={1000} alt={title} className="absolute top-0 left-0 w-full h-full"/>
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="group-hover/card:flex flex-row items-center space-x-4 z-10 hidden">
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">{title}</p>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
        </div>
        <div className="text content hidden group-hover/card:flex z-10 justify-between">
          <a href={demoLink} target="_blank">
            <button className="flex gap-1 items-center shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
              Demo
              <IconExternalLink className="w-4 h-4" />
            </button>
          </a>
          <Link href={knowMoreLink} legacyBehavior passHref>
            <button className="flex gap-1 items-center px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
              More
              <IconTextPlus className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
