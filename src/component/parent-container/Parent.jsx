import { useState } from "react";
import Child from "../child-container/Child";
import "./Parent.css";

export default function Parent() {
  const [listItem, setListItem] = useState([]);

  return (
    <>
      <Child setListItem={setListItem} listItem />
    { listItem.length>0 && <table>
        <tbody>
          <tr>
            <th>Items</th>
            <th>Quantity</th>
            <th>Type</th>
          </tr>
          {listItem.map((item, index) => (
            <tr>
              <td>{item.value}</td>
               <td>{item.id}</td>
               <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </>
  );
}
