import { QualificationTabs } from "@/components/layout/qualification-tabs";

const QualificaionPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-8 h-full pt-10 md:p-10">
      <div className="text-xl uppercase">Qualifications</div>
      <QualificationTabs />
    </div>
  );
};
export default QualificaionPage;
