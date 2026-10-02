import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "./Link";
const links = [
  ["me", "Über mich"],
  ["experience", "Mein Weg"],
  ["expertise", "Was ich mache"],
  ["projects", "Projekte"],
  ["beyond", "Abseits"],
];
export function Navigation({ home = true }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!home) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [home]);
  useEffect(() => {
    if (!open) return;
    nav.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab") {
        const focusables = [
          ...(nav.current?.querySelectorAll<HTMLAnchorElement>("a") || []),
        ];
        const first = focusables[0],
          last = focusables.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          toggle.current?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          toggle.current?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="Ronny Brunner – Startseite">
        R<span>.</span>
      </Link>
      <button
        ref={toggle}
        className="menu-toggle icon-button"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        ref={nav}
        id="main-nav"
        className={open ? "nav open" : "nav"}
        aria-label="Hauptnavigation"
      >
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`${home ? "" : import.meta.env.BASE_URL}#${id}`}
            aria-current={active === id ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <Link to="/present" className="present-link">
          Präsentieren <ArrowUpRight size={14} />
        </Link>
      </nav>
    </header>
  );
}
