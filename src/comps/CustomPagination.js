import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
   palette: {
      mode: 'dark',
   },
});

const CustomPagination = ({ setPage }) => {
   const handlePageChange = (page) => {
      setPage(page);
      window.scroll(0, 0);
   };
   return (
      <ThemeProvider theme={darkTheme}>
         <Stack spacing={2}>
            <Pagination
               onChange={(e) => handlePageChange(e.target.textContent)}
               count={10}
               color="primary"
            />
         </Stack>
      </ThemeProvider>
   );
};

export default CustomPagination;
