import React from "react";
import { useFormContext } from "react-hook-form";

export default function NorthernStep4Medical() {
  const { register } = useFormContext();

  // Helper Yes/No component
  const YesNo = ({ name }) => (
    <div className="flex items-center space-x-6">
      <label className="flex items-center space-x-1">
        <input
          type="radio"
          value="Yes"
          {...register(name)}
          className="w-4 h-4 accent-northernHeading"
        />
        <span>Yes</span>
      </label>

      <label className="flex items-center space-x-1">
        <input
          type="radio"
          value="No"
          {...register(name)}
          className="w-4 h-4 accent-northernHeading"
        />
        <span>No</span>
      </label>
    </div>
  );

  return (
    <div className="space-y-10">
      {/* Heading */}
      <div className="bg-northernHeading text-white px-4 py-2 rounded-lg font-semibold text-lg">
        7. Medical Questionnaire
      </div>

      <div className="bg-sectionBg border border-northernBorder p-6 rounded-lg space-y-6">

        <p className="text-sm text-gray-700 leading-relaxed">
          Please answer the following questions by ticking Yes or No.  
          Where You have ticked Yes, please provide full details below.
        </p>

        {/* QUESTION BLOCKS */}
        <div className="space-y-6 text-gray-900">

          {/* 1 */}
          <div className="flex justify-between items-start">
            <p className="w-3/4">1. Has your weight, the weight of your spouse or any of your adult dependants applying for cover changed by more than 5kgs in the past year?</p>
            <YesNo name="q1_weightChange" />
          </div>

          {/* 2 */}
          <div className="flex justify-between items-start">
            <p className="w-3/4">2. Are you or any of your dependants using any routinely prescribed medication?</p>
            <YesNo name="q2_medication" />
          </div>

          {/* 3 */}
          <div className="flex justify-between items-start">
            <p className="w-3/4">
              3. Has any parent or sibling or any proposed member wanting cover, ever suffered from porphyria, cancer, mental illness, retinitis pigmentosa, diabetes, stroke, chest pain, high cholesterol or any other hereditary disorder or condition?
            </p>
            <YesNo name="q3_familyHistory" />
          </div>

          {/* 4 */}
          <div className="flex justify-between items-start">
            <p className="w-3/4">
              4. Are you or any proposed members pregnant or planning on falling pregnant?
            </p>
            <YesNo name="q4_pregnant" />
          </div>

          {/* 5 */}
          <div className="flex justify-between items-start">
            <p className="w-3/4">
              5. Do you or any proposed members smoke, if yes, how many per day?
            </p>
            <YesNo name="q5_smoke" />
          </div>

          {/* 6 */}
          <div className="flex justify-between items-start">
            <p className="w-3/4">
              6. Have you or any of the proposed members received medical advice for the reduction of alcohol consumption?
            </p>
            <YesNo name="q6_alcohol" />
          </div>

          {/* 7 – Multi-part */}
          <div className="space-y-4">
            <p className="font-semibold">
              7. Have you or any proposed members suffered from / been treated for / currently suffered from medical conditions relating to any of the following:
            </p>

            {/* a-n list */}
            {[
              ["a", "Central & / Peripheral Nervous System (stroke, brain disorders, Parkinson’s, epilepsy, etc.)"],
              ["b", "Eye & Hearing Disorders (cataracts, retinitis, hearing issues, glaucoma, etc.)"],
              ["c", "Cardiovascular Disorders (angina, hypertension, heart disease, arrhythmias, etc.)"],
              ["d", "Respiratory Disorders (asthma, emphysema, bronchitis, pneumonia, etc.)"],
              ["e", "Gastro-intestinal Disorders (ulcers, hernia, liver, pancreas, bowel issues, etc.)"],
              ["f", "Kidney or Urinary Disorders (nephritis, renal failure, dialysis, etc.)"],
              ["g", "Gynaecology (ovarian cysts, fibroids, endometriosis, etc.)"],
              ["h", "Breast Abnormalities (lumps, mastitis, growths, etc.)"],
              ["i", "Endocrine Disorders (diabetes, thyroid disorders, etc.)"],
              ["j", "Autoimmune Disorders (lupus, scleroderma, HIV, etc.)"],
              ["k", "Musculoskeletal Disorders (arthritis, osteoporosis, tendonitis, etc.)"],
              ["l", "Specialist Dental (orthodontic, periodontal, maxillo-facial issues, etc.)"],
              ["m", "Injuries"],
              ["n", "Any other"],
            ].map(([key, text]) => (
              <div key={key} className="flex justify-between items-start">
                <p className="w-3/4">
                  {key}) {text}
                </p>
                <YesNo name={`q7_${key}`} />
              </div>
            ))}
          </div>
        </div>

        {/* DETAILS TEXTAREA */}
        <div className="mt-6">
          <p className="text-sm mb-2">
            Please use this space to provide any details pertaining to section 7 as well as any other additional
            information that may be material. Use a separate sheet of paper if there is insufficient space:
          </p>

          <textarea
            {...register("q7_details")}
            rows={6}
            className="w-full border border-northernBorder rounded p-3 resize-none"
          />
        </div>
      </div>
    </div>
  );
}
