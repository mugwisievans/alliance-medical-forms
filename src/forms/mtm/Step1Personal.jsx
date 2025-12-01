import { useFormContext } from "react-hook-form";

export default function MTMStep1Personal() {
  const { register } = useFormContext();

  return (
    <div className="bg-[#e9f8d7]  p-6 rounded-lg border border-gray-300">

      <h2 className="text-xl font-bold mb-4 text-[#003366]">
        1. Your Personal Details (Principal Member)
      </h2>

      {/* Surname / Title */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <label className="block font-medium mb-1">Surname:</label>
          <input
            {...register("surname")}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Title:</label>
          <select
            {...register("title")}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
            <option>Ms</option>
            <option>Dr</option>
          </select>
        </div>
      </div>

      {/* First Names / ID */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block font-medium mb-1">First Name(s):</label>
          <input
            {...register("firstNames")}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">I.D/Passport No.:</label>
          <input
            {...register("idNumber")}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Marital / Sex / DOB */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block font-medium mb-1">Marital Status:</label>
          <input
            {...register("maritalStatus")}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Sex (M/F):</label>
          <select
            {...register("sex")}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select</option>
            <option>M</option>
            <option>F</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Date of Birth:</label>
          <input
            type="date"
            {...register("dob")}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Industry */}
      <div className="mt-4">
        <label className="block font-medium mb-1">Industry:</label>
        <input
          {...register("industry")}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Occupation */}
      <div className="mt-4">
        <label className="block font-medium mb-1">Occupation:</label>
        <input
          {...register("occupation")}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Nationality */}
      <div className="mt-4">
        <label className="block font-medium mb-1">Nationality:</label>
        <input
          {...register("nationality")}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Country of residence */}
      <div className="mt-4">
        <label className="block font-medium mb-1">Country of Residence:</label>
        <input
          {...register("countryResidence")}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Residential */}
      <div className="mt-4">
        <label className="block font-medium mb-1">Residential Address:</label>
        <input
          {...register("residentialAddress")}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Correspondence */}
      <div className="mt-4">
        <label className="block font-medium mb-1">Correspondence Address:</label>
        <input
          {...register("correspondenceAddress")}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Contact Details */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Contact Details</h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Home Telephone:</label>
          <input
            {...register("homeTel")}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Business Telephone:</label>
          <input
            {...register("businessTel")}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Mobile:</label>
          <input
            {...register("mobile")}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Fax:</label>
          <input
            {...register("fax")}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email:</label>
          <input
            {...register("email")}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email Option 2:</label>
          <input
            {...register("email2")}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>
    </div>
  );
}
