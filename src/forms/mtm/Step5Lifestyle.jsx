import React from "react";
import { useFormContext } from "react-hook-form";

export default function MTMStep5Lifestyle() {
  const { register } = useFormContext();

  const yesNo = (name) => (
    <div className="flex gap-6">
      <label className="flex items-center gap-1">
        <input type="radio" value="Yes" {...register(name)} /> Yes
      </label>
      <label className="flex items-center gap-1">
        <input type="radio" value="No" {...register(name)} /> No
      </label>
    </div>
  );

  const frameOptions = (name) => (
    <div className="flex gap-6">
      {["Large", "Medium", "Small"].map((s) => (
        <label key={s} className="flex items-center gap-1">
          <input type="radio" value={s} {...register(name)} /> {s}
        </label>
      ))}
    </div>
  );

  const activityOptions = (name) => (
    <div className="grid grid-cols-3 gap-4 text-sm">
      {[
        "3 to 4 times a week",
        "1 to 2 times a week",
        "1 to 2 times a month",
        "Not at all",
      ].map((txt) => (
        <label key={txt} className="flex items-center gap-1">
          <input type="radio" value={txt} {...register(name)} /> {txt}
        </label>
      ))}
    </div>
  );

  const freqOptions = (name) => (
    <div className="grid grid-cols-3 gap-4 text-sm">
      {["Never", "Rarely", "Sometimes (Monthly)", "Weekly", "Daily"].map(
        (txt) => (
          <label key={txt} className="flex items-center gap-1">
            <input type="radio" value={txt} {...register(name)} /> {txt}
          </label>
        )
      )}
    </div>
  );

  return (
    <div
      className="p-6 rounded-md space-y-10"
      style={{ background: "#f0ffd8", border: "1px solid #c5e6a5" }}
    >
      {/* HEADER */}
      <h2 className="text-xl font-bold" style={{ color: "#003399" }}>
        11. Lifestyle Questionnaire
      </h2>

      {/* ADULT 1 & 2 SECTION */}
      <div className="grid grid-cols-2 gap-10">
        {/* ADULT 1 */}
        <div>
          <h3
            className="font-bold py-1 px-2 rounded"
            style={{ background: "#e0ffb5", color: "#003399" }}
          >
            ADULT 1 (Principal Member)
          </h3>

          <p className="mt-3 font-semibold">Frame Size:</p>
          {frameOptions("adult1_frame")}

          <p className="mt-3">Waist Size (cm):</p>
          <input
            type="number"
            {...register("adult1_waist")}
            className="border rounded p-2 w-32"
          />

          <p className="mt-4 font-semibold">Physical Activity:</p>
          {activityOptions("adult1_activity")}

          {/* Stress scale */}
          <p className="mt-4 font-semibold">Stress (1–10):</p>
          <input
            type="range"
            min="1"
            max="10"
            {...register("adult1_stress")}
            className="w-full"
          />

          {/* Fitness scale */}
          <p className="mt-4 font-semibold">Fitness (1–10):</p>
          <input
            type="range"
            min="1"
            max="10"
            {...register("adult1_fitness")}
            className="w-full"
          />
        </div>

        {/* ADULT 2 */}
        <div>
          <h3
            className="font-bold py-1 px-2 rounded"
            style={{ background: "#e0ffb5", color: "#003399" }}
          >
            ADULT 2
          </h3>

          <p className="mt-3 font-semibold">Frame Size:</p>
          {frameOptions("adult2_frame")}

          <p className="mt-3">Waist Size (cm):</p>
          <input
            type="number"
            {...register("adult2_waist")}
            className="border rounded p-2 w-32"
          />

          <p className="mt-4 font-semibold">Physical Activity:</p>
          {activityOptions("adult2_activity")}

          <p className="mt-4 font-semibold">Stress (1–10):</p>
          <input
            type="range"
            min="1"
            max="10"
            {...register("adult2_stress")}
            className="w-full"
          />

          <p className="mt-4 font-semibold">Fitness (1–10):</p>
          <input
            type="range"
            min="1"
            max="10"
            {...register("adult2_fitness")}
            className="w-full"
          />
        </div>
      </div>

      {/* ANXIETY/DEPRESSION */}
      <div>
        <p className="font-semibold">Do you take medication for anxiety/depression?</p>
        <div className="mt-2">
          Adult 1: {yesNo("adult1_anxiety_med")}
          <br />
          Adult 2: {yesNo("adult2_anxiety_med")}
        </div>
      </div>

      {/* ALCOHOL USE */}
      <div>
        <h3 className="font-bold text-lg mt-6" style={{ color: "#003399" }}>
          Use of Alcohol
        </h3>

        <p className="mt-3">Average weekly alcohol consumption:</p>

        <div className="grid grid-cols-5 gap-4 text-sm">
          {[
            "Non Drinker",
            "1 to 4",
            "5 to 8",
            "9 to 12",
            "More than 12",
          ].map((item) => (
            <label key={item} className="flex items-center gap-1">
              <input type="radio" value={item} {...register("alcohol_weekly")} />
              {item}
            </label>
          ))}
        </div>

        <p className="mt-3">How many days per week do you drink?</p>

        <div className="grid grid-cols-4 gap-4 text-sm">
          {[
            "None",
            "Once or twice",
            "Two to three days",
            "Four to seven days",
          ].map((item) => (
            <label key={item} className="flex items-center gap-1">
              <input type="radio" value={item} {...register("alcohol_days")} />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* CIGARETTES */}
      <div>
        <h3 className="font-bold text-lg mt-6" style={{ color: "#003399" }}>
          Use of Cigarettes
        </h3>

        <div className="grid grid-cols-3 gap-4 text-sm">
          {[
            "I have never smoked",
            "I quit smoking less than 10 years ago",
            "I quit smoking more than 10 years ago",
            "I smoke less than 5 cigarettes a day",
            "I smoke 5 to 10 cigarettes a day",
            "I smoke 11 to 20 cigarettes a day",
            "I smoke more than 20 a day",
          ].map((item) => (
            <label key={item} className="flex items-center gap-1">
              <input type="radio" value={item} {...register("cigarettes")} />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* MEDICATION USE */}
      <div>
        <h3 className="font-bold text-lg mt-6" style={{ color: "#003399" }}>
          Use of Medication
        </h3>
        {freqOptions("medication_freq")}
      </div>

      {/* WELLNESS TESTS */}
      <div>
        <h3 className="font-bold text-lg mt-6" style={{ color: "#003399" }}>
          Wellness Tests
        </h3>

        {/* WOMEN */}
        <p className="font-semibold mt-4">Women:</p>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <label>
            PAP smear:
            <select {...register("women_pap")} className="border p-1 ml-2">
              <option>Almost never</option>
              <option>Every 2 years</option>
              <option>Every year</option>
            </select>
          </label>

          <label>
            Mammogram:
            <select {...register("women_mammo")} className="border p-1 ml-2">
              <option>Almost never</option>
              <option>Every few years</option>
              <option>Annually</option>
            </select>
          </label>

          <label>
            Breast exam:
            <select {...register("women_breast_exam")} className="border p-1 ml-2">
              <option>Almost never</option>
              <option>Every few months</option>
              <option>Monthly</option>
            </select>
          </label>
        </div>

        {/* MEN */}
        <p className="font-semibold mt-6">Men:</p>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <label>
            Prostate test:
            <select {...register("men_prostate")} className="border p-1 ml-2">
              <option>Almost never</option>
              <option>Every few years</option>
              <option>Annually</option>
            </select>
          </label>

          <label>
            Testicular exam:
            <select {...register("men_testicular")} className="border p-1 ml-2">
              <option>Almost never</option>
              <option>Every few months</option>
              <option>Monthly</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
