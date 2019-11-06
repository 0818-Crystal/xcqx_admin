import React from 'react'
import { List, Datagrid, TextField,NumberField,Edit,SimpleForm,SelectInput,Filter,DateInput,ReferenceField ,DateField,EditButton,TextInput} from 'react-admin';
import {ExportExcel} from '../util/excelUtil'

const ExchangeExporter = exchange =>{
    console.log(exchange)
    const initColumn = [
        {
            title:'兑换时间',
            dataIndex:'createTime',
            key:'createTime'
        },
        {
        title: '真实姓名',
        dataIndex: 'realName',
        key: 'realName',
    }, {
        title: '手机号码',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
    },{
        title:'商品名称',
        dataIndex:'goodsName',
        key:'goodsName'

    },{
        title:'商品价格',
        dataIndex:'goodsPrice',
        key:'goodsPrice'
    }];

ExportExcel(initColumn,exchange,'奖品兑换.xlsx')
}
export const ExchangeList = props=>(
    
    <List {...props} filters={<ExchangeFilter/>} exporter={ExchangeExporter} sort={{field:'create_time',order:'DESC'}}>
    <Datagrid rowClick="edit" >
        <TextField source="createTime" label='兑换时间'/>
        <TextField source="realName" label='姓名'/>
        <TextField source="phoneNumber" label='手机号码'/>
        <TextField source="id" label='id'/>
        <TextField source="goodsName" label='商品名称'/>
        <NumberField source="goodsPrice"  label='商品价格'/>
        
    </Datagrid>
</List>
)
const request = new Request('http://203.195.230.234:8080/goods/', {
    method: 'GET',
   })
   var options=[]
fetch(request)
    .then(response => {
        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
        }
        console.log(response);
        return response.json();
    })
    .then(({resultBody }) => {
        resultBody.map((item,index)=>{
            options.push({id:item.goodsName,name:item.goodsName})
        })
    });
const ExchangeFilter = (props) => (
        <Filter {...props}>
        <DateInput source="time_start" label='开始时间' alwaysOn />
        <DateInput source="time_end" label='结束时间' alwaysOn />
        <TextInput source='real_name' label='用户'/>
        <SelectInput source="goods_name"  choices={options} label='商品名称'/>
    </Filter>
);