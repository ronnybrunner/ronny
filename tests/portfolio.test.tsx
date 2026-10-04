import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
  act,
} from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import App from "../src/App";
import { Navigation } from "../src/components/Navigation";
import { Expertise, Experience } from "../src/components/Sections";
import { projectCatalog, projects } from "../src/content/projects";
describe("Portfolio", () => {
  beforeEach(() => window.history.replaceState({}, "", "/"));
  it("verlinkt die fokussierte Softwareauswahl und die Windmill-Anbindung", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Moin, ich bin Ronny." }),
    ).toBeInTheDocument();
    for (const slug of ["watchtower", "release-portal"])
      expect(
        screen
          .getAllByRole("link", { name: /Technischer Einblick/ })
          .some((a) => a.getAttribute("href") === `/projects/${slug}`),
      ).toBe(true);
    expect(screen.getByText("Windmill · Automatisierung")).toBeInTheDocument();
  });
  it("ordnet die beruflichen Stationen den von Ronny bestätigten Orten zu", () => {
    render(<Experience />);
    for (const role of [
      "Ausbildung zum IT-Systemelektroniker · Telekom",
      "Senior Fachkraft Technik Privatkunden",
      "IT-Infrastruktur Spezialist · Messe- und Eventmanagement",
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
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    expect(screen.queryByText("Automatisierung & AI")).not.toBeInTheDocument();
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
      screen.getByText("Cisco Unified Communications"),
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
    await screen.findByRole("button", { name: "Nächste Folie" });
    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(screen.getByText("02 / 07 — EXPERIENCE")).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "0" });
    expect(
      screen.getByRole("heading", { name: "Kapitelübersicht" }),
    ).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "0" });
    expect(
      screen.queryByRole("heading", { name: "Kapitelübersicht" }),
    ).not.toBeInTheDocument();
    fireEvent.keyDown(window, { key: "Escape" });
    await waitFor(() => expect(window.location.pathname).toBe("/"));
  });
  it("zeigt alle vier Capability-Bereiche ohne Accordion und entfernt die Marketingfolie", async () => {
    window.history.replaceState({}, "", "/present");
    render(<App />);
    await screen.findByRole("button", { name: "Nächste Folie" });
    expect(document.querySelector(".presentation-header .wordmark")).toBeNull();
    expect(document.querySelectorAll(".chapter-dots button")).toHaveLength(7);
    fireEvent.keyDown(window, { key: "ArrowRight" });
    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(screen.getByText("03 / 07 — EXPERTISE")).toBeInTheDocument();
    const slide = document.querySelector(".capability-slide") as HTMLElement;
    expect(within(slide).getAllByRole("article")).toHaveLength(4);
    expect(within(slide).queryByRole("button")).not.toBeInTheDocument();
    for (const topic of [
      "Cisco Catalyst",
      "CUCM",
      "Cisco Security Advisories",
      "Release Management",
    ])
      expect(within(slide).getByText(topic)).toBeInTheDocument();
    expect(
      within(slide).queryByText(/Firepower|Zabbix|Webex/),
    ).not.toBeInTheDocument();
    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(screen.getByText("04 / 07 — RELEASE PORTAL")).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "0" });
    expect(screen.queryByText("PLAN BUILD RUN")).not.toBeInTheDocument();
    expect(document.querySelectorAll(".chapter-grid button")).toHaveLength(7);
  });
  it("zeigt drei eigenständige Projektfolien mit gemeinsamen Inhaltsdaten", async () => {
    window.history.replaceState({}, "", "/present");
    render(<App />);
    await screen.findByRole("button", { name: "Nächste Folie" });
    for (let i = 0; i < 3; i++)
      fireEvent.keyDown(window, { key: "ArrowRight" });
    for (const project of projectCatalog) {
      expect(
        screen.getByRole("heading", { name: `${project.name}.` }),
      ).toBeInTheDocument();
      expect(
        screen.getByText(project.presentation.problem),
      ).toBeInTheDocument();
      expect(document.querySelectorAll(".project-slide")).toHaveLength(1);
      expect(
        screen.getByRole("link", { name: "Technischer Einblick ↗" }),
      ).toHaveAttribute("href", `/projects/${project.slug}`);
      fireEvent.keyDown(window, { key: "ArrowRight" });
    }
    expect(screen.getByText("07 / 07 — BEYOND")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Nächste Folie" }),
    ).toBeDisabled();
  });
  it("zeigt vier echte Experience-Stationen als Karten statt Timeline", async () => {
    window.history.replaceState({}, "", "/present");
    render(<App />);
    await screen.findByRole("button", { name: "Nächste Folie" });
    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(document.querySelectorAll(".career-panel")).toHaveLength(4);
    expect(document.querySelector(".timeline")).toBeNull();
    expect(document.querySelector(".experience-route")).toBeNull();
    expect(screen.getByText("Seit 06/2018")).toBeInTheDocument();
    expect(screen.queryByText("AI Hobby")).not.toBeInTheDocument();
  });
  it("beendet Fullscreen vor dem Escape-Ausstieg aus der Übersicht", async () => {
    window.history.replaceState({}, "", "/present");
    let resolveExit!: () => void;
    const pendingExit = new Promise<void>((resolve) => {
      resolveExit = resolve;
    });
    const exitFullscreen = vi.fn(() => pendingExit);
    const oldElement = Object.getOwnPropertyDescriptor(
      document,
      "fullscreenElement",
    );
    const oldExit = Object.getOwnPropertyDescriptor(document, "exitFullscreen");
    Object.defineProperty(document, "fullscreenElement", {
      configurable: true,
      value: document.documentElement,
    });
    Object.defineProperty(document, "exitFullscreen", {
      configurable: true,
      value: exitFullscreen,
    });
    try {
      render(<App />);
      await screen.findByRole("button", { name: "Nächste Folie" });
      fireEvent.keyDown(window, { key: "0" });
      fireEvent.keyDown(window, { key: "Escape" });
      expect(exitFullscreen).toHaveBeenCalledOnce();
      expect(window.location.pathname).toBe("/present");
      await act(async () => {
        resolveExit();
        await pendingExit;
      });
      await waitFor(() => expect(window.location.pathname).toBe("/"));
    } finally {
      if (oldElement)
        Object.defineProperty(document, "fullscreenElement", oldElement);
      else Reflect.deleteProperty(document, "fullscreenElement");
      if (oldExit) Object.defineProperty(document, "exitFullscreen", oldExit);
      else Reflect.deleteProperty(document, "exitFullscreen");
    }
  });
  it("enthält keine lokale Adresse oder personenbezogenen Kontaktdaten in Projektinhalten", () => {
    const serialized = JSON.stringify(projectCatalog);
    expect(serialized).not.toMatch(
      /192\.168\.|https?:\/\/|@posteo|\+49|token|credential/i,
    );
    expect(projects.map((p) => p.slug)).toEqual([
      "release-portal",
      "watchtower",
    ]);
    expect(projects[0].approach).toContain(
      "Windmill ist als Automatisierungsplattform angebunden",
    );
  });
});
