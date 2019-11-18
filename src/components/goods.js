import React from "react";
import {
  List,
  Create,
  Datagrid,
  TextField,
  Edit,
  NumberField,
  DateField,
  SimpleForm,
  ImageField,
  EditButton,
  TextInput,
  ImageInput,
  NumberInput,
  SelectInput
} from "react-admin";
import { ExportExcel } from "../util/excelUtil";
import MyStateField from "./MyStateFiled";
const GoodsExporter = goods => {
  const initColumn = [
    {
      title: "id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "商品名称",
      dataIndex: "goodsName",
      key: "goodsName"
    },
    {
      title: "商品介绍",
      dataIndex: "goodsInfo",
      key: "goodsInfo"
    },
    {
      title: "商品剩余总量",
      dataIndex: "goodsRestNum",
      key: "goodsRestNum"
    },
    {
      title: "商品总量",
      dataIndex: "goodsFullNum",
      key: "goodsFullNum"
    },
    {
      title: "商品价格",
      dataIndex: "goodsPrice",
      key: "goodsPrice"
    },
    {
      title: "商品图片",
      dataIndex: "goodsImg",
      key: "goodsImg"
    },
    {
      title: "上架状态",
      dataIndex: "goodsState",
      key: "goodsState"
    },
    { title: "推荐商品", dataIndex: "goodsRecommend", key: "goodsRecommend" },
    {
      title: "上架时间",
      dataIndex: "goodsUploadTime",
      key: "goodsUploadTime"
    }
  ];

  ExportExcel(initColumn, goods, "商品.xlsx");
};
export const GoodList = props => (
  <List
    {...props}
    sort={{ field: "id", order: "ASC" }}
    exporter={GoodsExporter}
  >
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="goodsName" label="商品名称" />
      <TextField source="goodsInfo" label="商品介绍" />
      <NumberField source="goodsRestNum" label="商品剩余总量" />
      <NumberField source="goodsFullNum" label="商品总量" />
      <NumberField source="goodsPrice" label="商品价格" />
      <ImageField source="goodsImg" label="商品图片"></ImageField>
      <MyStateField source="goodsState" label="上架状态" on="上架" off="下架" />
      <MyStateField
        source="goodsRecommend"
        label="推荐商品"
        on="推荐"
        off="不推荐"
      />
      <DateField source="goodsUploadTime" label="上架时间" />
      <EditButton></EditButton>
    </Datagrid>
  </List>
);
export const GoodCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="goodsName" label="商品名称" />
      <TextInput source="goodsInfo" label="商品介绍" />
      <NumberInput source="goodsFullNum" label="商品总量" />
      <NumberInput source="goodsPrice" label="商品价格" />
      <ImageInput
        source="file"
        label="商品图片"
        accept="image/*"
        placeholder={<p>拖拽你的图片到这里</p>}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
      <SelectInput
        source="goodsState"
        label="上架状态"
        choices={[
          { id: "1", name: "上架" },
          { id: "0", name: "下架" }
        ]}
      />
      <SelectInput
        source="goodsRecommend"
        label="推荐商品"
        choices={[
          { id: "1", name: "推荐" },
          { id: "0", name: "不推荐" }
        ]}
      />
    </SimpleForm>
  </Create>
);

export const GoodEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="goodsName" label="商品名称" />
      <TextInput source="goodsInfo" label="商品介绍" />
      <NumberInput source="goodsRestNum" label="商品剩余总量" />

      <NumberInput source="goodsFullNum" label="商品总量" />
      <NumberInput source="goodsPrice" label="商品价格" />
      <ImageInput
        source="file"
        label="商品图片"
        accept="image/*"
        placeholder={<p>拖拽你的图片到这里</p>}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
      <SelectInput
        source="goodsState"
        label="上架状态"
        choices={[
          { id: "1", name: "上架" },
          { id: "0", name: "下架" }
        ]}
      />
      <SelectInput
        source="goodsRecommend"
        label="推荐商品"
        choices={[
          { id: "1", name: "推荐" },
          { id: "0", name: "不推荐" }
        ]}
      />
    </SimpleForm>
  </Edit>
);
