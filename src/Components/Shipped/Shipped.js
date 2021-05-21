import * as React from 'react';
import { List, Datagrid, TextField,DateField,NumberField} from 'react-admin';

export const Shipped = props => (
    <List { ...props}>
        <Datagrid rowClick="edit">
        <TextField source="id" />
            {/* <NumberField name ="Order Id" source="id"/> */}
            <DateField name = "Report Date" source="report_date" />
            <TextField name = "Client" source="client" />
            <NumberField name="Orders Interfaced" source="orders_interfaced" />
            <NumberField name="Units Interfaced" source="units_interfaced" />
            <NumberField source="orders_cancelled" />
            <NumberField source="units_cancelled" />
            <NumberField name="% Cancelled ord_int" source="pct_ord_can_to_int" />
            <NumberField source="pct_unit_can_to_int"/>
            <NumberField name="Units Shipped" source="units_shipped"/>
            <NumberField name = "Orders Shipped" source="orders_shipped"/>

        </Datagrid>
    </List>
)