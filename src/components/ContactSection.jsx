import React from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const ContactSection = () => {
  const phoneNumber = "+919776229989";
  const email = "laxminarayan1998@icloud.com";

  const socials = [
    {
      icon: Github,
      link: "https://github.com/laxminarayan1998",
      label: "GitHub",
      username: "@laxminarayan1998"
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/laxminarayan1998",
      label: "LinkedIn",
      username: "laxminarayan1998"
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/nryn_das",
      label: "Instagram",
      username: "@nryn_das"
    }
  ];

  const handleWhatsAppClick = () => {
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanNumber}`, "_blank");
  };

  const handleLocationClick = () => {
    window.open("https://maps.google.com/?q=Bangalore,India", "_blank");
  };

  return (
    <section id="contact" className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-green-500/10 via-transparent to-transparent opacity-50" />
      
      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg">
            Have an exciting project or opportunity? I'm always open to new ideas and collaborations.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-2 grid gap-6">
            {/* Email Card */}
            <a
              href={`mailto:${email}`}
              className="group block p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-green-500/10 text-green-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Email</h3>
                    <p className="text-gray-400 mt-1">{email}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-green-500 transition-colors" />
              </div>
            </a>

            {/* Phone & WhatsApp Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href={`tel:${phoneNumber}`}
                className="group block p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-green-500/10 text-green-500">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">Phone</h3>
                      <p className="text-gray-400 mt-1">
                        {phoneNumber.replace(/(\+\d{2})(\d{3})(\d{3})(\d{4})/, "$1 $2-$3-$4")}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-green-500 transition-colors" />
                </div>
              </a>

              <button
                onClick={handleWhatsAppClick}
                className="group block p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-green-500/50 transition-all duration-300 text-left"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-green-500/10 text-green-500">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">WhatsApp</h3>
                      <p className="text-gray-400 mt-1">Message directly</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-green-500 transition-colors" />
                </div>
              </button>
            </div>
          </div>

          {/* Social Links Panel */}
          <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-8">
            <h3 className="font-semibold text-white text-lg mb-6">Social Profiles</h3>
            <div className="space-y-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-green-500/10 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                    <div>
                      <p className="text-white font-medium">{social.label}</p>
                      <p className="text-gray-400 text-sm">{social.username}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-green-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Location Button */}
        <button
          onClick={handleLocationClick}
          className="mt-8 mx-auto flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-green-500/10 border border-white/10 hover:border-green-500/30 transition-all duration-300"
        >
          <MapPin className="w-5 h-5 text-green-500" />
          <span className="text-white">Bangalore, India</span>
        </button>
      </div>
    </section>
  );
};

export default ContactSection;