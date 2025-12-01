import { useFormContext } from "react-hook-form";

export default function MTMStep0Top() {
  const { register } = useFormContext();

  return (
    <div className="bg-[#e9f8d7] p-8 rounded-lg border border-gray-300">

      {/* --------------------------------------------------------- */}
      {/*                     HEADER & LOGO                         */}
      {/* --------------------------------------------------------- */}
      <div className="flex justify-between items-start mb-6">

        {/* Left Title */}
        <h1 className="text-4xl font-bold text-[#002a8d] leading-none">
          Application Form
        </h1>

        {/* Right Logo */}
        <img
          src="/alliancehealth-logo.png"
          alt="Alliance Health Logo"
          className="h-16 object-contain"
        />
      </div>

      {/* --------------------------------------------------------- */}
      {/*                   INSTRUCTIONS AREA                       */}
      {/* --------------------------------------------------------- */}
      <div className="text-sm text-gray-700 leading-tight mb-6 max-w-3xl">
        <p>
          <strong>Please read through the following</strong> before completing this
          application form in <strong>BLOCK CAPITALS</strong>. You must disclose all
          material facts. Failure to do so may invalidate the plan. A material
          fact is one which is likely to influence the assessment and acceptance
          of Your application for cover. If You are in any doubt whether a fact
          is material it should be disclosed.
        </p>

        <p className="mt-2">
          As the <strong>Principal Member</strong>, You should answer all the
          questions in full and sign the declaration on behalf of all persons
          included in this application for cover.
        </p>
      </div>

     
      {/* --------------------------------------------------------- */}
      {/*                     INTERMEDIARY                         */}
      {/* --------------------------------------------------------- */}
      <div className="mb-4">
        <label className="font-semibold block mb-1 text-[#003366]">
          Intermediary:
        </label>
        <input
          type="text"
          {...register("intermediary")}
          className="w-full border rounded p-2 bg-white"
        />
      </div>

      {/* --------------------------------------------------------- */}
      {/*         APPLICATION TYPE — 3 TICK BOXES IN ONE ROW        */}
      {/* --------------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        {/* New Group */}
        <label className="flex items-center gap-2 bg-white px-3 py-2 rounded border">
          <input type="checkbox" {...register("applyNewGroup")} />
          <span className="text-sm">
            Apply to join a <strong>new Group</strong>
          </span>
        </label>

        {/* Existing Group */}
        <label className="flex items-center gap-2 bg-white px-3 py-2 rounded border">
          <input type="checkbox" {...register("applyExistingGroup")} />
          <span className="text-sm">
            Apply to join an <strong>existing Group</strong>
          </span>
        </label>

        {/* Individual / Family */}
        <label className="flex items-center gap-2 bg-white px-3 py-2 rounded border">
          <input type="checkbox" {...register("applyIndividual")} />
          <span className="text-sm">
            Apply to join as an <strong>Individual / Family</strong>
          </span>
        </label>

      </div>

      {/* --------------------------------------------------------- */}
      {/*          COMPANY / GROUP NAME AND NUMBER ROW             */}
      {/* --------------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4 mb-4">

        <div>
          <label className="font-semibold block mb-1 text-[#003366]">
            Company/Group Name:
          </label>
          <input
            type="text"
            {...register("companyGroupName")}
            className="w-full border rounded p-2 bg-white"
          />
        </div>

        <div>
          <label className="font-semibold block mb-1 text-[#003366]">
            No.:
          </label>
          <input
            type="text"
            {...register("companyGroupNumber")}
            className="w-full border rounded p-2 bg-white"
          />
        </div>

      </div>
    </div>
  );
}
