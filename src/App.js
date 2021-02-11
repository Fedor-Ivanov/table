import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "./components/Loader";
import Table from "./components/Table";
import { getData, removeRow, addRow, updRow } from "./store/actions";
import { TableWrapper } from "./styles";

function App({ getData, data, isLoading, onDeleteTableRow, onNewTableRow, onUpdateTableRow }) {
  useEffect(() => {
    getData();
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
  getData: getData,
  onDeleteTableRow: removeRow,
  onNewTableRow: addRow,
  onUpdateTableRow: updRow,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
