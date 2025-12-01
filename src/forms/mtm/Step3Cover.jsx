import { useFormContext } from "react-hook-form";

export default function MTMStep3Cover() {
  const { register } = useFormContext();

  return (
    <div className="space-y-10">

      {/* --- 3. COMMENCEMENT DATE --- */}
      <div className="bg-[#e9f8d7]  p-6 rounded-lg border">
        <h2 className="text-xl font-bold text-[#003366] mb-2">
          3. Commencement Date
        </h2>

        <p className="text-sm text-gray-700 mb-3">
          Subject to the Plan Agreement, the commencement date of Your Plan must be
          first of the month.
        </p>

        <p className="text-xs text-gray-600 bg-[#e8f7c8] p-2 rounded mb-4">
          Please note the commencement date cannot be more than 30 days from the date
          of completion of this application by You. Under no circumstances will we
          backdate cover.
        </p>

        <label className="font-medium">Commencement Date:</label>
        <input
          type="date"
          {...register("commencementDate")}
          className="w-full border rounded px-3 py-2 mt-1"
        />
      </div>

      {/* --- 4. COVER DETAILS --- */}
      <div className="bg-[#e9f8d7]  p-6 rounded-lg border">
        <h2 className="text-xl font-bold text-[#003366] mb-4">
          4. Cover Details
        </h2>

        {/* Alliance Options Select */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Alliance Options Select</h3>

          <div className="grid grid-cols-4 gap-6">
            {["Select 1", "Select 2", "Select 3", "Select 4"].map((label, idx) => (
              <label key={idx} className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={label}
                  {...register("allianceOption")}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Alliance Health Options */}
        <div>
          <h3 className="font-semibold mb-1">Alliance Health Options</h3>

          <div className="grid grid-cols-3 gap-4 mt-2">
            {[
              "Core",
              "Core+",
              "Comprehensive",
              "Comprehensive+",
              "Bronze",
              "Silver",
              "Gold",
              "Platinum",
              "Platinum Plus",
            ].map((label, idx) => (
              <label key={idx} className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={label}
                  {...register("healthOption")}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* --- 5. PAYMENT FREQUENCY --- */}
      <div className="bg-[#e9f8d7]  p-6 rounded-lg border">
        <h2 className="text-xl font-bold text-[#003366] mb-4">
          5. Payment Frequency
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {["Annual", "Bi-Annual", "Quarterly", "Monthly"].map((label, idx) => (
            <label key={idx} className="flex items-center space-x-2">
              <input
                type="radio"
                value={label}
                {...register("paymentFrequency")}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* --- 6. YOUR BANK DETAILS --- */}
      <div className="bg-[#e9f8d7]  p-6 rounded-lg border">
        <h2 className="text-xl font-bold text-[#003366] mb-4">
          6. Your Bank Details*
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <label className="font-medium">Bank Name:</label>
            <input
              {...register("bankName")}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="font-medium">Branch:</label>
            <input
              {...register("branch")}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <label className="font-medium">Branch Code:</label>
            <input
              {...register("branchCode")}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="font-medium">Account Name:</label>
            <input
              {...register("accountName")}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="font-medium">Bank Account #:</label>
          <input
            {...register("accountNumber")}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <p className="text-xs text-gray-600 mt-2">
          *Without this information, your claims will not be paid.
        </p>
      </div>
    </div>
  );
}
