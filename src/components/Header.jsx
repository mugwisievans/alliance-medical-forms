import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full bg-[#E8F5E9] shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
        
        {/* Logo */}
        <img
          src={logo}
          alt="Alliance Health"
          className="h-10 w-auto object-contain"
        />

        {/* Title */}
        <h1 className="text-2xl font-semibold text-primary whitespace-nowrap">
          Medical Aid Application Portal
        </h1>

      </div>
    </header>
  );
}
