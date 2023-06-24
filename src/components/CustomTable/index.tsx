import React, {ChangeEvent, useCallback, useEffect, useMemo, useState} from "react";
import {Box, InputAdornment, Table, TableBody, TableCell, TableHead, TableRow, TextField} from "@mui/material";
import Pagination from "../Pagination";
import {Column, Row} from "../../types/Table";
import "./styles.css";
import ErrorComponent from "../ErrorComponent";
import {Search} from "@mui/icons-material";

type Props = {
    columns: Array<Column>;
    rows: Array<Row>;
    isLoading: boolean;
    isError?: boolean;
    errorMessage?: string;
    onClickRow?: (row: Row) => void;
}

export default function CustomTable(props: Props) {
    let {columns, rows, isLoading, onClickRow, isError, errorMessage} = props;
    const [currentPage, setCurrentPage] = useState(1)
    const [filteredRows, setFilteredRows] = useState<Row[]>([])
    const [searchValue, setSearchValue] = useState("")
    let totalPages = useMemo(() => rows.length / 10, [rows])


    useEffect(() => {
        setFilteredRows(rows)
    }, [rows])

    const memoizedRows = useMemo(() => {
        let startIndex = (currentPage - 1) * 10
        return filteredRows.slice(startIndex, startIndex + 10)
    }, [currentPage, filteredRows])

    const handleRowClick = useCallback((row: Row) => {
        if (onClickRow) {
            onClickRow(row)
        }
    }, [])

    const onSearch = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let value = e.target.value
        setSearchValue(value)
        setCurrentPage(1)
        value = value.trim();
        let filteredRows = rows.filter((row: Row) => {
            if (!value)
                return true
            for (var i = 0; i < columns.length; i++) {
                if (columns[i].allowSearch) {
                    if (typeof row[columns[i].key] === 'string') {
                        let rowText = row[columns[i].key] as string
                        if (rowText.toLowerCase().includes(value.toLowerCase())) {
                            return true
                        }
                    } else if (typeof row[columns[i].key] === 'number') {
                        let rowText = row[columns[i].key] as number
                        if (rowText.toString() == value) {
                            return true
                        }
                    }
                }
            }
        })

        setFilteredRows(filteredRows)
    }

    return (
        <Box>
            {
                isError ? <ErrorComponent message={errorMessage || ''}/> :
                    isLoading ?
                        <div data-testid="loader" className="loader"></div>
                        :
                        <>

                            <TextField
                                className={"w-full mb-3"}
                                onChange={onSearch}
                                value={searchValue}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search/>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Table className="table-fixed mt-3" aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((col, i) => (
                                            <TableCell
                                                key={col.key}
                                                align={i === columns.length - 1 ? 'right' : 'left'}
                                            >{col.label}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {memoizedRows.map((row, i) =>
                                        <TableRow
                                            onClick={() => handleRowClick(row)}
                                            key={i}
                                            className="cursor-pointer"
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            {columns.map((col, i) => (
                                                <TableCell
                                                    align={i === columns.length - 1 ? 'right' : 'left'}
                                                    key={col.key}
                                                    scope="row"
                                                >
                                                    {row[col.key]}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                            {totalPages > 1 && <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={(page) => {
                                    setSearchValue("")
                                    setCurrentPage(page)
                                }}/>
                            }
                        </>
            }

        </Box>
    )
}
