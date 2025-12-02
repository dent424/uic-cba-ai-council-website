export default function Header() {
  return (
    <header className="bg-uic-navy text-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              UIC College of Business Administration
            </h1>
            <p className="text-uic-red text-xl md:text-2xl font-semibold mt-1">
              AI Council
            </p>
          </div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex gap-6">
              <li>
                <a
                  href="#upcoming"
                  className="hover:text-uic-light-blue transition-colors"
                >
                  Upcoming Events
                </a>
              </li>
              <li>
                <a
                  href="#past"
                  className="hover:text-uic-light-blue transition-colors"
                >
                  Past Sessions
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-uic-light-blue transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
