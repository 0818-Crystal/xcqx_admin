/**
 * 用户订单管理
 */
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  Edit,
  SimpleForm,
  SelectInput,
  Filter,
  DateInput,
  ReferenceField,
  DateField,
  EditButton,
  DeleteButton,
  TextInput
} from "react-admin";
import { ExportExcel } from "../util/excelUtil";
import API_URL from "../config";

/**
 * 导出excel格式设置
 * @param {*} exchange
 */
const ExchangeExporter = exchange => {
  console.log(exchange);
  const initColumn = [
    {
      title: "兑换时间",
      dataIndex: "createTime",
      key: "createTime"
    },
    {
      title: "真实姓名",
      dataIndex: "realName",
      key: "realName"
    },
    {
      title: "手机号码",
      dataIndex: "phoneNumber",
      key: "phoneNumber"
    },
    {
      title: "商品名称",
      dataIndex: "goodsName",
      key: "goodsName"
    },
    {
      title: "商品价格",
      dataIndex: "goodsPrice",
      key: "goodsPrice"
    }
  ];

  ExportExcel(initColumn, exchange, "奖品兑换.xlsx");
};
/**
 * 列表设置
 * @param {*} props
 */
export const ExchangeList = props => (
  <List
    {...props}
    filters={<ExchangeFilter />}
    exporter={ExchangeExporter}
    sort={{ field: "create_time", order: "DESC" }}
  >
    <Datagrid>
      <TextField source="id" label="id" />
      <TextField source="createTime" label="兑换时间" />

      <TextField source="realName" label="姓名" />
      <TextField source="phoneNumber" label="手机号码" />

      <TextField source="goodsName" label="商品名称" />
      <TextField source="flowingWater" label="详细流水" />
      <NumberField source="goodsPrice" label="商品价格" />
      <DeleteButton label="删除" />
    </Datagrid>
  </List>
);
const request = new Request(`${API_URL}/goods/`, {
  method: "GET"
});
/**
 * 获取商品名称列表
 */
var options = [];
fetch(request)
  .then(response => {
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
    }
    console.log(response);
    return response.json();
  })
  .then(({ resultBody }) => {
    resultBody.map((item, index) => {
      options.push({ id: item.goodsName, name: item.goodsName });
    });
  });
/**
 * 搜索设置
 */
const ExchangeFilter = props => (
  <Filter {...props}>
    <DateInput source="time_start" label="开始时间" alwaysOn />
    <DateInput source="time_end" label="结束时间" alwaysOn />
    <TextInput source="real_name" label="用户" alwaysOn />
    <SelectInput
      source="goods_name"
      choices={options}
      label="商品名称"
      alwaysOn
    />
  </Filter>
);
