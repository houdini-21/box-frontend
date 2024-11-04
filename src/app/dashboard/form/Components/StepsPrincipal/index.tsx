"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector, useAppDispatch } from "@/Store";
import { useStep1Logic } from "../Step1/useFormLogic";
import { useStep2Logic } from "../Step2/useFormLogic";
import Step1 from "../Step1";
import Step2 from "../Step2";

const StepsPrincipal = () => {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector((state) => state.step.step);

  const { formikStep1, departments, getMunicipality } = useStep1Logic();
  const { productsList, formikStep2, updateListBox, handleRemoveListBox } =
    useStep2Logic();
  const optionsMunicipality = getMunicipality(
    formikStep1.values.department.value
  );

  return (
    <AnimatePresence mode="wait">
      {currentStep === 1 && (
        <motion.div
          key="step1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <Step1
            formik={formikStep1}
            departments={departments}
            optionsMunicipality={optionsMunicipality}
          />
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
          <Step2
            formik={formikStep2}
            productsList={productsList}
            updateListBox={updateListBox}
            handleRemoveListBox={handleRemoveListBox}
            dispatch={dispatch}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StepsPrincipal;
