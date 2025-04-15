import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Services() {
  // Array of services with descriptions
  const services = [
    {
      title: "Website Development",
      description: "Custom web design and development tailored to your brand's unique voice and business needs.",
      icon: "💻"
    },
    {
      title: "Website Deployment",
      description: "Seamless deployment of your website with optimized performance and security considerations.",
      icon: "🚀"
    },
    {
      title: "Web Hosting",
      description: "Reliable hosting solutions with 99.9% uptime guarantee and excellent support.",
      icon: "🌐"
    },
    {
      title: "Video Editing",
      description: "Professional video editing services that transform raw footage into compelling visual stories with perfect pacing and seamless transitions.",
      icon: "🎬"
    },
    {
      title: "Motion Graphics",
      description: "Dynamic motion graphics and animations that bring your brand to life and enhance your storytelling across all platforms.",
      icon: "✨"
    },
    {
      title: "PR Communication",
      description: "Strategic public relations to enhance your brand image and reach your target audience effectively.",
      icon: "📣"
    },
    {
      title: "Graphic Design",
      description: "Eye-catching visuals that communicate your brand's message and captivate your audience.",
      icon: "🎨"
    },
    {
      title: "SEO Optimization",
      description: "Data-driven SEO strategies to improve your search rankings and drive organic traffic.",
      icon: "📊"
    },
    {
      title: "Email Marketing",
      description: "Targeted email campaigns that convert leads into customers and foster brand loyalty.",
      icon: "📧"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to grow your online presence and business.",
      icon: "📱"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navigation currentPage="services" />
      
      {/* Hero Section */}
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Services</h1>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl">
            We offer a comprehensive range of digital services to help your business thrive in the online world.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card bg-white border border-gray-200 p-8 rounded-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  href={service.title === "Video Editing" || service.title === "Motion Graphics" ? "/work#video-showcase" : "/contact"} 
                  className="text-[#ff5500] font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 px-8 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#ff5500] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">We learn about your business, goals, and requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ff5500] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a tailored strategy to meet your specific needs.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ff5500] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">We bring your project to life with expert execution.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ff5500] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">We provide ongoing support to ensure continued success.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to elevate your digital presence?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how our services can help you achieve your business goals.
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-[#ff5500] text-white rounded-md hover:bg-[#e64d00] transition-colors text-lg font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 