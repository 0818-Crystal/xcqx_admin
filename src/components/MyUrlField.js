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

/**
 * 自定义url的样式
 */
const MyUrlField = ({ record = {}, source, classes }) => (
  <a href={record[source]} className={classes.link}>
    链接地址
    <LaunchIcon className={classes.icon} />
  </a>
);

export default withStyles(styles)(MyUrlField);
