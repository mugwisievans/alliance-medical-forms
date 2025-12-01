import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import Stepper from "../components/Stepper";
import MTMStep0Top from "../forms/mtm/Step0Top";
import MTMStep1Personal from "../forms/mtm/Step1Personal";
import MTMStep2Dependants from "../forms/mtm/Step2Dependants";
import MTMStep3Cover from "../forms/mtm/Step3Cover";
import MTMStep4MedicalHistory from "../forms/mtm/Step4MedicalHistory";
import MTMStep4MedicalHistory2 from "../forms/mtm/Step4MedicalHistory2";
import MTMStep5Lifestyle from "../forms/mtm/Step5Lifestyle";
import MTMStep6Declaration from "../forms/mtm/Step6Declaration";

const steps = [
  "Start",
  "Personal Details",
  "Dependants",
  "Cover Selection",
  "Medical History",
  "Medical History (Part 2)",
  "Lifestyle",
  "Declaration",
];

export default function MTMForm() {
  const methods = useForm({});
  const { handleSubmit } = methods;

  const [step, setStep] = useState(0);

  const stepComponents = [
    MTMStep0Top,
    MTMStep1Personal,
    MTMStep2Dependants,
    MTMStep3Cover,
    MTMStep4MedicalHistory,
    MTMStep4MedicalHistory2,
    MTMStep5Lifestyle,
    MTMStep6Declaration,
  ];

  const CurrentStepComponent = stepComponents[step];

  const isLast = step === steps.length - 1;

  const onSubmit = (data) => {
    if (!isLast) {
      setStep(step + 1);
      return;
    }
    console.log("MTM Application Submitted:", data);
    alert("MTM Application Submitted!");
  };

  return (
    <div className="min-h-screen bg-grayBg p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-10">

        <FormProvider {...methods}>
          <Stepper steps={steps} currentStep={step} />

          <form onSubmit={handleSubmit(onSubmit)}>

            <CurrentStepComponent />

            <div className="flex justify-between mt-10">
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                disabled={step === 0}
                className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg disabled:opacity-50"
              >
                Back
              </button>

              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryLight transition"
              >
                {isLast ? "Submit Application" : "Next"}
              </button>
            </div>

          </form>
        </FormProvider>

      </div>
    </div>
  );
}
