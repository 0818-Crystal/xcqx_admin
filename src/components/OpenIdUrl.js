import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";

const styles = {
  link: {
    textDecoration: "none"
  },
  icon: {
    width: "0.5em",
    paddingLeft: 2
  }
};
const url = (record, source) => {
  return (
    "http://203.195.230.234:5000/#/user?filter={%22open_id%22%3A%22" +
    record[source] +
    "%22}&order=DESC&page=1&perPage=10&sort=id"
  );
};
const OpenIdUrl = ({ record = {}, source, classes }) => (
  <a href={url(record, source)} className={classes.link}>
    {record[source]}
    <LaunchIcon className={classes.icon} />
  </a>
);

export default withStyles(styles)(OpenIdUrl);
