import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  Edit,
  EditButton,
  SimpleForm,
  TextInput,
  Create,
  NumberInput
} from "react-admin";
import { ExportExcel } from "../util/excelUtil";
import MyUrlField from "./MyUrlField";

export const IntegralItemExporter = item => {
  const initColumn = [
    {
      title: "id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "标题",
      dataIndex: "integralTitle",
      key: "integralTitle"
    },
    {
      title: "介绍",
      dataIndex: "integralIntro",
      key: "integralIntro"
    },
    {
      title: "总分",
      dataIndex: "integralFullNum",
      key: "integralFullNum"
    },
    {
      title: "附加分",
      dataIndex: "integralSubjoinNum",
      key: "integralSubjoinNum"
    },
    {
      title: "跳转链接",
      dataIndex: "integralUrl",
      key: "integralUrl"
    },
    {
      title: "状态",
      dataIndex: "integralState",
      key: "integralState"
    },
    { title: "权重", dataIndex: "weight", key: "weight" }
  ];

  ExportExcel(initColumn, item, "任务列表.xlsx");
};
export const IntegralItemList = props => (
  <List {...props} sort={{ field: "id", order: "ASC" }}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="integralTitle" label={"标题"} />
      <TextField source="integralIntro" label={"介绍"} />
      <NumberField source="integralFullNum" label={"总分"} />
      <NumberField source="integralSubjoinNum" label={"附加分"} />
      <MyUrlField source="integralUrl" label={"跳转链接"} />
      <TextField source="integralState" label={"状态"} />
      <NumberField source="weight" label={"权重"} />
      <EditButton label="修改" />
    </Datagrid>
  </List>
);

export const IntegralItemEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="integralTitle" label={"标题"} />
      <TextInput source="integralIntro" label={"介绍"} />
      <NumberInput source="integralFullNum" label={"总分"} />
      <TextInput source="integralUrl" label={"跳转链接"} />
      <TextInput source="integralButton" label={"按钮标题"} />
      <TextInput source="integralState" label={"状态"} />
      <NumberInput source="weight" label={"权重"} />
    </SimpleForm>
  </Edit>
);

export const IntegralItemCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="integralTitle" label={"标题"} />
      <TextInput source="integralIntro" label={"介绍"} />
      <NumberInput source="integralFullNum" label={"总分"} />
      <TextInput source="integralUrl" label={"跳转链接"} />
      <TextInput source="integralButton" label={"按钮标题"} />
      <TextInput source="integralState" label={"状态"} />
      <NumberInput source="weight" label={"权重"} />
    </SimpleForm>
  </Create>
);
