import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Sparkles,
  Flame,
  Target,
  Users,
  Zap,
  TrendingUp,
  Heart,
  ArrowRight,
  Github,
  Twitter,
  Copy,
  ExternalLink,
} from "lucide-react";
import "./App.css";

const AlchemyLandingPage = () => {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Poppins:wght@300;400;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-purple-950/95 backdrop-blur-xl border-b border-purple-800/50 shadow-2xl shadow-purple-900/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {/* <Sparkles
                  className="w-6 h-6 text-purple-900"
                  strokeWidth={2.5}
                /> */}

                <img
                  src="alchfavicon.png"
                  alt="logo"
                  className="w-full rounded-full"
                />
              </div>
              <span
                className="text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Alchemy
              </span>
            </button>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-purple-200 hover:text-yellow-400 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("tokenomics")}
                className="text-purple-200 hover:text-yellow-400 transition-colors font-medium"
              >
                Tokenomics
              </button>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="text-purple-200 hover:text-yellow-400 transition-colors font-medium"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection("community")}
                className="text-purple-200 hover:text-yellow-400 transition-colors font-medium"
              >
                Community
              </button>

              {/* CTA Button */}
              <a
                href="https://x.com/i/communities/1978345630406693026"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg font-semibold text-purple-950 hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-900/30 flex items-center gap-2">
                  Join Community
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    strokeWidth={2.5}
                  />
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-purple-200 hover:text-yellow-400 transition-colors"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-purple-800/50 bg-purple-950/95 backdrop-blur-xl"
            >
              <div className="px-6 py-4 space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left text-purple-200 hover:text-yellow-400 transition-colors font-medium py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="block w-full text-left text-purple-200 hover:text-yellow-400 transition-colors font-medium py-2"
                >
                  Tokenomics
                </button>
                <button
                  onClick={() => scrollToSection("roadmap")}
                  className="block w-full text-left text-purple-200 hover:text-yellow-400 transition-colors font-medium py-2"
                >
                  Roadmap
                </button>
                <button
                  onClick={() => scrollToSection("community")}
                  className="block w-full text-left text-purple-200 hover:text-yellow-400 transition-colors font-medium py-2"
                >
                  Community
                </button>
                <a
                  href="https://x.com/i/communities/1978345630406693026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg font-semibold text-purple-950 text-center">
                    Join Community
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      <div
        className="bg-gradient-to-b from-purple-900 via-purple-800 to-purple-950 text-white overflow-hidden"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
          {/* Luxurious gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/20 via-transparent to-transparent"></div>

          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Banner - Styled to match alchemy_banner.png */}
              <motion.div
                className="mb-12 w-full max-w-5xl mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
                  <div className="relative rounded-3xl overflow-hidden border-4 border-yellow-400/30 shadow-2xl bg-gradient-to-r from-purple-600 via-purple-700 to-purple-600">
                    <img
                      src="alchemy_banner.png"
                      alt="hero banner"
                      className="w-full"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.p
                className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-purple-200/90"
                style={{ fontFamily: "'Caveat', cursive" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                The Alchemy of Memes & Magic — $ALCH
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-purple-300/80 mb-16 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Turning meme culture into digital gold through community-driven
                alchemy
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <a
                  href="https://x.com/i/communities/1978345630406693026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <button className="relative px-10 py-5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-purple-950 rounded-xl font-bold text-lg shadow-2xl shadow-yellow-900/40 border border-yellow-300/50 hover:shadow-yellow-800/60 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      Join the X Community
                    </span>
                  </button>
                </a>

                <a
                  href="https://solscan.io/token/WXsX5HSoVquYRGuJXJrCSogT1M6nZiPRrfZhQsPcXAU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <button className="px-10 py-5 bg-purple-800/40 backdrop-blur-md border-2 border-purple-400/50 text-purple-100 rounded-xl font-bold text-lg hover:bg-purple-700/50 hover:border-purple-300/70 transition-all duration-300 shadow-xl shadow-purple-900/30">
                    <span className="flex items-center gap-2">
                      View Contract
                      <ExternalLink className="w-5 h-5" strokeWidth={2.5} />
                    </span>
                  </button>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-purple-300/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-purple-300/60 rounded-full"></div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-200 to-yellow-300 bg-clip-text text-transparent"
                style={{ fontFamily: "'Caveat', cursive" }}
                variants={fadeInUp}
              >
                What is Alchemy?
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInUp}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                    <div className="relative bg-purple-800/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30">
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                          <Zap
                            className="w-10 h-10 text-purple-900"
                            strokeWidth={2.5}
                          />
                        </div>
                      </div>
                      <p className="text-lg text-purple-200 leading-relaxed">
                        Alchemy is where ancient mysticism meets modern meme
                        culture. Built on Solana, $ALCH represents the
                        transformation of creative energy into digital value.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-700/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-3">
                      <Users
                        className="w-7 h-7 text-yellow-400"
                        strokeWidth={2.5}
                      />
                      <h3 className="text-2xl font-bold text-yellow-400">
                        Community-Driven
                      </h3>
                    </div>
                    <p className="text-purple-200">
                      Every holder is an alchemist, contributing to the
                      collective magic of the project
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-700/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles
                        className="w-7 h-7 text-yellow-400"
                        strokeWidth={2.5}
                      />
                      <h3 className="text-2xl font-bold text-yellow-400">
                        Meme Magic
                      </h3>
                    </div>
                    <p className="text-purple-200">
                      Harnessing the power of internet culture to create
                      something truly unique
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-700/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp
                        className="w-7 h-7 text-yellow-400"
                        strokeWidth={2.5}
                      />
                      <h3 className="text-2xl font-bold text-yellow-400">
                        Digital Gold
                      </h3>
                    </div>
                    <p className="text-purple-200">
                      Transforming creative participation into tangible value
                      for the community
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section
          id="tokenomics"
          className="py-32 px-6 bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-900 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255, 215, 0, 0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-5xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                style={{ fontFamily: "'Caveat', cursive" }}
                variants={fadeInUp}
              >
                Tokenomics
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div variants={fadeInUp} className="group">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-purple-800/50 to-purple-900/50 backdrop-blur-xl rounded-3xl p-10 border-2 border-yellow-400/30 h-full flex flex-col items-center justify-center text-center hover:border-yellow-300/50 transition-all duration-500 shadow-2xl">
                      <div className="mb-6 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                        <TrendingUp
                          className="w-10 h-10 text-yellow-300"
                          strokeWidth={2}
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-yellow-300">
                        Total Supply
                      </h3>
                      <p className="text-5xl font-bold text-white mb-3">1B</p>
                      <p className="text-purple-300/80">$ALCH tokens</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="group">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-3xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-purple-800/50 to-purple-900/50 backdrop-blur-xl rounded-3xl p-10 border-2 border-purple-400/30 h-full flex flex-col items-center justify-center text-center hover:border-purple-300/50 transition-all duration-500 shadow-2xl">
                      <div className="mb-6 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full flex items-center justify-center border border-purple-400/30">
                        <Flame
                          className="w-10 h-10 text-purple-300"
                          strokeWidth={2}
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-purple-300">
                        Liquidity
                      </h3>
                      <p className="text-5xl font-bold text-white mb-3">
                        Burned
                      </p>
                      <p className="text-purple-300/80">LP tokens destroyed</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="group">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-purple-800/50 to-purple-900/50 backdrop-blur-xl rounded-3xl p-10 border-2 border-yellow-400/30 h-full flex flex-col items-center justify-center text-center hover:border-yellow-300/50 transition-all duration-500 shadow-2xl">
                      <div className="mb-6 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                        <Target
                          className="w-10 h-10 text-yellow-300"
                          strokeWidth={2}
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-yellow-300">
                        Tax
                      </h3>
                      <p className="text-5xl font-bold text-white mb-3">0%</p>
                      <p className="text-purple-300/80">Buy & Sell</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="mt-16 text-center">
                <div className="inline-block bg-purple-800/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/30 shadow-xl">
                  <p className="text-sm text-purple-300/80 mb-3 uppercase tracking-wider">
                    Contract Address
                  </p>
                  <div className="flex items-center gap-3 flex-wrap justify-center">
                    <code className="text-xs md:text-sm text-yellow-300/90 break-all font-mono">
                      WXsX5HSoVquYRGuJXJrCSogT1M6nZiPRrfZhQsPcXAU
                    </code>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            "WXsX5HSoVquYRGuJXJrCSogT1M6nZiPRrfZhQsPcXAU"
                          )
                        }
                        className="p-2 hover:bg-purple-700/50 rounded-lg transition-colors"
                        title="Copy contract address"
                      >
                        <Copy className="w-4 h-4 text-purple-300 hover:text-yellow-400" />
                      </button>
                      <a
                        href="https://solscan.io/token/WXsX5HSoVquYRGuJXJrCSogT1M6nZiPRrfZhQsPcXAU"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-purple-700/50 rounded-lg transition-colors"
                        title="View on Solscan"
                      >
                        <ExternalLink className="w-4 h-4 text-purple-300 hover:text-yellow-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-200 to-yellow-300 bg-clip-text text-transparent"
                style={{ fontFamily: "'Caveat', cursive" }}
                variants={fadeInUp}
              >
                The Alchemical Journey
              </motion.h2>

              <div className="space-y-8">
                <motion.div variants={fadeInUp} className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/50">
                        <Sparkles
                          className="w-8 h-8 text-purple-900"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                    <div className="flex-grow bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-2 text-yellow-400">
                        Phase 1: The Awakening
                      </h3>
                      <p className="text-purple-200">
                        Launch on Solana, build the community, establish the
                        magic circle on X
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative ml-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
                        <Zap className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="flex-grow bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-2 text-purple-300">
                        Phase 2: The Transformation
                      </h3>
                      <p className="text-purple-200">
                        Strategic partnerships, enhanced liquidity, meme
                        competitions and community events
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative ml-16">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/50">
                        <Flame
                          className="w-8 h-8 text-purple-900"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                    <div className="flex-grow bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-2 text-yellow-400">
                        Phase 3: The Transmutation
                      </h3>
                      <p className="text-purple-200">
                        Major exchange listings, global marketing, NFT
                        collection, DAO governance
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative ml-24">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-400/50 animate-pulse">
                        <TrendingUp
                          className="w-8 h-8 text-purple-900"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                    <div className="flex-grow bg-gradient-to-br from-yellow-900/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/50 hover:border-yellow-300/70 transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-2 text-yellow-300">
                        Phase 4: Digital Gold
                      </h3>
                      <p className="text-purple-200">
                        Full ecosystem launch, utility features, community-led
                        projects, legendary status achieved
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Community Section */}
        <section
          id="community"
          className="py-32 px-6 bg-gradient-to-b from-purple-900 via-purple-950 to-purple-900 relative overflow-hidden"
        >
          {/* Luxurious background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent"></div>
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div variants={fadeInUp} className="mb-12">
                <div className="flex justify-center items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400/20 blur-xl"></div>
                    <div className="relative w-16 h-16 border-2 border-yellow-400/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Users
                        className="w-8 h-8 text-yellow-400"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-300/20 blur-2xl"></div>
                    <div className="relative w-20 h-20 border-2 border-yellow-300/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Sparkles
                        className="w-10 h-10 text-yellow-300"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400/20 blur-xl"></div>
                    <div className="relative w-16 h-16 border-2 border-yellow-400/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Users
                        className="w-8 h-8 text-yellow-400"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.h2
                className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                style={{ fontFamily: "'Caveat', cursive" }}
                variants={fadeInUp}
              >
                The Magic Circle
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-purple-200/90 mb-16 max-w-2xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                Join a vibrant community of alchemists, meme creators, and
                crypto enthusiasts transforming the ordinary into the
                extraordinary
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
              >
                <div className="bg-purple-800/30 backdrop-blur-md rounded-2xl p-8 border border-purple-400/20 shadow-xl shadow-purple-900/20">
                  <div className="text-4xl font-bold text-yellow-400 mb-3 bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                    10K+
                  </div>
                  <div className="text-sm text-purple-300/80">
                    Community Members
                  </div>
                </div>
                <div className="bg-purple-800/30 backdrop-blur-md rounded-2xl p-8 border border-purple-400/20 shadow-xl shadow-purple-900/20">
                  <div className="text-4xl font-bold text-yellow-400 mb-3 bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-sm text-purple-300/80">Daily Memes</div>
                </div>
                <div className="bg-purple-800/30 backdrop-blur-md rounded-2xl p-8 border border-purple-400/20 shadow-xl shadow-purple-900/20">
                  <div className="text-4xl font-bold text-yellow-400 mb-3 bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <div className="text-sm text-purple-300/80">Active Chat</div>
                </div>
                <div className="bg-purple-800/30 backdrop-blur-md rounded-2xl p-8 border border-purple-400/20 shadow-xl shadow-purple-900/20">
                  <div className="text-4xl font-bold text-yellow-400 mb-3 bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-sm text-purple-300/80">Pure Magic</div>
                </div>
              </motion.div>

              <motion.a
                href="https://x.com/i/communities/1978345630406693026"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group inline-block"
              >
                <div className="relative px-12 py-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-yellow-900/30 border border-yellow-300/50 hover:shadow-yellow-800/50">
                  <span className="relative z-10 text-purple-950 flex items-center justify-center gap-2">
                    Join the Conversation
                    <ArrowRight
                      className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                      strokeWidth={2.5}
                    />
                  </span>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="cta" className="py-32 px-6 relative overflow-hidden">
          {/* Luxurious background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent"></div>
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div variants={fadeInUp} className="mb-12">
                <div className="flex justify-center items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 blur-2xl"></div>
                    <div className="relative w-16 h-16 border-2 border-yellow-400/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Zap
                        className="w-8 h-8 text-yellow-400"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-yellow-500/20 blur-3xl"></div>
                    <div className="relative w-24 h-24 border-2 border-yellow-300/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Sparkles
                        className="w-12 h-12 text-yellow-300"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 blur-2xl"></div>
                    <div className="relative w-16 h-16 border-2 border-yellow-400/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Zap
                        className="w-8 h-8 text-yellow-400"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent leading-tight"
                style={{ fontFamily: "'Caveat', cursive" }}
                variants={fadeInUp}
              >
                Become Part of the Alchemy
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-purple-200/90 mb-16 max-w-2xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                Own, trade, and create the magic behind $ALCH. The
                transformation begins now.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                variants={fadeInUp}
              >
                <a href="#" className="group relative">
                  <div className="relative px-12 py-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-yellow-900/30 border border-yellow-300/50">
                    <span className="relative z-10 text-purple-950 flex items-center justify-center gap-2">
                      Buy $ALCH
                      <ArrowRight
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        strokeWidth={2.5}
                      />
                    </span>
                  </div>
                </a>

                <a
                  href="https://x.com/i/communities/1978345630406693026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="px-12 py-6 bg-purple-800/30 backdrop-blur-md border-2 border-purple-400/40 rounded-xl font-bold text-xl transition-all duration-300 shadow-xl shadow-purple-900/20 hover:bg-purple-700/40 hover:border-purple-300/60">
                    <span className="text-purple-100 flex items-center justify-center gap-2">
                      Join Community
                      <Users
                        className="w-5 h-5 group-hover:scale-110 transition-transform"
                        strokeWidth={2.5}
                      />
                    </span>
                  </div>
                </a>
              </motion.div>

              {/* Decorative line */}
              <motion.div
                variants={fadeInUp}
                className="mt-16 flex items-center justify-center gap-4"
              >
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"></div>
                <Sparkles
                  className="w-5 h-5 text-yellow-400/60"
                  strokeWidth={1.5}
                />
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-purple-950 border-t border-purple-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Sparkles
                      className="w-6 h-6 text-purple-900"
                      strokeWidth={2.5}
                    />
                  </div>
                  <span
                    className="text-2xl font-bold text-yellow-400"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    ALCH
                  </span>
                </div>
                <p className="text-sm text-purple-300">
                  Transforming memes into magic
                </p>
              </div>

              <div className="text-center">
                <h4 className="font-bold text-yellow-400 mb-3">Community</h4>
                <div className="space-y-2">
                  <a
                    href="https://x.com/i/communities/1978345630406693026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-purple-300 hover:text-yellow-400 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>X Community</span>
                  </a>
                  <a
                    href="https://github.com/MidTermDev/Alchemy#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-purple-300 hover:text-yellow-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              <div className="text-center md:text-right">
                <h4 className="font-bold text-yellow-400 mb-3">Contract</h4>
                <div className="flex items-center justify-center md:justify-end gap-2">
                  <code className="text-xs text-purple-300 break-all">
                    WXsX...cXAU
                  </code>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "WXsX5HSoVquYRGuJXJrCSogT1M6nZiPRrfZhQsPcXAU"
                      )
                    }
                    className="p-1 hover:bg-purple-800 rounded transition-colors"
                    title="Copy contract address"
                  >
                    <Copy className="w-4 h-4 text-purple-300 hover:text-yellow-400" />
                  </button>
                  <a
                    href="https://solscan.io/token/WXsX5HSoVquYRGuJXJrCSogT1M6nZiPRrfZhQsPcXAU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 hover:bg-purple-800 rounded transition-colors"
                    title="View on Solscan"
                  >
                    <ExternalLink className="w-4 h-4 text-purple-300 hover:text-yellow-400" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-purple-800">
              <p className="text-purple-400 text-sm flex items-center justify-center gap-2">
                Made with{" "}
                <Heart className="w-4 h-4 text-purple-400 fill-purple-400" /> by
                the Alchemy community
              </p>
              <p className="text-purple-500 text-xs mt-2">
                © 2025 Alchemy. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AlchemyLandingPage;
