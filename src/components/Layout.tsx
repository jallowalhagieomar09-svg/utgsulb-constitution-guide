import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Phone, BookOpen, ChevronRight } from "lucide-react";
import suLogo from "@/assets/su-logo.jpg";
import slbLogo from "@/assets/slb-logo.jpg";

const chapters = [
  { path: "/", label: "Home", icon: "🏠" },
  { path: "/preamble", label: "Preamble", icon: "📜" },
  { path: "/chapter-1", label: "Ch. 1: Preliminary", icon: "1️⃣" },
  { path: "/chapter-2", label: "Ch. 2: Membership & Objectives", icon: "2️⃣" },
  { path: "/chapter-3", label: "Ch. 3: Executive Council", icon: "3️⃣" },
  { path: "/chapter-4", label: "Ch. 4: Legislative Body", icon: "4️⃣" },
  { path: "/chapter-5", label: "Ch. 5: Judicial Tribunal", icon: "5️⃣" },
  { path: "/chapter-6", label: "Ch. 6: Financial Matters", icon: "6️⃣" },
  { path: "/chapter-7", label: "Ch. 7: Electoral Matters", icon: "7️⃣" },
  { path: "/chapter-8", label: "Ch. 8: Sub-Associations", icon: "8️⃣" },
  { path: "/chapter-9", label: "Ch. 9: Miscellaneous", icon: "9️⃣" },
  { path: "/members", label: "7th Legislature", icon: "👥" },
  { path: "/bills", label: "Ongoing Bills", icon: "📝" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <header className="gold-gradient sticky top-0 z-50 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-primary-foreground"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="flex items-center gap-2">
              <img src={suLogo} alt="UTGSU Logo" className="h-10 w-10 rounded-full border-2 border-primary-foreground/30 object-cover" />
              <img src={slbLogo} alt="UTGSU SLB Logo" className="h-10 w-10 rounded-full border-2 border-primary-foreground/30 object-cover" />
              <div className="hidden sm:block">
                <h1 className="text-primary-foreground font-heading text-lg font-bold leading-tight">
                  UTG Students' Union
                </h1>
                <p className="text-primary-foreground/80 text-xs">Legislative Body — Constitution Guide</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:utgsulb2023@gmail.com"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              title="Email us"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://wa.me/2203715802"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              title="WhatsApp"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-[64px] left-0 z-40 h-[calc(100vh-64px)] w-72 gold-gradient overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="p-4 space-y-1">
            <div className="flex items-center gap-2 px-3 py-2 mb-4">
              <BookOpen size={18} className="text-primary-foreground/70" />
              <span className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider">
                Constitution Chapters
              </span>
            </div>
            {chapters.map((ch) => {
              const isActive = location.pathname === ch.path;
              return (
                <Link
                  key={ch.path}
                  to={ch.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground font-semibold"
                      : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  }`}
                >
                  <span className="text-base">{ch.icon}</span>
                  <span className="flex-1">{ch.label}</span>
                  {isActive && <ChevronRight size={14} />}
                </Link>
              );
            })}
          </nav>
          {/* Contact Footer */}
          <div className="p-4 border-t border-primary-foreground/20 mt-4">
            <p className="text-primary-foreground/60 text-xs mb-2 uppercase tracking-wider">Contact</p>
            <a href="mailto:utgsulb2023@gmail.com" className="text-primary-foreground/80 text-sm hover:text-primary-foreground flex items-center gap-2 mb-1">
              <Mail size={14} /> utgsulb2023@gmail.com
            </a>
            <a href="https://wa.me/2203715802" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 text-sm hover:text-primary-foreground flex items-center gap-2">
              <Phone size={14} /> +220 3715802
            </a>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-foreground/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
