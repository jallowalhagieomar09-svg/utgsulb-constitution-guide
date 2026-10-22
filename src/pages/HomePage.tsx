import { Link } from "react-router-dom";
import { BookOpen, Scale, Users, Vote, Landmark, Banknote, Award, Mail, Phone, FileText, UserCircle, Sparkles, Download } from "lucide-react";
import suLogo from "@/assets/su-logo.jpg";
import slbLogo from "@/assets/slb-logo.jpg";

const chapters = [
  { path: "/preamble", title: "Preamble", desc: "", icon: BookOpen },
  { path: "/chapter-1", title: "Ch. 1: Preliminary", desc: "", icon: Scale },
  { path: "/chapter-2", title: "Ch. 2: Membership & Objectives", desc: "", icon: Users },
  { path: "/chapter-3", title: "Ch. 3: Executive Council", desc: "", icon: Landmark },
  { path: "/chapter-4", title: "Ch. 4: Legislative Body", desc: "", icon: Scale },
  { path: "/chapter-5", title: "Ch. 5: Judicial Tribunal", desc: "", icon: Scale },
  { path: "/chapter-6", title: "Ch. 6: Financial Matters", desc: "", icon: Banknote },
  { path: "/chapter-7", title: "Ch. 7: Electoral Matters", desc: "", icon: Vote },
  { path: "/chapter-8", title: "Ch. 8: Sub-Associations", desc: "", icon: Users },
  { path: "/chapter-9", title: "Ch. 9: Miscellaneous", desc: "", icon: Award },
  { path: "/members", title: "7th Legislative Body Members", desc: "", icon: UserCircle },
  { path: "/bills", title: "Ongoing Bills", desc: "", icon: FileText },
];

const constitutionPdfUrl = "https://drive.google.com/uc?export=download&id=1yRScgeNstW8TtwWII7VvBBCYK1tlVr2r";

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <div className="glass-card text-center mb-12 px-6 py-10 sm:px-10 sm:py-12 overflow-hidden relative">
        <div className="hero-glow" aria-hidden />
        <div className="relative">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img src={suLogo} alt="UTGSU Logo" className="h-20 w-20 rounded-full border-4 border-primary/30 object-cover shadow-lg" />
            <img src={slbLogo} alt="UTGSU SLB Logo" className="h-20 w-20 rounded-full border-4 border-primary/30 object-cover shadow-lg" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-4">
            UTGSU Constitution Guide
          </h1>
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 gold-gradient text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest shadow-md">
              <Sparkles size={13} /> An initiative of the 7th Legislative Body
            </span>
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href={constitutionPdfUrl}
              download="UTGSU-Constitution-2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gold-gradient text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-md"
            >
              <Download size={16} /> Download Constitution PDF
            </a>
          </div>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {chapters.map((ch) => {
          const Icon = ch.icon;
          return (
            <Link
              key={ch.path}
              to={ch.path}
              className="section-card group flex gap-4 items-start hover:border-primary/40"
            >
              <div className="gold-gradient p-2.5 rounded-lg text-primary-foreground shrink-0 group-hover:shadow-md transition-shadow">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {ch.title}
                </h3>
                {ch.desc && <p className="text-sm text-muted-foreground mt-1">{ch.desc}</p>}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Contact */}
      <div className="mt-12 section-card text-center">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Contact the Legislative Body</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:utgsulb2023@gmail.com"
            className="inline-flex items-center gap-2 gold-gradient text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Mail size={16} /> Email Us
          </a>
          <a
            href="https://wa.me/2203715802"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-secondary/80 transition-colors border border-border"
          >
            <Phone size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
