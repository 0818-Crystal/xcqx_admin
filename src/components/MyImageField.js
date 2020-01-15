/**
 * 自定义图片样式
 */
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  image: {
    height: "5em"
  }
};

const MyImageField = ({ record = {}, source, classes }) => (
  <img src={record[source]} className={classes.image} alt="图片"></img>
);
export default withStyles(styles)(MyImageField);
