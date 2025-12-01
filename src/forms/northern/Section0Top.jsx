import React from "react";
import { useFormContext } from "react-hook-form";

export default function Section0Top() {
  const { register } = useFormContext();

  return (
    <div className="bg-sectionBg p-6 rounded-lg border border-northernBorder space-y-6">

      {/* LOGO + HEADER */}
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold text-northernHeading">
          Application Form
        </div>

        <img
          src="/northern-logo.png"
          alt="Northern MAS"
          className="h-14 object-contain"
        />
      </div>

      {/* INSTRUCTIONS */}
      <p className="text-sm text-black leading-relaxed">
        <strong>Please read through the following before completing this application form in BLOCK CAPITALS.</strong><br />
        You must disclose all material facts. Failure to do so may invalidate the <strong>Cover</strong>.  
        A material fact is one which is likely to influence the assessment and acceptance  
        of your application for cover. If you are in any doubt whether a fact is material it should be disclosed.  
        As the <strong>Principal Member</strong>, You should answer all the questions in full and sign the declaration in section 7 on behalf  
        of all persons included in this application for cover.
      </p>

      {/* QUESTION: Applies to you */}
      <p className="font-semibold text-black">
        Please tick which of the following applies to <strong>you</strong>
      </p>

      {/* AGENT */}
      <div>
        <label className="block text-sm font-semibold text-black mb-1">
          Agent (if applicable):
        </label>
        <input
          {...register("agent")}
          className="w-full border border-northernBorder rounded p-2 bg-white"
        />
      </div>

      {/* TICK OPTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* New Group Plan */}
        <div className="flex items-center gap-3 p-3 border border-northernBorder bg-white rounded">
          <input type="checkbox" {...register("applyNewGroup")} />
          <div className="text-sm font-medium">
            Apply to join a <br /> New Group Plan
          </div>
        </div>

        {/* Existing Group */}
        <div className="flex items-center gap-3 p-3 border border-northernBorder bg-white rounded">
          <input type="checkbox" {...register("applyExistingGroup")} />
          <div className="text-sm font-medium">
            Apply to join an <br /> Existing Group Plan
          </div>
        </div>

        {/* Individual */}
        <div className="flex items-center gap-3 p-3 border border-northernBorder bg-white rounded">
          <input type="checkbox" {...register("applyIndividual")} />
          <div className="text-sm font-medium">
            Apply to join as an <br /> Individual
          </div>
        </div>
      </div>

      {/* COMPANY / GROUP NAME + No. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-semibold mb-1">
            Company/Group Name:
          </label>
          <input
            {...register("companyName")}
            className="w-full border border-northernBorder rounded p-2 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">No.:</label>
          <input
            {...register("companyNumber")}
            className="w-full border border-northernBorder rounded p-2 bg-white"
          />
        </div>
      </div>

    </div>
  );
}
