import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

export default function NorthernStep2Dependants() {
  const { register, control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "dependants",
  });

  return (
    <div className="space-y-6">

      {/* Section Header */}
      <div className="bg-northernHeading text-white px-4 py-2 rounded-t-lg font-semibold text-lg">
        2. Dependant’s Details
      </div>

      {/* Description */}
      <div className="p-4 bg-sectionBg border border-northernBorder rounded-b-lg">
        <p className="text-sm text-black mb-4">
          Please note children to be included under this plan must be under 18 years of age
          or under 25 years of age if they are in full time education and are fully dependent upon You.
        </p>

        {/* Loop dependants */}
        {fields.map((item, index) => (
          <div
            key={item.id}
            className="mb-8 border border-northernBorder bg-white rounded shadow-sm"
          >
            {/* Dependant Title Bar */}
            <div className="bg-sectionBg border-b border-northernBorder px-4 py-2 font-semibold">
              Dependant {index + 1}
            </div>

            <div className="p-4 space-y-4">

              {/* Surname + Sex */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2">
                  <label className="block font-medium text-textDark">Surname:</label>
                  <input
                    {...register(`dependants.${index}.surname`)}
                    className="w-full border border-northernBorder p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block font-medium text-textDark">Sex (M/F):</label>
                  <input
                    {...register(`dependants.${index}.sex`)}
                    className="w-full border border-northernBorder p-2 rounded"
                  />
                </div>
              </div>

              {/* First Names */}
              <div>
                <label className="block font-medium text-textDark">First Name(s):</label>
                <input
                  {...register(`dependants.${index}.firstNames`)}
                  className="w-full border border-northernBorder p-2 rounded"
                />
              </div>

              {/* Contact Tel + Title + ID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block font-medium text-textDark">Contact Tel #:</label>
                  <input
                    {...register(`dependants.${index}.contact`)}
                    className="w-full border border-northernBorder p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block font-medium text-textDark">Title:</label>
                  <input
                    {...register(`dependants.${index}.title`)}
                    className="w-full border border-northernBorder p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block font-medium text-textDark">I.D/Passport No.:</label>
                  <input
                    {...register(`dependants.${index}.idNumber`)}
                    className="w-full border border-northernBorder p-2 rounded"
                  />
                </div>
              </div>

              {/* Relationship + DOB */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2">
                  <label className="block font-medium text-textDark">Relationship to Applicant:</label>
                  <input
                    {...register(`dependants.${index}.relationship`)}
                    className="w-full border border-northernBorder p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block font-medium text-textDark">Date of Birth:</label>
                  <input
                    type="date"
                    {...register(`dependants.${index}.dob`)}
                    className="w-full border border-northernBorder p-2 rounded"
                  />
                </div>
              </div>

              {/* Occupation */}
              <div>
                <label className="block font-medium text-textDark">Occupation:</label>
                <input
                  {...register(`dependants.${index}.occupation`)}
                  className="w-full border border-northernBorder p-2 rounded"
                />
              </div>

              {/* Nationality */}
              <div>
                <label className="block font-medium text-textDark">Nationality:</label>
                <input
                  {...register(`dependants.${index}.nationality`)}
                  className="w-full border border-northernBorder p-2 rounded"
                />
              </div>

              {/* Remove Dependant Button */}
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Remove Dependant
                </button>
              )}
            </div>
          </div>
        ))}

        {/* ADD DEPENDANT BUTTON */}
        <button
          type="button"
          onClick={() =>
            append({
              surname: "",
              firstNames: "",
              sex: "",
              contact: "",
              title: "",
              idNumber: "",
              relationship: "",
              dob: "",
              occupation: "",
              nationality: "",
            })
          }
          className="px-6 py-3 bg-northernHeading text-white rounded hover:opacity-90"
        >
          + Add Dependant
        </button>
      </div>
    </div>
  );
}
