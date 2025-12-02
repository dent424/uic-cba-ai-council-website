export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-uic-navy mb-6">
          About the AI Council
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-uic-navy mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-4">
              The UIC College of Business Administration AI Council is dedicated to
              exploring how artificial intelligence can enhance teaching, learning,
              and research in business education. We provide a forum for faculty
              to share experiences, best practices, and innovative approaches.
            </p>
            <p className="text-gray-700">
              Through our brownbag sessions, we bring together faculty from across
              departments to discuss practical applications of AI tools in the
              classroom, ethical considerations, and policy guidance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-uic-navy mb-3">
              Brownbag Sessions
            </h3>
            <p className="text-gray-700 mb-4">
              Our brownbag series features presentations from UIC faculty and
              external experts on topics ranging from using generative AI in
              coursework to creating custom AI tools for classroom use.
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-uic-navy mb-2">Session Details</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-uic-light-blue">&#8226;</span>
                  Weekly sessions on Wednesdays
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-uic-light-blue">&#8226;</span>
                  Open to all CBA faculty and staff
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-uic-light-blue">&#8226;</span>
                  Recordings available for select sessions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
