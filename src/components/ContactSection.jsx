import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

const ContactSection = () => {
  const phoneNumber = "+919776229989";
  const email = "laxminarayan1998@icloud.com";

  const socials = [
    {
      icon: Github,
      link: "https://github.com/laxminarayan1998",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/laxminarayan1998",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/nryn_das",
      label: "Instagram",
    },
  ];

  const handleWhatsAppClick = () => {
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanNumber}`, "_blank");
  };

  const handleLocationClick = () => {
    window.open("https://maps.google.com/?q=Bangalore,India", "_blank");
  };

  return (
    <section
      id="contact"
      className="min-h-screen relative overflow-hidden bg-[#0a0f0d]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4ade80]/5 via-transparent to-transparent" />
      </div>

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#4ade80 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#4ade80] font-medium mb-4 inline-block">
              Let's Connect
            </span>
            <h2 className="text-4xl font-bold mb-6 text-white">Get in Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? Feel free to reach
              out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Email Card */}
            <a
              href={`mailto:${email}`}
              className="group p-6 rounded-2xl bg-[#4ade80]/5 border border-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#4ade80]/10 text-[#4ade80] group-hover:bg-[#4ade80] group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-white">Email</h3>
              </div>
              <p className="text-gray-400 group-hover:text-[#4ade80] transition-colors text-sm">
                {email}
              </p>
            </a>

            {/* Location Card */}
            <button
              onClick={handleLocationClick}
              className="group p-6 rounded-2xl bg-[#4ade80]/5 border border-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all duration-300 text-left w-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#4ade80]/10 text-[#4ade80] group-hover:bg-[#4ade80] group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-white">Location</h3>
              </div>
              <p className="text-gray-400 group-hover:text-[#4ade80] transition-colors">
                Bangalore, India
              </p>
            </button>

            {/* Phone Card */}
            <a
              href={`tel:${phoneNumber}`}
              className="group p-6 rounded-2xl bg-[#4ade80]/5 border border-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#4ade80]/10 text-[#4ade80] group-hover:bg-[#4ade80] group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-white">Phone</h3>
              </div>
              <p className="text-gray-400 group-hover:text-[#4ade80] transition-colors">
                {phoneNumber.replace(
                  /(\+\d{2})(\d{3})(\d{3})(\d{4})/,
                  "$1 $2-$3-$4"
                )}
              </p>
            </a>

            {/* WhatsApp Card */}
            <button
              onClick={handleWhatsAppClick}
              className="group p-6 rounded-2xl bg-[#4ade80]/5 border border-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all duration-300 text-left w-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#4ade80]/10 text-[#4ade80] group-hover:bg-[#4ade80] group-hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-white">WhatsApp</h3>
              </div>
              <p className="text-gray-400 group-hover:text-[#4ade80] transition-colors">
                Message on WhatsApp
              </p>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-[#4ade80]/5 border border-[#4ade80]/20 
                  transition-all duration-300 hover:scale-110 hover:border-[#4ade80]/50"
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-[#4ade80] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
