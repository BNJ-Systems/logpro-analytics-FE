import * as React from 'react';
import { List, Datagrid, TextField,DateField,NumberField,BooleanField} from 'react-admin';

export const Air = props => (
    <List { ...props}>
        <Datagrid rowClick="edit">
        <TextField source="id" />
           
            <BooleanField name = "Active" source="active" />
            <DateField name="Interfaced Date" source="int_date" />
            <NumberField name="Order Number" source="order_number" />
            <TextField name= "Service Level" source="service_level" />
            <NumberField name="Client" source="client" />
            
            

        </Datagrid>
    </List>
)