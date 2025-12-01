import { useFormContext } from "react-hook-form";

export default function FormField({ name, label, type = "text", options }) {
  const { register } = useFormContext();

  return (
    <div className="mb-6">
      <label className="block font-medium mb-1">{label}</label>

      {type === "select" ? (
        <select
          {...register(name)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
        >
          <option value="">-- Select --</option>
          {options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          {...register(name)}
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
        ></textarea>
      ) : (
        <input
          type={type}
          {...register(name)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
        />
      )}
    </div>
  );
}
