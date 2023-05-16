import { table } from "react-table";
import { useNavigate } from "react-router-dom";
const Table = (props) => {
  const navigate = useNavigate();
  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Ctegory</th>
        <th>Price</th>
      </tr>
      {props.result.map((product) => {
        return (
          <tr key={product.id}>
            <th>Cart Details</th>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
          </tr>
        );
      })}
      <tr>
        <th>Total Items</th>
        <td>{props.result.length}</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th></th>c<td></td>
        <td>
          <button onClick={() => navigate("../", { replace: true })}>
            Go Back
          </button>
        </td>
      </tr>
    </table>
  );
};

export default Table;
