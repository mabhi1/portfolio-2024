import { QualificationTabs } from "@/components/layout/qualification-tabs";
import Image from "next/image";

const QualificaionPage = () => {
  return (
    <div className="flex flex-col gap-8 h-full relative">
      <div className="text-xl uppercase mt-10">Qualifications</div>
      <Image
        src="/qualification/qualification-bg.webp"
        height={200}
        width={200}
        alt="Qualifications"
        className="w-80 absolute top-5 right-0 z-20"
      />
      <QualificationTabs />
    </div>
  );
};
export default QualificaionPage;
