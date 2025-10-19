import Image from "next/image";

export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/comps/about.jpeg"
          alt="About Us"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          We started with a simple vision: to deliver outstanding solutions that not only
          meet expectations but redefine them. Every project we take on is handled with
          precision, passion, and a commitment to excellence.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Over the years, we’ve built strong relationships with clients around the globe.
          Our reputation is rooted in our ability to deliver consistently, backed by
          innovative strategies and transparent communication.
        </p>
      </section>

      {/* Why Buyers Trust Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Buyers Trust Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <Image
                  src="/comps/about.jpeg"
                  alt="Trust"
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  {i === 1 ? "Proven Experience" : i === 2 ? "Full Transparency" : "Unmatched Support"}
                </h3>
                <p className="text-gray-600">
                  {i === 1
                    ? "With years of hands-on industry expertise, we’ve tackled challenges of all scales."
                    : i === 2
                    ? "No hidden costs. No vague timelines. We keep our clients informed at every step."
                    : "Our team is always just a message away, ready to provide guidance and support."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are the Best */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Why We’re the Best</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          We blend cutting-edge technology with human creativity, ensuring every product
          and service is designed for performance, longevity, and impact.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          From personalized service to flawless execution, our processes are built to
          deliver excellence without compromise.
        </p>
      </section>
    </div>
  );
};

export default About;
