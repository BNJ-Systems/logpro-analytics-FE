import * as React from "react";
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {Shipped} from './Components/Shipped/Shipped';
import {Rejected} from './Components/Rejected/Rejected';
import {Air} from './Components/Air/Air'
const dataProvider = jsonServerProvider('http://localhost:5000');
const App = () => (
     <Admin dataProvider={dataProvider}>
          <Resource name="shipped_orders" list={Shipped} />
          <Resource name='rejected_orders' list={Rejected}/>
          <Resource name='air_orders' list={Air}/>
      </Admin>
)
export default App;