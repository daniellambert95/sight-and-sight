import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import DotPattern from "../components/DotPattern";

export default function AboutPage() {
  // Sample team data - in a real app this would come from a CMS or API
  const teamMembers = [
    {
      id: 1,
      name: "Daniel Lambert",
      role: "Creative Lead",
      bio: "With over 15 years of experience in web development and creative design, Daniel is the founder and creative lead who develops all our websites and creates stunning graphics. His innovative vision and technical expertise drive our projects forward.",
      image: "/daniel.png"
    },
    {
      id: 2,
      name: "Killian Walpole",
      role: "Marketing Manager",
      bio: "Killian specializes in PR communications, email marketing, and social media strategy. With expertise in copywriting and digital marketing, he crafts compelling campaigns that engage audiences and drive results.",
      image: "/killian.png"
    },
    {
      id: 3,
      name: "Bill Pierce",
      role: "Video & Motion Graphics Designer",
      bio: "Bill specializes in video editing and motion graphics design, creating dynamic visual content that brings stories to life through animation and engaging video production.",
      image: "/bill.png"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Navigation */}
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] flex items-center" style={{ backgroundImage: "url('/about-bg.jpg')" }}>
        <div className="absolute inset-0 bg-amber-50 bg-opacity-50"></div>
        <DotPattern color="#B05C35" size={1.5} spacing={22} className="z-[1] opacity-25" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Us</h1>
          <p className="text-xl text-dark-primary max-w-3xl">
            Site and Sight is a creative studio that combines strategic thinking with innovative design to craft digital experiences that captivate and inspire.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-8 md:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2020, Site and Sight began with a simple mission: to create digital experiences that bridge the gap between form and function, between what looks good and what works well.
            </p>
            <p className="text-gray-600 mb-6">
              Our name represents our dual focus – &ldquo;Site&rdquo; referring to the digital spaces we create and &ldquo;Sight&rdquo; representing the visual impact and user perception of those spaces. This duality guides our approach to every project.
            </p>
            <p className="text-gray-600">
              Today, we&apos;re a tight-knit team of designers, developers, and strategists who collaborate closely with our clients to bring their vision to life while pushing the boundaries of what&apos;s possible in digital design.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg h-[400px] relative">
            {/* Placeholder for studio image - in a real app, you'd use an actual image */}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-8 md:px-16 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="bg-[#ff5500] rounded-full w-12 h-12 flex items-center justify-center text-white mb-6 font-bold">1</div>
              <h3 className="text-xl font-semibold mb-4">Discover</h3>
              <p className="text-gray-600">
                We begin by deeply understanding your business, goals, audience, and competitive landscape through research and strategic discussions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="bg-[#ff5500] rounded-full w-12 h-12 flex items-center justify-center text-white mb-6 font-bold">2</div>
              <h3 className="text-xl font-semibold mb-4">Design</h3>
              <p className="text-gray-600">
                Our creative process combines strategic thinking with innovative design, focusing on both aesthetics and functionality to create engaging experiences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="bg-[#ff5500] rounded-full w-12 h-12 flex items-center justify-center text-white mb-6 font-bold">3</div>
              <h3 className="text-xl font-semibold mb-4">Develop</h3>
              <p className="text-gray-600">
                We bring designs to life with clean, efficient code, ensuring responsive behavior, optimal performance, and seamless interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-8 md:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center service-card bg-white border border-gray-200 p-6 rounded-lg">
                <div className="relative bg-gray-200 rounded-full border-2 border-primary w-48 h-48 mx-auto mb-6 overflow-hidden">
                  {member.image ? (
                    <Image 
                      src={member.image}
                      alt={`Photo of ${member.name}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-full"
                    />
                  ) : (
                    // Placeholder for team members without images
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-[#ff5500] mb-4">{member.role}</p>
                <p className="text-gray-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-8 md:px-16 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Creativity Without Boundaries</h3>
              <p className="text-gray-600">
                We believe in pushing creative boundaries while maintaining a focus on solving real problems for real users. Our designs are both innovative and purposeful.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">User-Centered Approach</h3>
              <p className="text-gray-600">
                We place users at the center of our design process, ensuring that every decision enhances the user experience and meets their needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Collaborative Partnership</h3>
              <p className="text-gray-600">
                We see our clients as partners and believe the best work comes from open collaboration, clear communication, and mutual respect.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Continuous Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of industry trends and technologies, constantly learning and evolving to bring the best solutions to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 md:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to collaborate?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            We&apos;re always excited to partner with forward-thinking brands and businesses. Let&apos;s create something amazing together.
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-3 bg-[#ff5500] text-white rounded-md hover:bg-[#e64d00] transition-colors inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 