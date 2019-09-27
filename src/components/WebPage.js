import React from 'react';
import CarList from '../js/containers/cars-list'
import Details from "../js/containers/details";
import History from "../js/containers/history";

const WebPage = () => (
  <div>
      <History/>
      <h2>Cars:</h2>
      <CarList/>
      <hr/>
      <h3>Details:</h3>
      <Details/>
  </div>
);

export default WebPage;