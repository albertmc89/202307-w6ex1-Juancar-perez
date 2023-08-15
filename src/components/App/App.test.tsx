import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FilmsContextProvider from "../../store/films/context/FilmsContextProvider";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Películas' inside a heading", () => {
      const title = "Películas";

      render(
        <FilmsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FilmsContextProvider>,
      );

      const headerTitle = screen.getByRole("heading", {
        name: title,
      });

      expect(headerTitle).toBeInTheDocument();
    });
  });
});
