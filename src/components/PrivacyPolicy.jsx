import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <main className="min-h-screen bg-[#0a0f0d] text-white font-['Space_Grotesk']">
      {/* Header */}
      <nav className="fixed w-full z-50 bg-[#0a0f0d]/95 backdrop-blur-md py-4 border-b border-[#4ade80]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 text-gray-300 hover:text-[#4ade80] transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-[#4ade80]">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Overview
            </h2>
            <p className="leading-relaxed">
              This is a static portfolio website that showcases my work and
              professional experience. The site does not collect, store, or
              process any personal information from visitors.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Contact Information
            </h2>
            <p className="leading-relaxed">
              I have provided my contact details on this website for
              professional networking purposes. If you choose to contact me
              using these details, any communication will be handled directly
              through your chosen method of contact (email, phone, or social
              media platforms).
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Questions
            </h2>
            <p className="leading-relaxed">
              If you have any questions about this policy, you can reach me at
              laxminarayan1998@icloud.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
