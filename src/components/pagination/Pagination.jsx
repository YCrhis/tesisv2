import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative !Important',
        '& .MuiPagination-root': {
            position: 'relative !important',
            boxShadow: '0 0 0 0 !important'
        }
    },
}));

export default function PaginationOutlined({ pageNumber, setPage }) {
    const classes = useStyles();

    const changePage = async (page) => {
        setPage(page - 1)
        window.scroll(0, 50)
    }

    return (
        <div className={classes.root}>
            <Pagination
                count={pageNumber}
                variant="outlined"
                onChange={(e) => changePage(e.target.textContent)}
                hidePrevButton
                hideNextButton
                size="large"
            />
        </div>
    );
}