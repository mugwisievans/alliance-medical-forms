export default function Stepper({ steps, currentStep }) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">

      {steps.map((label, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div
            key={index}
            className={`
              px-6 py-2 rounded-full text-sm font-semibold border

              ${isActive ? "bg-northernHeading text-white border-northernHeading" : ""}
              ${!isActive && isCompleted ? "bg-northernBorder text-black border-northernBorder" : ""}
              ${!isActive && !isCompleted ? "bg-gray-200 text-gray-700 border-gray-300" : ""}
            `}
          >
            {index + 1}. {label}
          </div>
        );
      })}
    </div>
  );
}
