"use client";
import { useAppSelector } from "@/Store";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";

export default function Step1Page() {
  const currentStep = useAppSelector((state) => state.step.step);

  return (
    <div className="w-full flex flex-col lg:p-4 p-0">
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
    </div>
  );
}
