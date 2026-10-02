import { useEffect, useState } from "react";
export function getRoute() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = decodeURI(window.location.pathname).replace(/\/$/, "");
  const relative =
    base && path.startsWith(base) ? path.slice(base.length) : path;
  return relative || "/";
}
export function useRoute() {
  const [route, setRoute] = useState(getRoute);
  useEffect(() => {
    const update = () => setRoute(getRoute());
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  return route;
}
export function navigate(path: string) {
  window.history.pushState(
    {},
    "",
    `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`,
  );
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo(0, 0);
}
export function href(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
