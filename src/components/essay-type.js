import React from 'react';
import { List, Datagrid, TextField} from 'react-admin';

export const EssayTypeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            
            <TextField source="id" />
            <TextField source="essayType" />
        </Datagrid>
    </List>
);