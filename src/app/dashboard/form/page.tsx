"use client";
import { useAppSelector } from "@/Store";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import { motion, AnimatePresence } from "framer-motion";

export default function Step1Page() {
  const currentStep = useAppSelector((state) => state.step.step);

  return (
    <div className="w-full flex flex-col lg:p-4 p-0">
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Step1 />
          </motion.div>
        )}
        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Step2 />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
