import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import HomeView from "../containers/HomeView";

const mockStore = configureStore([]);

describe("Testing HomeView container", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      cars: []
    });

    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <HomeView />
      </Provider>
    );
  });

  it("should render with the givent state from the redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it(" should dispatch fetch user on componentDidMount", () => {
    expect(store.dispatch).toHaveBeenCalledTimes(0);
  });
});
