import React from "react";
import { useFormContext } from "react-hook-form";

export default function NorthernStep5Declaration() {
  const { register } = useFormContext();

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div className="bg-northernHeading text-white px-4 py-2 rounded-lg font-semibold text-lg">
        8. Declaration
      </div>

      {/* Important Info */}
      <div className="text-gray-700 text-sm leading-relaxed">
        <p className="font-semibold mb-2">Important Information</p>

        <ul className="list-disc ml-6 space-y-1">
          <li>
            The Society reserves the right to send this completed form to your
            GP or our Medical Director for verification.
          </li>
          <li>Age restriction for joining is 64 years attained.</li>
          <li>
            12 months waiting period applies for Maternity and General Wellness
            check benefits.
          </li>
          <li>6 months waiting period applies for Dental and Optical benefits.</li>
          <li>24 months waiting period applies for Orthodontics benefit.</li>
          <li>
            Subscriptions are due in full by the 1st of every month. Cover /
            claims are suspended while subscriptions remain unpaid.
          </li>
          <li>
            Please obtain and read a copy of the Rules & Benefits of Northern
            Alliance / Northern Medical Aid Society (available on{" "}
            <a
              href="http://www.alliancehealth.co.zw"
              target="_blank"
              className="text-blue-600 underline"
            >
              www.alliancehealth.co.zw
            </a>{" "}
            or email membership@healthzim.com).
          </li>
          <li>
            (For Northern Alliance applications only) Pre-existing and all
            related medical conditions will be excluded unless you have chosen
            to have a loading.
          </li>
          <li>
            (For Northern Medical Aid Society applications only) Pre-existing
            and all related medical conditions will be excluded from benefit /
            claim unless specifically agreed in writing by The Society.
          </li>
          <li>
            Northern Alliance and Northern Medical Aid reserve the right to
            decline any application.
          </li>
        </ul>

        <p className="font-semibold mt-4 text-gray-900">
          Please note: Your application will not be automatically accepted.  
          It is subject to assessment and Board approval.
        </p>
      </div>

      {/* Declaration Statement Block */}
      <div className="bg-sectionBg border border-northernBorder p-6 rounded-lg space-y-5 text-gray-900 leading-relaxed text-sm">

        <p>
          On behalf of all the people applying for cover on this application form,
          I confirm that the information given in this application form is true and
          complete.
        </p>

        <p>
          I confirm that I have declared all material facts which relate to this
          application for cover. Hence I agree that if I have not disclosed all
          material facts Northern Alliance / Northern Medical Aid Society has the
          right to invalidate the Cover.
        </p>

        <p>
          I authorize the medical practitioners named in section 5, including any
          other physician or medical practitioner who has attended me or anyone
          else applying for cover in this application form, to provide the Northern
          Alliance / Northern Medical Aid Society administrators with the
          information they may need in connection with applying for cover and any
          treatment related to a claim.
        </p>

        <p>
          I and all the people applying for cover on this application form confirm
          that we agree to all the Terms and Conditions set out in the Management
          Rules & Schedule of Benefits.
        </p>

        {/* Signature + Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <label className="font-semibold">Signature of Applicant:</label>
            <input
              type="text"
              {...register("signature")}
              className="w-full border border-northernBorder mt-1 px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="font-semibold">Date:</label>
            <input
              type="date"
              {...register("declarationDate")}
              className="w-full border border-northernBorder mt-1 px-3 py-2 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
