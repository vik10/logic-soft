import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Header from "../componets/Header";

const mockStore = configureStore();
const initialState = {
  rootReducer: {
    HomeSlice: {},
  },
};
const storeFake = mockStore(initialState);
const mockFn = jest.fn();

test("Header-test", () => {
  const rrd = require("react-router-dom");

  render(
    <Provider store={storeFake}>
      <rrd.MemoryRouter>
        <Header />
      </rrd.MemoryRouter>
    </Provider>
  );
  expect(screen.getByPlaceholderText(/search your items/i)).toBeInTheDocument();
  userEvent.click(screen.getByText(/logicsoft/i), mockFn());
  expect(mockFn).toBeCalled();
});
