import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import Stepper from "../components/Stepper";

import Section0Top from "../forms/northern/Section0Top";
import NorthernStep1Personal from "../forms/northern/Step1Personal";
import NorthernStep2Dependants from "../forms/northern/Step2Dependants";
import NorthernStep3Commencement from "../forms/northern/Step3Commencement";
import NorthernStep4Medical from "../forms/northern/Step4Medical";
import NorthernStep5Declaration from "../forms/northern/Step5Declaration";

const steps = [
  "Start",
  "Personal Details",
  "Dependants",
  "Commencement & Bank",
  "Medical Questionnaire",
  "Declaration",
];

export default function NorthernForm() {
  const methods = useForm();
  const [step, setStep] = useState(0);

  const components = [
    Section0Top,
    NorthernStep1Personal,
    NorthernStep2Dependants,
    NorthernStep3Commencement,
    NorthernStep4Medical,
    NorthernStep5Declaration,
  ];

  const CurrentStepComponent = components[step];

  const isLast = step === components.length - 1;

  const onSubmit = (data) => {
    if (!isLast) {
      setStep(step + 1);
      return;
    }
    console.log("Final Submission Data:", data);
    alert("Application Submitted!");
  };

  return (
    <div className="min-h-screen bg-grayBg py-10">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="max-w-5xl mx-auto space-y-8">

            {/* STEPPER */}
            <div className="bg-white p-6 rounded-xl shadow">
              <Stepper steps={steps} currentStep={step} />
            </div>

            {/* FORM CONTENT */}
            <div className="bg-white p-10 rounded-xl shadow">
              <CurrentStepComponent />
            </div>

            {/* BUTTONS */}
            <div className="flex justify-between max-w-5xl mx-auto">
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
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
