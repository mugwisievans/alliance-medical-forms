// src/forms/mtm/Step5MedicalHistory2.jsx
import React from "react";
import { useFormContext } from "react-hook-form";

export default function MTMStep5MedicalHistory2() {
  const { register } = useFormContext();

  const yesNo = (name) => (
    <div className="flex gap-6 justify-end pr-4">
      <label className="flex items-center gap-1">
        <input type="radio" value="Yes" {...register(name)} /> Yes
      </label>
      <label className="flex items-center gap-1">
        <input type="radio" value="No" {...register(name)} /> No
      </label>
    </div>
  );

  return (
    <div
      className="p-6 rounded-md"
      style={{ background: "#f3ffdd", border: "1px solid #d5e8a8" }}
    >
      <h2 className="text-xl font-bold mb-4" style={{ color: "#003399" }}>
        10. Medical History Questionnaire
      </h2>

      <p className="text-sm mb-4">
        (To be completed by the Principal Member on behalf of all family
        members applying for cover. If you answer YES to any of the questions
        below, please provide full details in the space provided at the end.)
      </p>

      {/* QUESTIONS 1–7 */}
      <div className="space-y-6">
        <div className="flex justify-between">
          <p>1. Have you or anyone else applying ever been admitted to hospital?</p>
          {yesNo("mh_q1")}
        </div>

        <div className="flex justify-between">
          <p>2. Have you or any applicant ever undergone surgery?</p>
          {yesNo("mh_q2")}
        </div>

        <div className="flex justify-between">
          <p>3. Have you ever received medical advice about diet or exercise?</p>
          {yesNo("mh_q3")}
        </div>

        <div className="flex justify-between">
          <p>
            4. Has your weight, or that of any applicant, changed by 5kgs or more
            in the last 12 months?
          </p>
          {yesNo("mh_q4")}
        </div>

        <div className="flex justify-between">
          <p>5. Have you ever received advice to reduce alcohol consumption?</p>
          {yesNo("mh_q5")}
        </div>

        <div className="flex justify-between">
          <p>
            6. Have you or any applicant been prescribed medication for &gt;10 days
            in the past 24 months?
          </p>
          {yesNo("mh_q6")}
        </div>

        <div className="flex justify-between">
          <p>
            7. Is any applicant currently taking prescribed medication?
          </p>
          {yesNo("mh_q7")}
        </div>
      </div>

      {/* QUESTION 8 */}
      <div className="mt-8">
        <p className="font-semibold mb-2">
          8. Medical conditions in your immediate family (specify below)
        </p>
        {yesNo("mh_q8")}
      </div>

      {/* Question 9 */}
      <div className="mt-6 flex justify-between">
        <p>9. Are you or any proposed members pregnant or planning pregnancy?</p>
        {yesNo("mh_q9")}
      </div>

      {/* Question 10 */}
      <div className="mt-6 flex justify-between">
        <p>10. Do you or any applicants smoke? If yes, how many per day?</p>
        {yesNo("mh_q10")}
      </div>

      {/* Question 11 – MULTI-PART */}
      <div className="mt-8">
        <p className="font-semibold mb-3">
          11. Have you or any applicant experienced or been treated for any of the following?
        </p>

        {[
          ["a", "Cancer"],
          ["b", "Breast abnormalities"],
          ["c", "Heart / circulatory conditions"],
          ["d", "Gynaecological disorders"],
          ["e", "Dermatological conditions"],
          ["f", "Mental health (e.g. depression, anxiety)"],
          ["g", "Endocrine disorders (e.g. diabetes, thyroid)"],
          ["h", "Liver or pancreatic conditions"],
          ["i", "Parasitic / tropical diseases"],
          ["j", "Brain / neurological disorders"],
          ["k", "Respiratory disorders"],
          ["l", "Musculoskeletal disorders"],
          ["m", "Kidney or urinary tract disorders"],
          ["n", "Blood disorders"],
          ["o", "Reproductive disorders"],
          ["p", "Autoimmune or immune disorders"],
          ["q", "Sight / hearing disorders"],
          ["r", "Specialised dentistry"],
          ["s", "Plastic surgery or prostheses"],
        ].map(([letter, text]) => (
          <div key={letter} className="flex justify-between mb-2">
            <p>
              <span className="font-bold">{letter})</span> {text}
            </p>
            {yesNo(`mh_q11_${letter}`)}
          </div>
        ))}
      </div>

      {/* Questions 12–14 */}
      <div className="space-y-6 mt-6">
        <div className="flex justify-between">
          <p>
            12. Any foreseeable need for treatment in the next 12 months?
          </p>
          {yesNo("mh_q12")}
        </div>

        <div className="flex justify-between">
          <p>
            13. Any symptoms of ill-health or medically diagnosed conditions?
          </p>
          {yesNo("mh_q13")}
        </div>

        <div className="flex justify-between">
          <p>
            14. Any other risk factors that may increase medical risk?
          </p>
          {yesNo("mh_q14")}
        </div>
      </div>

      {/* IMPORTANT INFORMATION */}
      <div className="mt-10 p-4 border rounded-md" style={{ background: "#e8f4c8" }}>
        <p className="font-semibold mb-2" style={{ color: "#003399" }}>
          Important Information
        </p>
        <p className="text-sm">
          Alliance Health reserves the right to send this completed form to your
          GP or Medical Director for verification.
        </p>
        <p className="text-sm mt-2">
          Please provide details for any question where you answered YES,
          including dates of injuries or symptoms, medications and dosages,
          diagnostic test results, etc.
        </p>
      </div>

      {/* LARGE NOTES BOX */}
      <div className="mt-6">
        <textarea
          {...register("mh_notes")}
          rows={8}
          className="w-full border rounded-md p-3"
          placeholder="Provide full medical details here..."
        ></textarea>
      </div>
    </div>
  );
}
