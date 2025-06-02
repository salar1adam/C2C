export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Empowering Oil & Gas Professionals with Real-World Geoscience Expertise</h2>
        <p className="text-lg mb-4">At Core to Crust, our mission is simple:</p>
        <p className="text-lg mb-4">To provide high-quality, practical geoscience education for professionals working in — or transitioning into — the oil and gas industry.</p>
        <p className="text-lg">We believe that deep knowledge should be accessible, actionable, and rooted in reality — not just theory.</p>
        <hr className="my-8" />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Why This Course Exists</h2>
        <p className="text-lg mb-4">The oil and gas sector demands more than academic understanding. Success in the field requires applied insight, industry-relevant thinking, and the ability to interpret complex subsurface data with clarity.</p>
        <p className="text-lg mb-4">This course was created to fill a major gap:</p>
        <p className="text-lg">Bridging the distance between textbook learning and actual field expertise.</p>
        <p className="text-lg mt-4">Whether you're a geoscientist, engineer, technician, or energy professional, Core to Crust is designed to sharpen your skills, boost your confidence, and make you indispensable in your role.</p>
        <hr className="my-8" />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Built by a Geoscientist — For Geoscientists</h2>
        <p className="text-lg">Led by Salar Mousa Adam, a practicing applied geoscientist with hands-on field experience, this course brings you direct, unfiltered knowledge from the frontlines of the energy industry.</p>
        <p className="text-lg mt-4">No fluff. No overcomplication. Just powerful, professional training — built with clarity and purpose.</p>
        <hr className="my-8" />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Clarity First: We break down complex topics without watering them down.</li>
          <li>Career-Focused: Every lesson is designed to move your skills — and your career — forward.</li>
          <li>Community Driven: You’ll join a growing network of professionals who care about doing meaningful work in geoscience.</li>
        </ul>
        <hr className="my-8" />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">What Makes Us Different</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Real-world examples, not just slides and definitions</li>
          <li>Industry-focused learning paths tailored for upstream professionals</li>
          <li>Honest, in-depth content that prioritizes your time and your goals</li>
        </ul>
        <hr className="my-8" />
      </section>

      <section className="text-center">
        <p className="text-xl font-semibold">Want to know more?</p>
        <div className="mt-4 space-x-4">
          <a href="/curriculum" className="text-blue-600 hover:underline text-lg">Check out the course</a>
          <span className="text-lg">or</span>
          <a href="/instructor" className="text-blue-600 hover:underline text-lg">meet the instructor</a>
        </div>
      </section>
    </div>
  );
}