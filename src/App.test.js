import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

import ReferenceLetter from "./components/referenceLetter/ReferenceLetter";
test("renders HomePage component at the default route", () => {
  render(<App />);
  expect(screen.getByText(/Welcome to Run with AIY/i)).toBeInTheDocument();
});

test("renders reference-letter component at the reference-letter route", async () => {
  render(<App testInitialEntries={["/reference-letter"]} />);
  expect(await screen.findByText(/Reference Letter Form/i)).toBeInTheDocument();
});

test("renders essay component at the essay route", async () => {
  render(<App testInitialEntries={["/personal-statement"]} />);
  expect(
    await screen.findByText(/Personal Statement Form/i)
  ).toBeInTheDocument();
});
