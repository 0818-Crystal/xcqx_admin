import React from 'react';
import { List, Datagrid, TextField, Edit,SimpleForm,ReferenceInput,ImageField,SelectInput ,EditButton,TextInput,Create} from 'react-admin';
import MyUrlField from './MyUrlField'
import {ExportExcel} from '../util/excelUtil'

export const EssayExporter = essay =>{
    const initColumn = [
       
        {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    }, {
        title: '文章标题',
        dataIndex: 'goodsName',
        key: 'goodsName',
    }, {
        title: '文章地址',
        dataIndex: 'essayUrl',
        key: 'essayUrl',
    },{
        title: '所属目录',
        dataIndex: 'essayType',
        key: 'essayType',
    }
    ];

ExportExcel(initColumn,essay,'文章.xlsx')
}
export const EssayList = props => (
    <List {...props} sort={{ field: 'id', order: 'ASC' }} exporter = {EssayExporter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="essayTitle" label='文章标题'/>
            <MyUrlField source="essayUrl" label='文章地址' />
            <TextField source="essayType" label='所属目录' />
            <EditButton/>
        </Datagrid>
    </List>
);
export const EssayEdit = props => (
    <Edit {...props}>
    <SimpleForm>
            <TextInput source="essayTitle" label='文章标题' />
            <TextInput source="essayUrl" label='文章地址' />
            <ReferenceInput
                options={{label:'所属目录'}}
                source="essayType"
                reference="essay-type"
                sort={{field:'id',order:'ASC'}}>
            <SelectInput optionText="essayType" optionValue='essayType'/>
        </ReferenceInput>
    </SimpleForm>
</Edit>
);
export const EssayCreate = props =>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source="essayTitle" label='文章标题' />
            <TextInput source="essayUrl" label='文章地址' />
            <ReferenceInput
                options={{label:'所属目录'}}
                source="essayType"
                reference="essay-type"
                sort={{field:'id',order:'ASC'}}>
            <SelectInput optionText="essayType" optionValue='essayType'/>
        </ReferenceInput>
        </SimpleForm>
    </Create>
);
