import { DataType } from "../components/DataTable/types";

export interface TableState {
    data: DataType[],
    searchQuery: string,
    page: number,
    loading: boolean,
    sortBy: string,
    sortOrder: SortOrder,
}

export type Data = {
    data: DataType[],
}

export type Loading = {
    loading: boolean,
}

export type Page = {
    page: number,
}

export type SearchQuery = {
    searchQuery: string,
}

export type Sort = {
    sortBy: string,
    sortOrder: string,
}
