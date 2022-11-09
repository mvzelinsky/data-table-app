import React, { FunctionComponent, useMemo } from "react";
import { useSelector } from "react-redux";
import { CaretUp, CaretDown } from 'react-bootstrap-icons';

import { SortOrder } from "../../../store/TableReducer";
import { TableState } from "../../../store/types";

import './styles.css';

interface Props {
  columnName: string;
  columnValue: string;
  onSort: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const Sort: FunctionComponent<Props> = (props) => {
  const {
    columnName,
    columnValue,
    onSort,
  } = props;

  const {
    sortBy,
    sortOrder,
}: TableState = useSelector(state => state) as TableState;

  const isUpActive = useMemo(() => {
    return (columnValue === sortBy && sortOrder === SortOrder.DESC)
  },[columnValue, sortBy, sortOrder]);

  const isDownActive = useMemo(() => {
    return (columnValue === sortBy && sortOrder === SortOrder.ASC)
  },[columnValue, sortBy, sortOrder]);

  return (
    <div
      className="SortContainer"
      onClick={onSort}
    >
      <div>
        {columnName}
      </div>
      <div className="SortIconsContainer">
          <CaretUp
            color={isUpActive ? "#0d6efd" : "black"}
          />
          <CaretDown
            color={isDownActive ? "#0d6efd" : "black"}
          />
      </div>
    </div>
  );
};

export default Sort;
