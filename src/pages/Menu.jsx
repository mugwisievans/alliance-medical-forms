export default function Menu() {
  return (
    <div className="p-10 text-center space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">Alliance Medical Forms</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        
        <a
          href="#/northern"
          className="block p-6 bg-white shadow rounded-xl hover:bg-blue-50 transition"
        >
          <h2 className="text-xl font-semibold text-blue-700">
            Northern Alliance Application
          </h2>
          <p className="text-gray-600 text-sm">Apply for Northern Alliance membership</p>
        </a>

        <a
          href="#/mtm"
          className="block p-6 bg-white shadow rounded-xl hover:bg-blue-50 transition"
        >
          <h2 className="text-xl font-semibold text-green-700">
            MTM / AHO / AOS Application
          </h2>
          <p className="text-gray-600 text-sm">Apply for MTM, AHO, AOS medical aid plans</p>
        </a>

      </div>
    </div>
  );
}
