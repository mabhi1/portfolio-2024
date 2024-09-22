"use client";

import { Tabs } from "../ui/tabs";
import EducationTab from "./education-tab";
import WorkTab from "./work-tab";

export function QualificationTabs() {
  const tabs = [
    {
      title: "Education",
      value: "Education",
      content: (
        <div className="w-full overflow-auto relative h-full rounded-2xl p-10 border bg-background">
          <EducationTab />
        </div>
      ),
    },
    {
      title: "Work",
      value: "Work",
      content: (
        <div className="w-full overflow-auto relative h-full rounded-2xl p-10 border bg-background">
          <WorkTab />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[35rem] md:h-[50rem] lg:h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto w-full items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}
