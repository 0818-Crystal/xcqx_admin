import React from "react";

const MyStateField = ({ record = {}, source, on, off }) => (
  <text>{record[source] ? on : off}</text>
);

export default MyStateField;
