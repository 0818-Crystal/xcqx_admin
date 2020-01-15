/**
 * 主页
 */
import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import API_URL from "../config";

export default class Dashboard extends Component {
  state = {};
  componentDidMount() {
    this.fetchExchanges();
  }
  fetchExchanges() {
    var that = this;
    const request = new Request(
      `${API_URL}/user-exchange?filter=%7B%7D&range=%5B1%2C20%5D&sort=%5B'create_time'%2C'DESC'%5D`,
      {
        method: "GET"
      }
    );
    fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ resultBody }) => {
        var newexchanges = resultBody.records;
        that.setState({ exchanges: newexchanges });
      });
  }

  render() {
    const { exchanges } = this.state;
    return (
      <div>
        <Card>
          <CardHeader title="新碶成教微信公众号后台管理系统" />
          <CardContent>请进行操作..</CardContent>
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <CardHeader title="最新20条兑换记录" />
          <RankList lists={exchanges}></RankList>
        </Card>
      </div>
    );
  }
}
const RankList = ({ lists }) => {
  if (lists) {
    return lists.map((item, index) => {
      return (
        <CardContent>
          {index +
            1 +
            "." +
            item.realName +
            "在" +
            item.createTime +
            "兑换了" +
            item.goodsName}
        </CardContent>
      );
    });
  } else {
    return <CardContent>正在搜索...</CardContent>;
  }
};
