/**
 * Home Page - Creative Modern Design with Two-Column Layout
 * 
 * Design Philosophy:
 * - Clean, contemporary aesthetic with creative edge
 * - Two-column layout: profile image on left (50%), content on right (50%)
 * - Space Grotesk for headings (modern geometric), DM Sans for body
 * - Subtle olive accent color for food/nature connection
 * 
 * Responsive Behavior:
 * - Desktop (1024px+): Two-column, image fills left half, content on right
 * - Tablet/Mobile (<1024px): Single column, image on top with proper aspect ratio
 */

import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="min-h-screen">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Column - Profile Image */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 lg:fixed lg:left-0 lg:top-0 lg:h-screen"
          >
            <div className="relative overflow-hidden h-[60vh] lg:h-full">
              <img 
                src="/images/profile.jpg" 
                alt="Hiro Hasegawa"
                className="w-full h-full object-cover object-[center_25%]"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 lg:ml-[50%]">
            <motion.article
              initial="initial"
              animate="animate"
              variants={stagger}
              className="px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-24 max-w-[600px] mx-auto lg:mx-0"
            >
              {/* Hero Section - Name */}
              <motion.header variants={fadeInUp} className="mb-12 md:mb-16">
                <h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Hiro
                  <br />
                  Hasegawa
                </h1>
              </motion.header>

              {/* About Section */}
              <motion.section variants={fadeInUp} className="mb-12 md:mb-16">
                <p className="text-base md:text-[17px] leading-[1.8] text-foreground/90">
                  <a
                    href="https://www.linkedin.com/in/hirohrm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-primary transition-colors"
                  >
                    Hiro
                  </a>{" "}
                  is an entrepreneur and investor working at the intersection of food, technology, and cross-cultural innovation between Japan and the US.
                </p>
                
                <p className="text-base md:text-[17px] leading-[1.8] text-foreground/90 mt-5">
                  In 2017 Hiro founded{" "}
                  <a 
                    href="https://www.instagram.com/ramen.hero/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-primary transition-colors"
                  >
                    Ramen Hero
                  </a>
                  , a San Francisco–based food startup delivering restaurant-quality ramen kits nationwide. Seen in{" "}
                  <a 
                    href="https://www.adweek.com/creativity/this-lovable-cowboy-selling-ramen-is-the-ad-star-2020-needed/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-primary transition-colors"
                  >
                    Adweek
                  </a>
                  , Wall Street Journal, People Magazine and more, Ramen Hero expanded to over 15,000 cities across 48 states and was named one of People's "Food Favorite 50" in 2020. He raised approximately $9 million from investors including{" "}
                  <a 
                    href="https://techcrunch.com/2019/03/13/meet-the-19-startups-in-angelpads-12th-batch/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-primary transition-colors"
                  >
                    AngelPad
                  </a>
                  {" "}and SoftBank's DeepCore.
                </p>
                
                <p className="text-base md:text-[17px] leading-[1.8] text-foreground/90 mt-5">
                  Currently based in the Bay Area, Hiro serves as a Venture Partner at Future Food Fund, investing in food and agri-tech startups around the world. He supports portfolio companies in expanding into the Japanese market, leveraging his deep understanding of Japan's unique consumer behavior and market dynamics.
                </p>
              </motion.section>

              {/* Experience Section */}
              <motion.section variants={fadeInUp} className="mb-12 md:mb-16">
                <h2 
                  className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Experience
                </h2>
                
                <ul className="space-y-3">
                  <ExperienceItem 
                    title="Venture Partner"
                    organization="Future Food Fund"
                    period="2024–Present"
                  />
                  <ExperienceItem 
                    title="Mentor"
                    organization="KitchenTown"
                    period="2024"
                  />
                  <ExperienceItem 
                    title="Advisor"
                    organization="SoftBank Robotics"
                    period="2024"
                  />
                  <ExperienceItem 
                    title="Founder"
                    organization="Ramen Hero"
                    period="2017–2023"
                  />
                </ul>
              </motion.section>

              {/* Focus Areas */}
              <motion.section variants={fadeInUp} className="mb-12 md:mb-16">
                <h2 
                  className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Focus Areas
                </h2>
                
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/80">
                  <span>Food Technology</span>
                  <span className="text-foreground/30">·</span>
                  <span>Consumer Products</span>
                  <span className="text-foreground/30">·</span>
                  <span>Japan × US Markets</span>
                  <span className="text-foreground/30">·</span>
                  <span>Early-Stage Ventures</span>
                </div>
              </motion.section>

              {/* Contact Section */}
              <motion.section variants={fadeInUp} className="mb-12 md:mb-16">
                <h2 
                  className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Connect
                </h2>
                
                {/* Social Icons - horizontal layout */}
                <div className="flex items-center gap-5">
                  <a 
                    href="https://www.linkedin.com/in/hirohrm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://x.com/hirohrm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <XIcon className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/hirohsgw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:hiro@hsgw.co"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.section>

              {/* Footer */}
              <motion.footer 
                variants={fadeInUp}
                className="pt-12 md:pt-16 border-t border-foreground/10"
              >
                <p className="text-xs text-muted-foreground tracking-wide">
                  © Hiro Hasegawa {new Date().getFullYear()}
                </p>
              </motion.footer>
            </motion.article>
          </div>
        </div>
      </main>
    </div>
  );
}

// Custom X (Twitter) icon since lucide doesn't have the new X logo
function XIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface ExperienceItemProps {
  title: string;
  organization: string;
  period?: string;
}

function ExperienceItem({ title, organization, period }: ExperienceItemProps) {
  return (
    <li className="flex items-baseline gap-4 group py-1">
      <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-sm font-medium">{title}</span>
          <span className="text-sm text-muted-foreground">
            {organization}
          </span>
        </div>
        {period && (
          <span className="text-[11px] text-muted-foreground tracking-wider">
            {period}
          </span>
        )}
      </div>
    </li>
  );
}
