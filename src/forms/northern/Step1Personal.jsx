import React from "react";
import { useFormContext } from "react-hook-form";

export default function NorthernStep1Personal() {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">

      {/* ========================= SECTION HEADER ========================= */}
      <div className="bg-northernHeading text-white px-4 py-2 rounded-t-lg font-semibold text-lg">
        1. Your Personal Details (Principal Member)
      </div>

      {/* ========================= FORM PANEL ========================= */}
      <div className="p-6 bg-sectionBg rounded-b-lg border border-northernBorder space-y-6">

        {/* ========== Row 1: Surname + Title ========== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <label className="block text-textDark font-medium mb-1">Surname:</label>
            <input
              {...register("surname")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-textDark font-medium mb-1">Title:</label>
            <select
              {...register("title")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            >
              <option value="">Select Title</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Ms</option>
              <option>Miss</option>
              <option>Dr</option>
              <option>Prof</option>
              <option>Rev</option>
            </select>
          </div>
        </div>

        {/* ========== Row 2: First Names + ID ========== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <label className="block text-textDark font-medium mb-1">
              First Name(s):
            </label>
            <input
              {...register("firstNames")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-textDark font-medium mb-1">
              I.D/Passport No.:
            </label>
            <input
              {...register("idNumber")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            />
          </div>
        </div>

        {/* ========== Row 3: Marital Status + Gender + DOB ========== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-textDark font-medium mb-1">
              Marital Status:
            </label>
            <input
              {...register("maritalStatus")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-textDark font-medium mb-1">M/F:</label>
            <input
              {...register("gender")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-textDark font-medium mb-1">
              Date of Birth:
            </label>
            <input
              type="date"
              {...register("dob")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            />
          </div>
        </div>

        {/* ========== Row 4: Industry ========== */}
        <div>
          <label className="block text-textDark font-medium mb-1">
            Industry:
          </label>
          <input
            {...register("industry")}
            className="w-full border border-northernBorder rounded p-2 bg-white"
          />
        </div>

        {/* ========== Row 5: Occupation ========== */}
        <div>
          <label className="block text-textDark font-medium mb-1">
            Occupation:
          </label>
          <input
            {...register("occupation")}
            className="w-full border border-northernBorder rounded p-2 bg-white"
          />
        </div>

        {/* ========== Row 6: Nationality ========== */}
        <div>
          <label className="block text-textDark font-medium mb-1">
            Nationality:
          </label>
          <input
            {...register("nationality")}
            className="w-full border border-northernBorder rounded p-2 bg-white"
          />
        </div>

        {/* ========== Row 7: Country + Residential Address ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-textDark font-medium mb-1">
              Country of Residence:
            </label>
            <input
              {...register("countryOfResidence")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-textDark font-medium mb-1">
              Residential Address:
            </label>
            <input
              {...register("residentialAddress")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            />
          </div>
        </div>

        {/* ========== Row 8: Correspondence Address ========== */}
        <div>
          <label className="block text-textDark font-medium mb-1">
            Correspondence Address:
          </label>
          <input
            {...register("correspondenceAddress")}
            className="w-full border border-northernBorder rounded p-2 bg-white"
          />
        </div>

        {/* ========== Row 9: Phones ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-textDark font-medium mb-1">
              Home Telephone:
            </label>
            <input
              {...register("homeTelephone")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-textDark font-medium mb-1">
              Business Telephone:
            </label>
            <input
              {...register("businessTelephone")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            />
          </div>
        </div>

        {/* ========== Row 10: Mobile + Fax ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-textDark font-medium mb-1">
              Mobile:
            </label>
            <input
              {...register("mobile")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-textDark font-medium mb-1">Fax:</label>
            <input
              {...register("fax")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            />
          </div>
        </div>

        {/* ========== Row 11: Email Options ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-textDark font-medium mb-1">
              Email:
            </label>
            <input
              {...register("email")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-textDark font-medium mb-1">
              Email Option 2:
            </label>
            <input
              {...register("email2")}
              className="w-full border border-northernBorder rounded p-2 bg-white"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
