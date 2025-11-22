export default function BudgetTable({ items }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Lot</th>
            <th>Part estimative</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.lot}>
              <td>{item.lot}</td>
              <td>{item.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
