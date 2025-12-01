import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F1F9F4] p-10">
      <div className="max-w-6xl mx-auto">

        {/* Centered Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">

          {/* Card 1 */}
          <div
            onClick={() => navigate("/northern")}
            className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition transform hover:-translate-y-1 text-center"
          >
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Northern Alliance Application
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Apply for Northern Alliance medical aid membership.
            </p>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => navigate("/mtm")}
            className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition transform hover:-translate-y-1 text-center"
          >
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Alliance Medical Aid Application
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Apply for MTM, AHO or AOS medical coverage plans.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
