import React from "react";
import { UserList, UserEdit } from "./components/users";
import { Admin, Resource, ListGuesser } from "react-admin";
import { GoodList, GoodCreate, GoodEdit } from "./components/goods";
import {
  IntegralUsersAllList,
  IntegralUsersAllEdit
} from "./components/integralUsersAll";
import GoodIcon from "@material-ui/icons/ShoppingCart";
import EssayIcon from "@material-ui/icons/Book";
import ExchangeIcon from "@material-ui/icons/Assessment";
import Dashboard from "./components/Dashboard";
import { EssayList, EssayEdit, EssayCreate } from "./components/essay";
import { ExchangeList } from "./components/user-exchange";
import {
  IntegralItemList,
  IntegralItemEdit,
  IntegralItemCreate
} from "./components/Integral-items";
import authProvider from "./components/authProvider";
import UserIcon from "@material-ui/icons/Group";
import dataProvider from "./components/dataProvider";
const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    {/* <Resource name="posts" list={PostList} edit={PostEdit}  create={PostCreate} icon={PostIcon}/> */}
    <Resource
      name="user"
      list={UserList}
      icon={UserIcon}
      edit={UserEdit}
      options={{ label: "用户" }}
    />
    <Resource
      name="goods"
      list={GoodList}
      create={GoodCreate}
      edit={GoodEdit}
      icon={GoodIcon}
      options={{ label: "商品" }}
    />
    <Resource
      name="essay"
      list={EssayList}
      edit={EssayEdit}
      create={EssayCreate}
      icon={EssayIcon}
      options={{ label: "文章" }}
    />
    <Resource name="essay-type" icon={GoodIcon} />

    <Resource
      name="integral-items"
      list={IntegralItemList}
      edit={IntegralItemEdit}
      create={IntegralItemCreate}
      options={{ label: "任务列表" }}
    />
    <Resource
      name="integralUsersAll"
      list={IntegralUsersAllList}
      edit={IntegralUsersAllEdit}
      options={{ label: "积分排行" }}
    />
    <Resource
      name="user-exchange"
      list={ExchangeList}
      icon={ExchangeIcon}
      options={{ label: "兑换记录" }}
    />
  </Admin>
);

export default App;
