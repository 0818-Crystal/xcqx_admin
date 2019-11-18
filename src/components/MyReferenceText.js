import React from "react";

const MyReferenceField = ({ records = {}, source }) => (
  <text>{records[0][source]}</text>
);

export default MyReferenceField;
