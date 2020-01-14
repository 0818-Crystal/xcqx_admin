import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  Filter,
  DateInput,
  ReferenceField,
  NumberInput,
  DateField,
  NumberField,
  EditButton,
  TextInput
} from "react-admin";
import AvatarField from "./AvatarField";
import { ExportExcel } from "../util/excelUtil";
import MyStateField from "./MyStateFiled";

const UserExporter = users => {
  const initColumn = [
    {
      title: "关注时间",
      dataIndex: "createTime",
      key: "createTime"
    },
    {
      title: "id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "微信昵称",
      dataIndex: "nickname",
      key: "nickname"
    },
    {
      title: "邀请人",
      dataIndex: "popularizerId",
      key: "popularizerId"
    },
    {
      title: "关注状态",
      dataIndex: "followerState",
      key: "followerState"
    },
    {
      title: "真实姓名",
      dataIndex: "realName",
      key: "realName"
    },
    {
      title: "电话号码",
      dataIndex: "phoneNumber",
      key: "phoneNumber"
    }
  ];

  ExportExcel(initColumn, users, "用户.xlsx");
};

export const UserList = props => (
  <List
    {...props}
    sort={{ field: "id", order: "DESC" }}
    filters={<UserFilter />}
    exporter={UserExporter}
  >
    <Datagrid>
      <TextField source="id" />
      {/* <TextField source="openId" label="openID"></TextField> */}
      <AvatarField source="headimgurl" title="头像" label="头像" />

      <TextField source="nickname" label="微信昵称" />

      {/* <TextField source="popularizerId" label="邀请者" /> */}

      <MyStateField
        source="followerState"
        label="关注状态"
        on="关注"
        off="取关"
      />
      <TextField source="phoneNumber" label="电话号码" />
      <TextField source="realName" label="真实姓名" />
      <NumberField source="integralNum" label="全部积分" />
      <NumberField source="usefulNum" label="可用积分" />
      <NumberField source="originNum" label="附加积分" />
      <DateField source="createTime" label="关注时间"></DateField>

      <EditButton label="修改" />
    </Datagrid>
  </List>
);
const UserFilter = props => (
  <Filter {...props}>
    <TextInput label="搜索昵称" source="nickname" alwaysOn />
    <TextInput label="手机号码" source="phone_number" alwaysOn />
    <TextInput label="真实姓名" source="real_name" alwaysOn />
  </Filter>
);

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="phoneNumber" />
      <TextInput source="realName" />
      <NumberInput source="originNum" label="附加积分" />
    </SimpleForm>
  </Edit>
);
