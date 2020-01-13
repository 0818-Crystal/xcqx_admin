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
  NumberInput,
  TextInput
} from "react-admin";
import { ExportExcel } from "../util/excelUtil";
import ReferenceText from "./MyReferenceText";
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
  <List
    {...props}
    sort={{ field: "integral_num", order: "DESC" }}
    exporter={false}
    filters={<IntegralUsersAllFilter />}
  >
    <Datagrid>
      <TextField source="id" />

      <DateField source="createTime" label="创建时间" />
      <DateField source="updateTime" label="更新时间" />
      {/* <ReferenceField source="openId" reference="user">
        <ReferenceText source="nickname" />
      </ReferenceField> */}
      <OpenIdUrl source="openId" label="openId"></OpenIdUrl>
      <NumberField source="integralNum" label="全部积分" />
      <NumberField source="usefulNum" label="可用积分" />
      <NumberField source="originNum" label="附加积分" />
      <EditButton />
    </Datagrid>
  </List>
);
const IntegralUsersAllFilter = props => (
  <Filter {...props}>
    <TextInput label="搜索openid" source="open_id" alwaysOn />
  </Filter>
);
export const IntegralUsersAllEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="originNum" label="附加积分" />
    </SimpleForm>
  </Edit>
);
