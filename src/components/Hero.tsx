export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-uic-navy to-uic-light-blue text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Exploring AI in Business Education
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          The AI Council brings together faculty to explore, discuss, and share
          best practices for integrating artificial intelligence into our
          curriculum and teaching methods.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#upcoming"
            className="bg-white text-uic-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Upcoming Events
          </a>
          <a
            href="#about"
            className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-uic-navy transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
