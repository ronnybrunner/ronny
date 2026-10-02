import { lazy, Suspense, useEffect, useRef } from "react";
import { MotionConfig } from "motion/react";
import Home from "./pages/Home";
import { useRoute } from "./hooks/useRoute";
const Project = lazy(() => import("./pages/Project"));
const Present = lazy(() => import("./pages/Present"));
const Privacy = lazy(() => import("./pages/Privacy"));
export default function App() {
  const route = useRoute();
  const previous = useRef(route);
  const presentation =
    route === "/present" ||
    new URLSearchParams(window.location.search).get("present") === "true";
  useEffect(() => {
    if (route === "/")
      document.title = "Ronny Brunner — Network & Infrastructure Engineer";
    if (window.location.hash) {
      requestAnimationFrame(() =>
        document
          .getElementById(window.location.hash.slice(1))
          ?.scrollIntoView(),
      );
    } else if (previous.current !== route) {
      document.getElementById("main")?.setAttribute("tabindex", "-1");
      document.getElementById("main")?.focus({ preventScroll: true });
    }
    previous.current = route;
  }, [route]);
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Zum Inhalt springen
      </a>
      <div id="top" />
      <Suspense
        fallback={
          <main id="main" className="loading" role="status">
            Wird geladen …
          </main>
        }
      >
        {presentation ? (
          <Present />
        ) : route.startsWith("/projects/") ? (
          <Project slug={route.slice(10)} />
        ) : route === "/privacy" ? (
          <Privacy />
        ) : route === "/" ? (
          <Home />
        ) : (
          <main id="main" className="section not-found">
            <h1>Seite nicht gefunden.</h1>
            <a href={import.meta.env.BASE_URL}>Zur Startseite</a>
          </main>
        )}
      </Suspense>
    </MotionConfig>
  );
}
