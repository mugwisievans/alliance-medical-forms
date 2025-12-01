import React from "react";
import { useFormContext } from "react-hook-form";

export default function NorthernStep3Commencement() {
  const { register } = useFormContext();

  return (
    <div className="space-y-10">

      {/* ------------------ 3. COMMENCEMENT DATE ------------------ */}
      <div>
        <div className="bg-northernHeading text-white px-4 py-2 rounded-t-lg font-semibold text-lg">
          3. Commencement Date
        </div>

        <div className="p-6 bg-sectionBg rounded-b-lg border border-northernBorder space-y-6">

          {/* PDF top text (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed text-gray-800">
            <p>
              Subject to the <strong>Plan Rules</strong>, the commencement date of Your Cover
              will be the date on which this application is accepted in writing by Us.
            </p>
            <p>
              Please note the commencement date cannot be more than 30 days from the date of
              completion of this application by You. Under no circumstances will we backdate cover.
            </p>
          </div>

          {/* Date input pink block */}
          <div className="bg-pink-100 border border-northernBorder p-4 rounded-lg">
            <label className="font-medium text-gray-800 block mb-2">
              Commencement Date:
            </label>
            <input
              type="date"
              {...register("commencementDate")}
              className="border border-northernBorder p-2 rounded w-60"
            />
          </div>
        </div>
      </div>

      {/* ------------------ 4. COVER DETAILS ------------------ */}
      <div>
        <div className="bg-northernHeading text-white px-4 py-2 rounded-t-lg font-semibold text-lg">
          4. Cover Details
        </div>

        <div className="p-6 bg-sectionBg rounded-b-lg border border-northernBorder">
          <label className="font-medium text-gray-800 block mb-2">Northern Alliance:</label>

          <input
            type="checkbox"
            {...register("coverNorthernAlliance")}
            className="w-5 h-5 accent-northernHeading"
          />
        </div>
      </div>

      {/* ------------------ 5. MEDICAL PRACTITIONER DETAILS ------------------ */}
      <div>
        <div className="bg-northernHeading text-white px-4 py-2 rounded-t-lg font-semibold text-lg">
          5. Medical Practitioner Details
        </div>

        <div className="p-6 bg-sectionBg rounded-b-lg border border-northernBorder space-y-2">
          <p className="text-sm text-gray-800">
            Please give the details, including name, address and qualifications of <strong>Your usual Medical Practitioner</strong>, and in respect of anyone else included in this application.
          </p>

          <textarea
            {...register("practitionerDetails")}
            rows={6}
            className="w-full border border-northernBorder rounded p-3 resize-none"
          />

          <p className="text-xs text-gray-600">
            Please use a separate sheet if this space is insufficient.
          </p>
        </div>
      </div>

      {/* ------------------ 6. BANK DETAILS ------------------ */}
      <div>
        <div className="bg-northernHeading text-white px-4 py-2 rounded-t-lg font-semibold text-lg">
          6. Your Bank Details
        </div>

        <div className="p-6 bg-sectionBg rounded-b-lg border border-northernBorder space-y-4">

          {/* Bank Name */}
          <div>
            <label className="block font-medium mb-1">Name of bank:</label>
            <input
              {...register("bankName")}
              className="w-full border border-northernBorder p-2 rounded"
            />
          </div>

          {/* Branch */}
          <div>
            <label className="block font-medium mb-1">Branch:</label>
            <input
              {...register("bankBranch")}
              className="w-full border border-northernBorder p-2 rounded"
            />
          </div>

          {/* Account Name */}
          <div>
            <label className="block font-medium mb-1">Account name:</label>
            <input
              {...register("accountName")}
              className="w-full border border-northernBorder p-2 rounded"
            />
          </div>

          {/* Account Number */}
          <div>
            <label className="block font-medium mb-1">Bank account #:</label>
            <input
              {...register("accountNumber")}
              className="w-full border border-northernBorder p-2 rounded"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
