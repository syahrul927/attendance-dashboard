import MUIDataTable from "mui-datatables";
const Table = ({ title, data }) => {

  const { columns, rows } = data

  // const columns = ["Name", "Company", "City", "State"];

  // const data = [
  //   ["Joe James", "Test Corp", "Yonkers", "NY"],
  //   ["John Walsh", "Test Corp", "Hartford", "CT"],
  //   ["Bob Herm", "Test Corp", "Tampa", "FL"],
  //   ["James Houston", "Test Corp", "Dallas", "TX"],
  // ];

  const options = {
    filterType: 'checkbox',
  };
  return (
    <MUIDataTable
      title={title}
      data={rows}
      columns={columns}
      options={options}
    />
  )
}
export default Table