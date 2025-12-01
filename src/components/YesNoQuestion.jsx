import { useFormContext } from "react-hook-form";

export default function YesNoQuestion({ name, label }) {
  const { register } = useFormContext();

  return (
    <div className="mb-6">
      <p className="font-medium mb-2">{label}</p>

      <div className="flex gap-6">
        <label className="flex items-center gap-2">
          <input type="radio" value="yes" {...register(name)} />
          Yes
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" value="no" {...register(name)} />
          No
        </label>
      </div>
    </div>
  );
}
