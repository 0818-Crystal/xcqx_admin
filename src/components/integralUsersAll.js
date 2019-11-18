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
  TextInput
} from "react-admin";
import { ExportExcel } from "../util/excelUtil";
import OpenIdUrl from "./OpenIdUrl";

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
export const IntegralUsersAllList = props => (
  <List {...props} sort={{ field: "integral_num", order: "DESC" }}>
    <Datagrid rowClick="edit">
      <TextField source="id" />

      <DateField source="createTime" label="创建时间" />
      <DateField source="updateTime" label="更新时间" />
      <TextField source="openId" />

      <NumberField source="integralNum" label="全部积分" />
      <NumberField source="usefulNum" label="可用积分" />
    </Datagrid>
  </List>
);