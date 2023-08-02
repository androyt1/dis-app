// DataDisplay.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import DataDisplay from "./DataDisplay";

describe("DataDisplay component", () => {
  // Create an instance of the axios mock adapter
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    // Mock the API response with sample data
    const mockData = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ];
    mock.onGet("/api/data").reply(200, mockData);

    // Render the component
    render(<DataDisplay />);
  });

  it("should display data from the API correctly", async () => {
    // Wait for the API request to complete (you might not need this if the data is loaded synchronously)
    await screen.findByText("Data Display");

    // Assert that the data is displayed correctly in the component
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });
});
