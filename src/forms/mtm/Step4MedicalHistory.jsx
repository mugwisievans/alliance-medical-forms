import { useFormContext } from "react-hook-form";

export default function MTMStep4MedicalHistory() {
  const { register } = useFormContext();

  return (
    <div className="space-y-10">

      {/* --- 7. Medical Practitioner’s Details --- */}
      <div className="bg-[#e9f8d7] p-6 rounded-lg border">
        <h2 className="text-xl font-bold text-[#003366] mb-2">
          7. Your Medical Practitioner’s Details
        </h2>

        <p className="text-sm text-gray-700 mb-3">
          Please give the details, including name, address and qualifications of
          Your usual Medical Practitioner and all other medical professionals
          whose advice you may have sought prior to this application, and in
          respect of anyone else included in this application.
        </p>

        <textarea
          {...register("medicalPractitionerDetails")}
          rows={6}
          className="w-full border rounded px-3 py-2"
        />

        <p className="text-xs text-gray-600 mt-1">
          Please use a separate sheet if this space is insufficient.
        </p>
      </div>

      {/* --- 8. Pastimes, Hobbies, Activities and Pursuits --- */}
      <div className="bg-[#e9f8d7]  p-6 rounded-lg border">
        <h2 className="text-xl font-bold text-[#003366] mb-2">
          8. Pastimes, Hobbies, Activities and Pursuits
        </h2>

        <p className="text-sm text-gray-700 mb-3">
          Please detail in the space below any activities that you, or any
          individuals listed in this application participate in on a regular
          basis (or more than three times in 12 months) which may be considered
          to be hazardous, dangerous, or place you at greater risk of injury in
          comparison to the activities of your everyday life.
        </p>

        <textarea
          {...register("pastimesActivities")}
          rows={6}
          className="w-full border rounded px-3 py-2"
        />

        <p className="text-xs text-gray-600 mt-1">
          Please use a separate sheet if this space is insufficient.
        </p>
      </div>

      {/* --- 9. Body Mass Index Table --- */}
      <div className="bg-[#e9f8d7] p-6 rounded-lg border">
        <h2 className="text-xl font-bold text-[#003366] mb-4">9. Body Mass Index</h2>

        <p className="text-sm text-gray-700 mb-3">
          Please furnish us with the following details for all applicants:
        </p>

        {/* BMI TABLE */}
        <div className="border rounded overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#e9f8d7]">
              <tr>
                <th className="border px-3 py-2 font-medium">Applicant</th>
                <th className="border px-3 py-2 font-medium">Height (cm)</th>
                <th className="border px-3 py-2 font-medium">Weight (kg)</th>
                <th className="border px-3 py-2 font-medium text-center">
                  (This column for office use)
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                "Principal",
                "Spouse (Dependant 1)",
                "Child (Dependant 2)",
                "Child (Dependant 3)",
                "Child (Dependant 4)",
                "Child (Dependant 5)",
              ].map((label, idx) => (
                <tr key={idx}>
                  <td className="border px-3 py-2">{label}</td>

                  <td className="border px-3 py-2">
                    <input
                      {...register(`bmi.${idx}.height`)}
                      type="number"
                      className="w-full border rounded px-2 py-1"
                    />
                  </td>

                  <td className="border px-3 py-2">
                    <input
                      {...register(`bmi.${idx}.weight`)}
                      type="number"
                      className="w-full border rounded px-2 py-1"
                    />
                  </td>

                  <td className="border px-3 py-2 bg-gray-100"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Underwriter name + date */}
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <label className="font-medium">Underwriter Name:</label>
            <input
              {...register("underwriterName")}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="font-medium">Date:</label>
            <input
              type="date"
              {...register("underwriterDate")}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
