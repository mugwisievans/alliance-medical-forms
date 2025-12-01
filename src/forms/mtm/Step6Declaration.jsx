import React from "react";
import { useFormContext } from "react-hook-form";

export default function MTMStep6Declaration() {
  const { register } = useFormContext();

  return (
    <div className="bg-[#e9f8d7]  p-6 rounded-lg shadow-sm border border-[#c7d8a5]">

      <h2 className="text-xl font-bold text-[#0a2a7a] mb-4">
        12. Declarations
      </h2>

      <p className="text-sm text-gray-800 mb-4 leading-relaxed">
        On behalf of all the people applying for cover on this application form, I confirm that I have
        answered all of the questions in this enrolment form completely and truthfully and that I have
        declared all relevant material facts in the space provided. I understand that if I have not answered
        the above truthfully and disclosed all material facts, then Alliance Health has the right to invalidate
        this agreement.
      </p>

      <p className="text-sm text-gray-800 mb-4 leading-relaxed">
        I hereby acknowledge and agree that subject to the Terms and Conditions of membership, the benefits
        of my membership may completely exclude the costs of treatment of any and all health conditions,
        and/or any complications thereof, which had first presented symptoms, or for which treatment has been
        sought or received prior to the join date specified in Section 3 of this application.
      </p>

      <p className="text-sm text-gray-800 mb-4 leading-relaxed">
        I authorize the medical practitioners named in section 7, including any other physician or medical
        practitioner who has attended me or anyone else applying for cover in this application form, to
        provide Alliance Health with the information they may need in connection with any treatment related
        to a claim under this Plan.
      </p>

      <p className="text-sm text-gray-800 mb-4 leading-relaxed">
        I also authorize Alliance Health to furnish the aforementioned medical practitioners with our
        membership certificates where necessary.
      </p>

      <p className="text-sm text-gray-800 mb-6 leading-relaxed">
        I and all the people applying for cover on this application form confirm that we have read,
        understood and agree to all the Terms and Conditions set out in the{" "}
        <span className="font-semibold text-[#0a2a7a]">Plan Agreement.</span>
      </p>

      {/* SIGNATURE + DATE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#d7e7b6] p-4 rounded-md border border-[#b6c48b]">

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            Signature:
          </label>
          <input
            type="text"
            {...register("declaration_signature")}
            placeholder="Enter full name as signature"
            className="w-full border border-gray-400 rounded-md p-2 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            Date:
          </label>
          <input
            type="date"
            {...register("declaration_date")}
            className="w-full border border-gray-400 rounded-md p-2 bg-white"
          />
        </div>

      </div>

    </div>
  );
}
