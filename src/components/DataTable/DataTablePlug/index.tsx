import React, { FunctionComponent } from "react";
import { FolderX } from "react-bootstrap-icons";
import Spinner from 'react-bootstrap/Spinner';

import TableRow from '../../common/TableRow';
import TableRowCell from "../../common/TableRowCell";

import './styles.css';

interface Props {
    isDataEmpty: boolean;
    loading: boolean;
}

const DataTablePlug: FunctionComponent<Props> = (props) => {
    const {
        isDataEmpty,
        loading,
    } = props;

    return (
        <TableRow>
            <TableRowCell colspan={8}>
              <div className="Plug">
                {isDataEmpty && !loading && (
                    <>
                        <FolderX size={120} />
                        <h3>No Data</h3>
                    </>
                )}
                {isDataEmpty && loading && (
                    <Spinner animation="border" />
                )}
              </div>
            </TableRowCell>
          </TableRow>
    );
};

export default DataTablePlug;
