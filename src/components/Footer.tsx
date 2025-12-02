export default function Footer() {
  return (
    <footer className="bg-uic-navy text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold">
              UIC College of Business Administration
            </p>
            <p className="text-gray-300 text-sm">
              AI Council
            </p>
          </div>
          <div className="text-center md:text-right text-sm text-gray-300">
            <p>University of Illinois Chicago</p>
            <p>&copy; {new Date().getFullYear()} UIC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
