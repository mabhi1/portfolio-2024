import { IconBook2, IconCalendar } from "@tabler/icons-react";
import Image from "next/image";

function EducationTab() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="flex gap-3 items-end">
          <Image src="/qualification/aktu.png" width={50} height={50} alt="UPTU" />
          <div>
            <div>Bachelor&apos;s in Computer Science</div>
            <div>AKTU, India</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IconBook2 className="w-4 h-4" />
          Courses - Data Structures, Algorithms, Web Technology, Computer Networks, DBMS
        </div>
        <div className="flex items-center gap-2">
          <IconCalendar className="w-4 h-4" />
          2013 - 2017
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="space-y-2">
        <div className="flex gap-3 items-end">
          <Image src="/qualification/stevens.gif" width={50} height={50} alt="Stevens" />
          <div>
            <div>Master&apos;s in Computer Science</div>
            <div>Stevens, India</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IconBook2 className="w-4 h-4" />
          Courses - Web Programming (Back-End), Distributed Systems and cloud computing DBMS, Web Programming 2
          (Front-End), Mobile systems and applications, Algorithms
        </div>
        <div className="flex items-center gap-2">
          <IconCalendar className="w-4 h-4" />
          2021 - 2022
        </div>
      </div>
    </div>
  );
}
export default EducationTab;
