import { useFormContext } from "react-hook-form";
import { useState } from "react";

export default function MTMStep2Dependants() {
  const { register } = useFormContext();
  const [extraDependants, setExtraDependants] = useState([]);

  const addDependant = () => {
    setExtraDependants([
      ...extraDependants,
      { id: Date.now() }
    ]);
  };

  const removeDependant = (id) => {
    setExtraDependants(extraDependants.filter((d) => d.id !== id));
  };

  const renderDependant = (index, isFixed) => (
    <div className="bg-[#e9f8d7]  p-6 rounded-lg border mb-8">

      <h2 className="text-lg font-bold mb-2 text-[#003366]">
        Dependant {index}
        {index === 1 && " (spouse or partner)"}
      </h2>

      {/* ░░ PDF NOTE BELOW HEADING ░░ */}
      {index === 1 && (
        <p className="text-sm text-gray-700 mb-3 italic">
          Your spouse or partner should be able to act on your behalf in a legal
          capacity. Otherwise please complete separate applications.
        </p>
      )}

      {/* Surname + Sex */}
      <div className="grid grid-cols-3 gap-4 mb-3">
        <div className="col-span-2">
          <label className="font-medium">Surname:</label>
          <input
            {...register(`dependants.${index}.surname`)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="font-medium">Sex (M/F):</label>
          <select
            {...register(`dependants.${index}.sex`)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select</option>
            <option>M</option>
            <option>F</option>
          </select>
        </div>
      </div>

      {/* First Names */}
      <div className="mb-3">
        <label className="font-medium">First Name(s):</label>
        <input
          {...register(`dependants.${index}.firstNames`)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Contact / Title / ID */}
      <div className="grid grid-cols-3 gap-4 mb-3">
        <div>
          <label className="font-medium">Contact Tel #:</label>
          <input
            {...register(`dependants.${index}.contact`)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="font-medium">Title:</label>
          <input
            {...register(`dependants.${index}.title`)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="font-medium">I.D/Passport #:</label>
          <input
            {...register(`dependants.${index}.idNumber`)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Relationship + DOB */}
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <label className="font-medium">Relationship to Applicant:</label>
          <input
            {...register(`dependants.${index}.relationship`)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="font-medium">Date of Birth:</label>
          <input
            type="date"
            {...register(`dependants.${index}.dob`)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Occupation */}
      <div className="mb-3">
        <label className="font-medium">Occupation:</label>
        <input
          {...register(`dependants.${index}.occupation`)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Nationality */}
      <div className="mb-3">
        <label className="font-medium">Nationality:</label>
        <input
          {...register(`dependants.${index}.nationality`)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Remove for dependants 3+ */}
      {!isFixed && (
        <button
          type="button"
          onClick={() => removeDependant(extraDependants[index - 3].id)}
          className="mt-3 px-4 py-2 bg-red-500 text-white rounded"
        >
          Remove Dependant
        </button>
      )}
    </div>
  );

  return (
    <div>

      {/* Dependant 1 */}
      {renderDependant(1, true)}

      {/* Biological Child Note */}
      <p className="text-sm text-gray-600 mb-6">
        Each child dependant should be your biological child. If not, please state
        “adopted” or “foster” and provide evidence. Dependants must be under 18 years,
        or under 25 and in full-time education and fully dependent upon you.
      </p>

      {/* Dependant 2 */}
      {renderDependant(2, true)}

      {/* Added Dependants */}
      {extraDependants.map((dep, i) =>
        renderDependant(i + 3, false)
      )}

      {/* Add More */}
      <button
        type="button"
        onClick={addDependant}
        className="px-6 py-3 bg-primary text-white rounded mt-4"
      >
        ➕ Add Dependant
      </button>
    </div>
  );
}
