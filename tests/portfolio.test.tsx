import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import App from "../src/App";
import { Navigation } from "../src/components/Navigation";
import { Expertise, Experience } from "../src/components/Sections";
import { projects } from "../src/content/projects";
describe("Portfolio", () => {
  beforeEach(() => window.history.replaceState({}, "", "/"));
  it("verlinkt die belegten Softwareprojekte und trennt Infrastrukturbeispiele", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Moin, ich bin Ronny." }),
    ).toBeInTheDocument();
    for (const slug of ["watchtower", "release-portal", "rvoice"])
      expect(
        screen
          .getAllByRole("link", { name: /Projekt entdecken/ })
          .some((a) => a.getAttribute("href") === `/projects/${slug}`),
      ).toBe(true);
    expect(
      screen.getByText("Infrastruktur ist auch etwas, das man baut."),
    ).toBeInTheDocument();
  });
  it("ordnet die beruflichen Stationen den von Ronny bestätigten Orten zu", () => {
    render(<Experience />);
    for (const role of [
      "Ausbildung zum IT-Systemelektroniker · Telekom",
      "Senior Fachkraft Technik Privatkunden",
      "Messe- und Eventmanagement",
    ]) {
      const station = screen.getByText(role).closest("li")!;
      expect(within(station).getByText("Hamburg")).toBeInTheDocument();
      expect(within(station).queryByText("Bremen")).not.toBeInTheDocument();
    }
    const operations = screen
      .getByText("Operations Manager II · Network & Infrastructure Services")
      .closest("li")!;
    expect(within(operations).getByText("Bremen")).toBeInTheDocument();
    expect(within(operations).getByText("Seit 06/2018")).toBeInTheDocument();
    const learning = screen.getByText("Automatisierung & AI").closest("li")!;
    expect(within(learning).getByText("Weiterbildung")).toBeInTheDocument();
    expect(within(learning).queryByText("Bremen")).not.toBeInTheDocument();
  });
  it("öffnet und schließt das Menü per Escape mit Fokusrückgabe", () => {
    render(<Navigation />);
    const toggle = screen.getByRole("button", { name: "Menü öffnen" });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(window, { key: "Escape" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
  });
  it("erweitert technische Themen mit zugänglichen Zuständen", () => {
    render(<Expertise />);
    const button = screen.getByRole("button", { name: /COLLABORATION/ });
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText("Kommunikation braucht ein Fundament."),
    ).toBeInTheDocument();
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
  it("lädt eine eigenständige Projektseite direkt", async () => {
    window.history.replaceState({}, "", "/projects/watchtower");
    render(<App />);
    expect(
      await screen.findByRole("heading", { level: 1, name: "Watchtower" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Die Architektur.")).toBeInTheDocument();
  });
  it("bedient Präsentation mit Pfeilen und Escape", async () => {
    window.history.replaceState({}, "", "/present");
    render(<App />);
    await screen.findByRole("button", { name: "Nächstes Kapitel" });
    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(screen.getByText("02 / 06 — EXPERIENCE")).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "o" });
    expect(
      screen.getByRole("heading", { name: "Worüber sprechen wir?" }),
    ).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(
      screen.queryByRole("heading", { name: "Worüber sprechen wir?" }),
    ).not.toBeInTheDocument();
    fireEvent.keyDown(window, { key: "Escape" });
    await waitFor(() => expect(window.location.pathname).toBe("/"));
  });
  it("enthält keine lokale Adresse oder personenbezogenen Kontaktdaten in Projektinhalten", () => {
    const serialized = JSON.stringify(projects);
    expect(serialized).not.toMatch(
      /192\.168\.|https?:\/\/|@posteo|\+49|token|credential/i,
    );
    expect(projects.find((p) => p.slug === "release-portal")).toBeDefined();
  });
});
