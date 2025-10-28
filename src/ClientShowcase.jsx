import React, { useEffect, useRef, useState } from "react";
import "./ClientShowcase.css";

function ClientShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clients = [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "James Wilson",
      profileLink: "https://linkedin.com/in/james-wilson",
    },
    {
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      name: "Aria Lee",
      profileLink: "https://linkedin.com/in/aria-lee",
    },
    {
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "David Kim",
      profileLink: "https://linkedin.com/in/david-kim",
    },
    {
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      name: "Sara Gomez",
      profileLink: "https://linkedin.com/in/sara-gomez",
    },
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      name: "Henry Singh",
      profileLink: "https://linkedin.com/in/henry-singh",
    },
  ];

  // Split clients for left/right columns
  const leftClients = clients.slice(0, 2);
  const rightClients = clients.slice(2);

  return (
    <div className="client-showcase-section" ref={containerRef}>
      <div className="client-showcase-container11">
        <div className="client-showcase-title-area">
          <span className="logo-icon">⚡</span>
          <p className="client__text__heading">Collaborators</p>
        </div>

        <h1
          className={`client-title ${isVisible ? "animate-slide-up" : ""}`}
          style={{ textAlign: "left" }}
        >
          Meet Our <span className="text-neon">Collaborators</span>
        </h1>
        <p
          className={`client-description ${
            isVisible ? "animate-slide-up-delayed" : ""
          }`}
          style={{ textAlign: "left" }}
        >
          Partnering with top innovators and teams to shape the future of Web3
          and beyond.
        </p>
      </div>
      <div className="client-showcase-cards-container">
        {isMobile ? (
          <div className="client-showcase-single-column scroll-up">
            <div className="scroll-content">
              {[...clients, ...clients].map((c, i) => (
                <a
                  className="client-card"
                  key={`mobile-client-${i}`}
                  target="_blank"
                  href={c.profileLink}
                  rel="noopener noreferrer"
                >
                  <img className="client-image" src={c.image} alt={c.name} />
                  <p className="client-name">{c.name}</p>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* LEFT COLUMN scrolls up (first 2) */}
            <div className="client-showcase-column scroll-up">
              <div className="scroll-content">
                {[...leftClients, ...leftClients].map((c, i) => (
                  <a
                    className="client-card"
                    key={`left-client-${i}`}
                    target="_blank"
                    href={c.profileLink}
                    rel="noopener noreferrer"
                  >
                    <img className="client-image" src={c.image} alt={c.name} />
                    <p className="client-name">{c.name}</p>
                  </a>
                ))}
              </div>
            </div>
            {/* RIGHT COLUMN scrolls down (last 3) */}
            <div className="client-showcase-column scroll-down">
              <div className="scroll-content">
                {[...rightClients, ...rightClients].map((c, i) => (
                  <a
                    className="client-card"
                    key={`right-client-${i}`}
                    target="_blank"
                    href={c.profileLink}
                    rel="noopener noreferrer"
                  >
                    <img className="client-image" src={c.image} alt={c.name} />
                    <p className="client-name">{c.name}</p>
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
        {/* Gradient overlays as before */}
        <div className="client_showcase_gradient"></div>
        <div className="client_showcase_gradient1"></div>
      </div>
    </div>
  );
}

export default ClientShowcase;
