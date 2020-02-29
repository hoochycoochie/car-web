import React, { useEffect } from "react";
import { Message } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../store/actions/car";

import { CarList } from "../components/CarList";

export default function HomeView() {
  const { data, error } = useSelector(state => state.cars);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  if (error) {
    return (
      <Message negative size="huge">
        {error.message}
      </Message>
    );
  }
  return <CarList cars={data && data.docs ? data.docs : []} />;
}
