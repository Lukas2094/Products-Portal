import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductList from "../src/app/products/ProductList";

test("renders product list", async () => {
    render(<ProductList />);
    expect(await screen.findByText("Products")).toBeInTheDocument();
});
