/**
 * 文章管理表
 */
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  ImageInput,
  ReferenceInput,
  ImageField,
  SelectInput,
  EditButton,
  TextInput,
  Create
} from "react-admin";
import MyUrlField from "./MyUrlField";
import MyImageField from "./MyImageField";
import { ExportExcel } from "../util/excelUtil";
import API_URL from "../config";

/**
 * 文章导出格式
 */
export const EssayExporter = essay => {
  const initColumn = [
    {
      title: "id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "文章标题",
      dataIndex: "goodsName",
      key: "goodsName"
    },
    {
      title: "文章地址",
      dataIndex: "essayUrl",
      key: "essayUrl"
    },
    {
      title: "所属目录",
      dataIndex: "essayType",
      key: "essayType"
    }
  ];

  ExportExcel(initColumn, essay, "文章.xlsx");
};
const request = new Request(`${API_URL}/essay-type/`, {
  method: "GET"
});
/**
 * 获取文章类型列表
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
      options.push({ id: item.essayType, name: item.essayType });
    });
  });
export const EssayList = props => (
  <List
    {...props}
    sort={{ field: "id", order: "ASC" }}
    exporter={EssayExporter}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="essayTitle" label="文章标题" />
      <MyUrlField source="essayUrl" label="文章地址" />
      <MyImageField source="essayImgUrl" label="文章图片"></MyImageField>
      <TextField source="essayType" label="所属目录" />
      <EditButton label="修改" />
    </Datagrid>
  </List>
);
/**
 * 文章修改格式
 */
export const EssayEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="essayTitle" label="文章标题" />
      <TextInput source="essayUrl" label="文章地址" />

      <SelectInput choices={options} label="所属目录" source="essayType" />
      <ImageInput
        source="file"
        label="文章图片"
        accept="image/*"
        placeholder={<p>拖拽你的图片到这里</p>}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
/**
 * 创建新纪录格式
 * @param {*} props
 */
export const EssayCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="essayTitle" label="文章标题" />
      <TextInput source="essayUrl" label="文章地址" />

      <SelectInput choices={options} label="所属目录" source="essayType" />
      <ImageInput
        source="file"
        label="文章图片"
        accept="image/*"
        placeholder={<p>拖拽你的图片到这里</p>}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
