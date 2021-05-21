import * as React from 'react';
import { List, Datagrid, TextField,DateField,NumberField} from 'react-admin';

export const Rejected = props => (
    <List { ...props}>
        <Datagrid rowClick="edit">
        <TextField source="id" />
           
            <NumberField name = "Warehouse" source="warehouse" />
            <NumberField name="Order Number" source="order_number" />
            <NumberField name="item_number" source="item_number" />
            <NumberField name= "qty" source="qty" />
            <NumberField name="reject code" source="reject_code" />
            <DateField name="date" source="date" />
            <TextField name="service level" source="service_level"/>
            

        </Datagrid>
    </List>
)