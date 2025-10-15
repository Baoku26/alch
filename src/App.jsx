import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  RefreshCw,
  Coins,
} from "lucide-react";
import "./App.css";

const AlchemyLandingPage = () => {
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
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
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
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
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

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-purple-200 hover:text-yellow-400 transition-colors font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("tokenomics")}
                className="text-purple-200 hover:text-yellow-400 transition-colors font-medium"
              >
                Tokens
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-purple-200 hover:text-yellow-400 transition-colors font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("community")}
                className="text-purple-200 hover:text-yellow-400 transition-colors font-medium"
              >
                Community
              </button>

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
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="block w-full text-left text-purple-200 hover:text-yellow-400 transition-colors font-medium py-2"
                >
                  Tokens
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="block w-full text-left text-purple-200 hover:text-yellow-400 transition-colors font-medium py-2"
                >
                  Features
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/20 via-transparent to-transparent"></div>

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
                      alt="Alchemy Banner"
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
                Hold $ALCH, Earn $GOLD
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-purple-300/80 mb-16 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Fully automated reward distribution on Solana. Simply hold $ALCH
                and earn proportional $GOLD rewards
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <a
                  href="https://jup.ag/swap/SOL-WXsX5HSoVquYRGuJXJrCSogT1M6nZiPRrfZhQsPcXAU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <button className="relative px-10 py-5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-purple-950 rounded-xl font-bold text-lg shadow-2xl shadow-yellow-900/40 border border-yellow-300/50 hover:shadow-yellow-800/60 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      Buy $ALCH
                      <Coins className="w-5 h-5" strokeWidth={2.5} />
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

        {/* How It Works Section */}
        <section id="about" className="py-32 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-5xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-purple-200 to-yellow-300 bg-clip-text text-transparent"
                style={{ fontFamily: "'Caveat', cursive" }}
                variants={fadeInUp}
              >
                How It Works
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-800/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                      <Coins
                        className="w-8 h-8 text-yellow-400"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400 text-center">
                    1. Collect Fees
                  </h3>
                  <p className="text-purple-200 text-center leading-relaxed">
                    Trading fees are automatically collected from the ALCH/SOL
                    liquidity pool every few minutes
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-800/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                      <RefreshCw
                        className="w-8 h-8 text-yellow-400"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400 text-center">
                    2. Convert to $GOLD
                  </h3>
                  <p className="text-purple-200 text-center leading-relaxed">
                    SOL is swapped to $GOLD using Jupiter aggregator for the
                    best exchange rates
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-800/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                      <TrendingUp
                        className="w-8 h-8 text-yellow-400"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400 text-center">
                    3. Distribute Rewards
                  </h3>
                  <p className="text-purple-200 text-center leading-relaxed">
                    $GOLD is distributed proportionally to all $ALCH holders
                    based on their percentage of supply
                  </p>
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-r from-yellow-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30"
              >
                <p className="text-xl text-purple-200 text-center leading-relaxed">
                  <span className="text-yellow-400 font-bold">Example:</span> If
                  you hold 5% of the total $ALCH supply, you automatically
                  receive 5% of every $GOLD distribution. All rewards are sent
                  directly to your wallet — no staking or claiming required!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Tokens Section */}
        <section
          id="tokenomics"
          className="py-32 px-6 bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-900 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

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
                Two Tokens, One Ecosystem
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeInUp} className="group">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-purple-800/50 to-purple-900/50 backdrop-blur-xl rounded-3xl p-10 border-2 border-yellow-400/30 h-full hover:border-yellow-300/50 transition-all duration-500 shadow-2xl">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                          <Sparkles
                            className="w-10 h-10 text-yellow-300"
                            strokeWidth={2}
                          />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-yellow-300">
                            $ALCH
                          </h3>
                          <p className="text-purple-300 text-sm">
                            Snapshot Token
                          </p>
                        </div>
                      </div>
                      <p className="text-purple-200 mb-6 leading-relaxed">
                        The main token that you hold to qualify for $GOLD
                        rewards. Built on Token-2022 standard on Solana.
                      </p>
                      <div className="bg-purple-900/40 rounded-xl p-4 mb-4">
                        <p className="text-sm text-purple-300 mb-2">
                          Contract Address
                        </p>
                        <code className="text-xs text-yellow-300 break-all font-mono">
                          WXsX5HSoVquYRGuJXJrCSogT1M6nZiPRrfZhQsPcXAU
                        </code>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href="https://jup.ag/swap/SOL-WXsX5HSoVquYRGuJXJrCSogT1M6nZiPRrfZhQsPcXAU"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-950 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all">
                            Buy on Jupiter
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="group">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-purple-800/50 to-purple-900/50 backdrop-blur-xl rounded-3xl p-10 border-2 border-yellow-400/30 h-full hover:border-yellow-300/50 transition-all duration-500 shadow-2xl">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                          <Coins
                            className="w-10 h-10 text-yellow-300"
                            strokeWidth={2}
                          />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-yellow-300">
                            $GOLD
                          </h3>
                          <p className="text-purple-300 text-sm">
                            Reward Token
                          </p>
                        </div>
                      </div>
                      <p className="text-purple-200 mb-6 leading-relaxed">
                        The reward token automatically distributed to $ALCH
                        holders. Earn passively just by holding.
                      </p>
                      <div className="bg-purple-900/40 rounded-xl p-4 mb-4">
                        <p className="text-sm text-purple-300 mb-2">
                          Contract Address
                        </p>
                        <code className="text-xs text-yellow-300 break-all font-mono">
                          GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A
                        </code>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href="https://solscan.io/token/GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <button className="w-full px-6 py-3 bg-purple-700/50 border-2 border-purple-400/50 text-purple-100 rounded-lg font-bold hover:bg-purple-600/50 transition-all">
                            View on Solscan
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-5xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-purple-200 to-yellow-300 bg-clip-text text-transparent"
                style={{ fontFamily: "'Caveat', cursive" }}
                variants={fadeInUp}
              >
                Key Features
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-700/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <Zap
                    className="w-8 h-8 text-yellow-400 mb-4"
                    strokeWidth={2}
                  />
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">
                    Fully Automated
                  </h3>
                  <p className="text-purple-200 text-sm">
                    Runs continuously with PM2 process management. No manual
                    intervention needed.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-700/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <TrendingUp
                    className="w-8 h-8 text-yellow-400 mb-4"
                    strokeWidth={2}
                  />
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">
                    Proportional Rewards
                  </h3>
                  <p className="text-purple-200 text-sm">
                    Distribution based on your ALCH holdings percentage
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-700/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <RefreshCw
                    className="w-8 h-8 text-yellow-400 mb-4"
                    strokeWidth={2}
                  />
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">
                    Optimal Swaps
                  </h3>
                  <p className="text-purple-200 text-sm">
                    Jupiter aggregator finds the best SOL→GOLD routes
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-700/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <Target
                    className="w-8 h-8 text-yellow-400 mb-4"
                    strokeWidth={2}
                  />
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">
                    Pool Filtering
                  </h3>
                  <p className="text-purple-200 text-sm">
                    Automatically excludes AMM/DEX addresses from distribution
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-700/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <Users
                    className="w-8 h-8 text-yellow-400 mb-4"
                    strokeWidth={2}
                  />
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">
                    Batch Processing
                  </h3>
                  <p className="text-purple-200 text-sm">
                    Efficient parallel transaction execution for all holders
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-700/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <Flame
                    className="w-8 h-8 text-yellow-400 mb-4"
                    strokeWidth={2}
                  />
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">
                    Secure
                  </h3>
                  <p className="text-purple-200 text-sm">
                    No private keys in code, environment-based configuration
                  </p>
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
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent"></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2
                className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                style={{ fontFamily: "'Caveat', cursive" }}
                variants={fadeInUp}
              >
                Join the Alchemy Community
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-purple-200/90 mb-16 max-w-2xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                Hold $ALCH • Earn $GOLD • Prosper Together
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              >
                <a
                  href="https://x.com/i/communities/1978345630406693026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="px-12 py-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-yellow-900/30 border border-yellow-300/50">
                    <span className="text-purple-950 flex items-center justify-center gap-2">
                      {/* <Twitter className="w-6 h-6" strokeWidth={2.5} /> */}
                      Join Community
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/MidTermDev/Alchemy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="px-12 py-6 bg-purple-800/30 backdrop-blur-md border-2 border-purple-400/40 rounded-xl font-bold text-xl transition-all duration-300 shadow-xl shadow-purple-900/20 hover:bg-purple-700/40">
                    <span className="text-purple-100 flex items-center justify-center gap-2">
                      <Github className="w-6 h-6" strokeWidth={2.5} />
                      View on GitHub
                    </span>
                  </div>
                </a>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="bg-gradient-to-br from-purple-800/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
                  <p className="text-lg text-purple-200 leading-relaxed">
                    Built with{" "}
                    <Heart className="w-5 h-5 inline text-purple-400 fill-purple-400" />{" "}
                    for the Alchemy community
                  </p>
                </div>
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
                    Alchemy
                  </span>
                </div>
                <p className="text-sm text-purple-300">
                  Hold $ALCH, Earn $GOLD
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
                    href="https://github.com/MidTermDev/Alchemy"
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
                <h4 className="font-bold text-yellow-400 mb-3">Resources</h4>
                <div className="space-y-2">
                  <a
                    href="https://solscan.io/token/WXsX5HSoVquYRGuJXJrCSogT1M6nZiPRrfZhQsPcXAU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-purple-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    $ALCH on Solscan
                  </a>
                  <a
                    href="https://jup.ag/swap/SOL-WXsX5HSoVquYRGuJXJrCSogT1M6nZiPRrfZhQsPcXAU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-purple-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    Trade on Jupiter
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-purple-800">
              <p className="text-purple-500 text-xs">
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
