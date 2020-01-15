import React from "react";

const MyStateField = ({ record = {}, source, on, off }) => (
  <text>{record[source] == 1 ? on : off}</text>
);

export default MyStateField;
