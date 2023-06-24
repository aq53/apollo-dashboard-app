import React from 'react';
import {Box} from "@mui/material";

type Props = {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

const Pagination = ({currentPage, totalPages, onPageChange}: Props) => {
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 10;
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

        let diff = endPage - startPage;
        startPage -= maxPagesToShow - 1 - diff
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <li key={i} className={i === currentPage ? 'active' : ''}>
                    <button
                        className={`mx-1 hover:bg-blue-500 font-semibold 
                        hover:text-white p-2 border border-blue-500 
                        hover:border-transparent rounded 
                        ${i === currentPage ? 'bg-blue-500 text-white' : 'bg-transparent text-blue-700'}`}
                        onClick={() => onPageChange(i)}>
                        {i}
                    </button>
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <Box className="flex justify-end my-3">
            <button
                className='mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={handlePreviousPage} disabled={currentPage === 1}>
                Prev
            </button>
            <ul className="page-numbers flex">{renderPageNumbers()}</ul>
            <button
                className='mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
            </button>
        </Box>
    );
};

export default Pagination;
