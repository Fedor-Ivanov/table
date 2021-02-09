import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "./components/Loader";
import Table from "./components/Table";
import { getTableData, deleteTableRow, newTableRow, updateTableRow } from "./store/actions";
import { TableWrapper } from "./styles";

function App({ getTableData, data, isLoading, onDeleteTableRow, onNewTableRow, onUpdateTableRow }) {
  useEffect(() => {
    getTableData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <TableWrapper>
        <Table
          data={data}
          // oddRowBck={"red"}
          // evenRowBck={"blue"}
          // editableColor={"yellow"}
          // cellPadding={5}
          onDelete={onDeleteTableRow}
          onAddNewRow={onNewTableRow}
          onUpdate={onUpdateTableRow}
        />
      </TableWrapper>
    </>
  );
}

function mapStateToProps(state) {
  return {
    data: {
      rows: state.rows,
      headers: state.headers,
    },
    isLoading: state.isLoading,
  };
}

const mapDispatchToProps = {
  getTableData: getTableData,
  onDeleteTableRow: deleteTableRow,
  onNewTableRow: newTableRow,
  onUpdateTableRow: updateTableRow,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
