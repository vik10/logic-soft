import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CardContainer from "../componets/CardContainer";

const mockStore = configureStore();
const initialState = {
  rootReducer: {
    HomeSlice: { ApiData: [] },
  },
};
const storeFake = mockStore(initialState);
const mockFn = jest.fn();

test("Header-test", async () => {
  const rrd = require("react-router-dom");

  render(
    <Provider store={storeFake}>
      <rrd.MemoryRouter>
        <CardContainer />
      </rrd.MemoryRouter>
    </Provider>
  );
});
