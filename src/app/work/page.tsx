import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function WorkPage() {
  // Sample project data - in a real app this would come from a CMS or API
  const projects = [
    {
      id: 1,
      title: "Pink Pizza Berlin",
      category: "Web Design",
      description: "A modern website for a trendy Berlin pizzeria featuring online ordering, menu design, and Google Maps integration.",
      client: "Pink Pizza Berlin",
      year: "2023",
    },
    {
      id: 2,
      title: "E-commerce Website Redesign",
      category: "Web Design",
      description: "Complete redesign of an e-commerce platform focusing on user experience, conversion optimization, and mobile responsiveness.",
      client: "Fashion Forward",
      year: "2023",
    },
    {
      id: 3,
      title: "Product Launch Video",
      category: "Video & Motion Graphics",
      description: "Cinematic product launch video featuring dynamic motion graphics and compelling visual storytelling to introduce a new tech product.",
      client: "NextGen Devices",
      year: "2023",
    },
    {
      id: 4,
      title: "Animated Explainer Series",
      category: "Video & Motion Graphics",
      description: "Series of animated explainer videos that break down complex concepts into engaging visual stories with custom motion graphics.",
      client: "EduTech Solutions",
      year: "2022",
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "Digital Marketing",
      description: "Strategic social media campaign across multiple platforms, including content creation, scheduling, and performance analysis.",
      client: "Organic Foods Co.",
      year: "2022",
    },
    {
      id: 6,
      title: "Product Packaging Design",
      category: "Packaging",
      description: "Innovative packaging design for a premium product line, focusing on sustainability, shelf presence, and brand consistency.",
      client: "Eco Products",
      year: "2021",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Navigation */}
      <Navigation currentPage="work" />

      {/* Page Header */}
      <section className="relative bg-cover bg-center h-[400px] flex items-center" style={{ backgroundImage: "url('/work-bg.jpg')" }}>
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Work</h1>
          <p className="text-xl text-secondary max-w-3xl">
            Explore our portfolio of creative projects spanning branding, web design, UI/UX, video editing, motion graphics, and digital marketing. Each project represents our commitment to crafting engaging digital experiences.
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="px-8 md:px-16 py-8 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-[#ff5500] text-white rounded-md">All Projects</button>
          <button className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">Branding</button>
          <button className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">Web Design</button>
          <button className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">UI/UX</button>
          <button className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">Video & Motion Graphics</button>
          <button className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">Digital Marketing</button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 md:px-16 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group service-card bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-200 h-80 mb-4 overflow-hidden relative">
                  {/* Placeholder for project image - in a real app, you'd use actual images */}
                  <div className="absolute inset-0 bg-[#ff5500] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-lg">View Project</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm text-gray-600">{project.category} | {project.client}</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <Link 
                    href={project.category === "Video & Motion Graphics" ? "#video-showcase" : `/work/project-${project.id}`} 
                    className="text-[#ff5500] font-medium hover:underline"
                  >
                    {project.category === "Video & Motion Graphics" ? "View Video Showcase →" : "View Case Study →"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Highlight */}
      <section id="video-showcase" className="px-8 md:px-16 py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-12">
            <span className="text-[#ff5500] font-medium uppercase text-sm tracking-wider">Featured</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Video Editing Showcase</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              Explore our video editing and motion graphics capabilities through our showcase reel. See how we transform ideas into compelling visual stories.
            </p>
          </div>
          
          {/* YouTube video embed */}
          <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden mb-12 relative">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/QKJ0qnUAGJQ?si=qnPjlV7WIUf6zEp3"
              title="Video Editing Showcase"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Video Editing Approach</h3>
              <p className="text-gray-600 mb-4">
                At Site and Sight, we believe in the power of visual storytelling. Our video editing process focuses on creating compelling narratives that engage viewers and convey your message with clarity and impact.
              </p>
              <p className="text-gray-600">
                We work closely with clients to understand their vision, audience, and goals, then apply our technical expertise to bring that vision to life with professional editing, color grading, sound design, and motion graphics.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Motion Graphics Expertise</h3>
              <p className="text-gray-600 mb-4">
                Our motion graphics add a dynamic layer to your video content, helping to explain complex concepts, highlight key information, or simply add visual interest that keeps your audience engaged.
              </p>
              <p className="text-gray-600">
                From animated logos and title sequences to full explainer videos, our motion design team creates custom animations that align with your brand and elevate your content.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-4">
            <h3 className="text-2xl font-semibold mb-4">Our Video Services Include:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <li className="flex items-start">
                <span className="text-[#ff5500] mr-2">✓</span>
                <span>Corporate videos & commercials</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5500] mr-2">✓</span>
                <span>Product demos & tutorials</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5500] mr-2">✓</span>
                <span>Explainer videos</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5500] mr-2">✓</span>
                <span>Social media content</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5500] mr-2">✓</span>
                <span>Event highlights</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5500] mr-2">✓</span>
                <span>Motion graphics & animation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5500] mr-2">✓</span>
                <span>Title sequences</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5500] mr-2">✓</span>
                <span>Color grading & correction</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5500] mr-2">✓</span>
                <span>Sound design & audio editing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 md:px-16 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            We'd love to hear about your ideas and help bring them to life. Let's create something amazing together.
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