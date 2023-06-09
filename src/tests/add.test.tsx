import { render, screen } from '@testing-library/react';
import Add from '../pages/add';
import { BrowserRouter } from "react-router-dom";

describe("Elements render", () => {
    test('Header', () => {
        render(<BrowserRouter><Add /></BrowserRouter>);

        const h1Text = screen.getByText(/Add New Stadium/i)
        expect(h1Text).toBeInTheDocument();
    });
    test("Input Boxes", () => {
        render(<BrowserRouter><Add /></BrowserRouter>);

        const stadium_name = screen.getByTestId("stadium_input");
        const capacity = screen.getByTestId("capacity_input");
        expect(stadium_name).toBeInTheDocument();
        expect(capacity).toBeInTheDocument();
    });
    test("Submit Button", () => {
        render(<BrowserRouter><Add /></BrowserRouter>);

        const submit = screen.getByTestId("submit_button")
        expect(submit).toBeInTheDocument();
    });
});