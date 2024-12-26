import React from "react";

const ProjectsGrid = () => {
  const projects = [
    {
      title: "PTT on Wave (Motorola)",
      description: `• Core functionality implemented natively in Android and iOS, migrating the frontend from ExtJS to Flutter.
• Utilized Method Channels for communication between Flutter and native platforms.
• Focused on creating a clean architecture with BLoC state management and reducing reliance on third-party libraries.
• Developed video calling features and embedded native views within the Flutter app.`,
      tags: ["Flutter", "Android", "iOS", "BLoC", "Method Channels"],
      playStore: null,
      appStore: null,
      featured: true,
    },
    {
      title: "Instrucko",
      description: `• Designed for UK and India-based students, enabling parents to book on-demand classes for their children.
• Integrated real-time video call functionality, booking system, and live class scheduling.
• Developed the front-end using Flutter, focusing on UI/UX to improve the learning experience.`,
      tags: ["Flutter", "Video Calls", "UI/UX", "Booking System"],
      playStore: "https://play.google.com/store/apps/details?id=com.instrucko",
      appStore: "https://apps.apple.com/in/app/instrucko/id1632440837/",
      featured: true,
    },
    {
      title: "Cordelia Cruises",
      description: `• Companion app for Cordelia guests, managing cruise bookings and guest details.
• Integrated dynamic content loading and boarding pass generation.
• Collaborated with the backend team to integrate 50+ APIs to ensure seamless data flow.`,
      tags: ["Flutter", "API Integration", "Dynamic Content"],
      playStore:
        "https://play.google.com/store/apps/details?id=com.cordeliacruises.userapp",
      appStore: "https://apps.apple.com/in/app/cordelia-cruises/id1589910857",
    },
    {
      title: "Fanzly",
      description: `• Social media platform clone, with live video streaming and exclusive content.
• Implemented chat functionality and payment gateway for exclusive content.
• Developed a custom UI for live streaming and post interactions to replicate the experience of the original platform.`,
      tags: ["Flutter", "Live Streaming", "Payment Integration"],
    },
    {
      title: "Guess Who (Web)",
      description: `• A fun game where users guess the blurred image of friends.
• Created an interactive and engaging interface with a time-based challenge system.
• Designed and implemented the logic to display dynamic questions based on the users' friends' images.`,
      tags: ["Flutter Web", "Interactive Gaming", "UI Design"],
      webLink: "https://oecgame-4c5b7.web.app/",
      playStore: null,
      appStore: null,
    },
  ];

  return (
    <section
      id="projects"
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

      {/* Content */}
      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of my recent work in mobile and web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-[#4ade80]/5 border border-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all duration-300"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-[#4ade80]/20 text-[#4ade80] text-xs font-medium px-2 py-1 rounded-full border border-[#4ade80]/20">
                    Featured
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#4ade80] transition-colors">
                    {project.title}
                  </h3>

                  <div className="text-gray-400 mb-6 leading-relaxed space-y-2">
                    {project.description.split("\n").map((point, index) => (
                      <p key={index}>{point}</p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#4ade80]/10 text-gray-300 rounded-full text-sm border border-[#4ade80]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Store Links */}
                  {(project.playStore ||
                    project.appStore ||
                    project.webLink) && (
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-[#4ade80]/20">
                      {project.playStore && (
                        <a
                          href={project.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-[#4ade80]/10 hover:bg-[#4ade80]/20 rounded-lg text-sm text-white transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.677 0 .254.109.496.29.677.181.181.423.29.677.29.254 0 .496-.109.677-.29L15.146 12 4.963 1.814c-.181-.181-.423-.29-.677-.29-.254 0-.496.109-.677.29-.181.181-.29.423-.29.677 0 .254.109.496.29.677z" />
                          </svg>
                          Play Store
                        </a>
                      )}

                      {project.appStore && (
                        <a
                          href={project.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-[#4ade80]/10 hover:bg-[#4ade80]/20 rounded-lg text-sm text-white transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M17.543 12.172c-.009-1.437.567-2.534 1.73-3.355-.645-.891-1.615-1.378-2.888-1.459-1.212-.078-2.534.712-3.021.712-.512 0-1.714-.669-2.666-.669-2.051.033-4.001 1.669-4.001 4.973 0 1.104.201 2.249.603 3.436 .536 1.564 2.473 5.402 4.497 5.357 1.056-.022 1.801-.715 3.185-.715 1.338 0 2.018.715 3.185.715 2.058-.034 3.786-3.476 4.296-5.044-2.715-1.214-2.715-3.572-2.715-3.572zm-2.549-6.567c1.169-1.472 1.079-2.821 1.043-3.271-1.034.056-2.24.719-2.921 1.543-.635.738-1.134 1.807-1.134 2.902 0 .101.01.202.029.3.078.011.158.017.239.017 .862-.012 1.957-.519 2.744-1.491z" />
                          </svg>
                          App Store
                        </a>
                      )}

                      {project.webLink && (
                        <a
                          href={project.webLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-[#4ade80]/10 hover:bg-[#4ade80]/20 rounded-lg text-sm text-white transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Web App
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#4ade80]/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
