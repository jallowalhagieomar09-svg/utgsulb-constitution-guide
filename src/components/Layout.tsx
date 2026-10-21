import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Mail,
  Phone,
  BookOpen,
  ChevronRight,
  Home,
  ScrollText,
  FileText,
  Users,
  Landmark,
  Gavel,
  Scale,
  Banknote,
  Vote,
  Network,
  Award,
  UserCircle,
  Search,
} from "lucide-react";
import suLogo from "@/assets/su-logo.jpg";
import slbLogo from "@/assets/slb-logo.jpg";

const chapters = [
  { path: "/", label: "Home", icon: Home },
  { path: "/preamble", label: "Preamble", icon: ScrollText },
  { path: "/chapter-1", label: "Ch. 1: Preliminary", icon: BookOpen },
  { path: "/chapter-2", label: "Ch. 2: Membership & Objectives", icon: Users },
  { path: "/chapter-3", label: "Ch. 3: Executive Council", icon: Landmark },
  { path: "/chapter-4", label: "Ch. 4: Legislative Body", icon: Gavel },
  { path: "/chapter-5", label: "Ch. 5: Judicial Tribunal", icon: Scale },
  { path: "/chapter-6", label: "Ch. 6: Financial Matters", icon: Banknote },
  { path: "/chapter-7", label: "Ch. 7: Electoral Matters", icon: Vote },
  { path: "/chapter-8", label: "Ch. 8: Sub-Associations", icon: Network },
  { path: "/chapter-9", label: "Ch. 9: Miscellaneous", icon: Award },
  { path: "/members", label: "7th Legislature", icon: UserCircle },
  { path: "/bills", label: "Ongoing Bills", icon: FileText },
];

const searchablePages = [
  { path: "/", label: "Home", keywords: "home utgsu constitution guide overview introduction union" },
  { path: "/preamble", label: "Preamble", keywords: "preamble principles aspirations founding values" },
  { path: "/chapter-1", label: "Chapter 1", keywords: "chapter one preliminary citation interpretation name legal recognition seal supremacy constitution" },
  { path: "/chapter-2", label: "Chapter 2", keywords: "chapter two membership objectives rights duties cessation members union" },
  { path: "/chapter-3", label: "Chapter 3", keywords: "chapter three executive council president vice president ministers powers executive" },
  { path: "/chapter-4", label: "Chapter 4", keywords: "chapter four legislative body parliament bills motions impeachment members senate assembly" },
  { path: "/chapter-5", label: "Chapter 5", keywords: "chapter five judicial tribunal jurisdiction proceedings enforcement justice court" },
  { path: "/chapter-6", label: "Chapter 6", keywords: "chapter six financial matters finance accounts budget committee money" },
  { path: "/chapter-7", label: "Chapter 7", keywords: "chapter seven electoral matters elections procedures qualifications congress extraordinary sessions voting" },
  { path: "/chapter-8", label: "Chapter 8", keywords: "chapter eight sub associations committees commissions electoral commission education" },
  { path: "/chapter-9", label: "Chapter 9", keywords: "chapter nine miscellaneous awards code conduct oath commencement review amendments" },
  { path: "/members", label: "7th Legislative Body", keywords: "members speaker deputy speaker clerk deputy clerk representatives legislative body utgsu student union" },
  { path: "/bills", label: "Ongoing Bills", keywords: "bills ongoing amendments legislative process committee motions senate" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState("");
  const location = useLocation();

  const searchResults = useMemo(() => {
    const query = globalSearch.trim().toLowerCase();

    if (!query) {
      return [];
    }

    return searchablePages.filter((item) => {
      const haystack = `${item.label} ${item.keywords}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [globalSearch]);

  const clearSearch = () => {
    setGlobalSearch("");
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <header className="glass-header sticky top-0 z-50 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3 gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-primary-foreground"
              aria-label="Toggle navigation"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link to="/" className="flex items-center gap-2 min-w-0">
              <img src={suLogo} alt="UTGSU Logo" className="h-10 w-10 rounded-full border-2 border-primary-foreground/30 object-cover" />
              <img src={slbLogo} alt="UTGSU SLB Logo" className="h-10 w-10 rounded-full border-2 border-primary-foreground/30 object-cover" />
              <div className="hidden sm:block min-w-0">
                <h1 className="text-primary-foreground font-heading text-lg font-bold leading-tight truncate">
                  UTG Students' Union
                </h1>
                <p className="text-primary-foreground/80 text-xs">Legislative Body — Constitution Guide</p>
              </div>
            </Link>
          </div>

          <div className="relative hidden md:block w-[320px] shrink-0">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground/70" />
            <input
              type="search"
              value={globalSearch}
              onChange={(event) => setGlobalSearch(event.target.value)}
              placeholder="Search the site..."
              className="w-full rounded-full border border-primary-foreground/20 bg-primary-foreground/10 pl-9 pr-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-primary-foreground/40"
              aria-label="Search the site"
            />

            {globalSearch.trim() && (
              <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-50 rounded-xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-md">
                {searchResults.length > 0 ? (
                  <div className="space-y-1">
                    {searchResults.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={clearSearch}
                        className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary"
                      >
                        <span className="font-medium text-foreground">{item.label}</span>
                        <span className="text-xs text-muted-foreground">Open</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="px-3 py-2 text-sm text-muted-foreground">No matching pages found.</div>
                )}
              </div>
            )}
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

        <div className="px-4 pb-3 md:hidden">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground/70" />
            <input
              type="search"
              value={globalSearch}
              onChange={(event) => setGlobalSearch(event.target.value)}
              placeholder="Search the site..."
              className="w-full rounded-full border border-primary-foreground/20 bg-primary-foreground/10 pl-9 pr-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-primary-foreground/40"
              aria-label="Search the site"
            />
          </div>
          {globalSearch.trim() && (
            <div className="mt-2 rounded-xl border border-border bg-background/95 p-2 shadow-xl">
              {searchResults.length > 0 ? (
                <div className="space-y-1">
                  {searchResults.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={clearSearch}
                      className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="px-3 py-2 text-sm text-muted-foreground">No matching pages found.</div>
              )}
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-[64px] left-0 z-40 h-[calc(100vh-64px)] w-72 glass-sidebar overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="p-4 space-y-1">
            <div className="mb-4 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-3">
              <label className="relative block">
                <span className="sr-only">Search the site</span>
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground/70" />
                <input
                  type="search"
                  value={globalSearch}
                  onChange={(event) => setGlobalSearch(event.target.value)}
                  placeholder="Search pages..."
                  className="w-full rounded-lg border border-primary-foreground/20 bg-transparent pl-9 pr-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-primary-foreground/40"
                />
              </label>

              {globalSearch.trim() && (
                <div className="mt-3 space-y-1 rounded-lg border border-border bg-background/80 p-2">
                  {searchResults.length > 0 ? (
                    searchResults.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={clearSearch}
                        className="block rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-secondary"
                      >
                        {item.label}
                      </Link>
                    ))
                  ) : (
                    <div className="px-2 py-1.5 text-xs text-muted-foreground">No matches</div>
                  )}
                </div>
              )}
            </div>

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
                  <ch.icon size={16} className="shrink-0" />
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

      {/* Footer */}
      <footer className="glass-header mt-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center space-y-3">
          <div className="flex justify-center gap-5">
            <a
              href="mailto:utgsulb2023@gmail.com"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 text-sm"
            >
              <Mail size={16} /> utgsulb2023@gmail.com
            </a>
            <a
              href="https://wa.me/2203715802"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 text-sm"
            >
              <Phone size={16} /> +220 3715802
            </a>
          </div>
          <p className="text-primary-foreground/85 text-sm font-medium">
            An initiative of the 7th Legislative Body — UTG Students' Union
          </p>
          <p className="text-primary-foreground/60 text-xs">
            © 2026 UTGSU Legislative Body · "Solidarity • Dedication • Service"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
