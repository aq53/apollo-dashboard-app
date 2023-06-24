import React, {useCallback, useMemo, useState} from "react";
import {Box, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Pagination from "../Pagination";
import {Column, Row} from "../../types/Table";
import "./styles.css";

type Props = {
    columns: Array<Column>;
    rows: Array<Row>;
    isLoading: boolean;
    onClickRow?: (row: Row) => void;
}

export default function CustomTable(props: Props) {
    let {columns, rows, isLoading, onClickRow} = props;
    const [currentPage, setCurrentPage] = useState(1)
    let totalPages = useMemo(() => rows.length / 10, [rows])

    const memoizedRow = useMemo(() => {
        let startIndex = (currentPage - 1) * 10
        return rows.slice(startIndex, startIndex + 10)
    }, [currentPage, rows])

    const handleRowClick = useCallback((row: Row) => {
        if (onClickRow) {
            onClickRow(row)
        }
    }, [])

    return (
        <Box>
            {isLoading ?
                <div data-testid="loader" className="loader"></div>
                :
                <>
                    <Table className="table-fixed" aria-label="simple table">
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
                            {memoizedRow.map((row, i) =>
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
                                            // component={i === 0 ? "th" : 'td'}
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
                            setCurrentPage(page)
                        }}/>
                    }
                </>
            }
        </Box>
    )
}
