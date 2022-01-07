import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SingleContent from '../comps/SingleContent';
import CustomPagination from '../comps/CustomPagination';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Search = () => {
   const [type, setType] = useState(0);
   const [page, setPage] = useState(1);
   const [searchText, setSearchText] = useState('');
   const [content, setContent] = useState();
   const [numOfPages, setNumOfPages] = useState();

   const darkTheme = createTheme({
      palette: {
         type: 'dark',
         primary: {
            main: '#fff',
         },
      },
   });

   const fetchSearch = useCallback(async () => {
      const { data } = await axios.get(
         `https://api.themoviedb.org/3/search/${
            type ? 'tv' : 'movie'
         }?api_key=${
            process.env.REACT_APP_API_KEY
         }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );

      setContent(data.results);
      setNumOfPages(data.total_pages);
      setSearchText('');
   }, [page, searchText, type]);

   useEffect(() => {
      fetchSearch();
   }, [type, page, fetchSearch]);

   return (
      <div>
         <ThemeProvider theme={darkTheme}>
            <div style={{ display: 'flex', margin: '15px 0' }}>
               <TextField
                  value={searchText}
                  style={{ flex: 1 }}
                  className="searchBox"
                  id="outlined-basic"
                  label="Search"
                  variant="filled"
                  onChange={(e) => setSearchText(e.target.value)}
               />
               <Button
                  onClick={fetchSearch}
                  variant="contained"
                  style={{ marginLeft: 10 }}>
                  <SearchIcon />
               </Button>
            </div>

            <Tabs
               style={{ paddingBottom: 5 }}
               value={type}
               indicatorColor="primary"
               textColor="primary"
               onChange={(event, newValue) => {
                  setType(newValue);
                  setPage(1);
               }}>
               <Tab style={{ width: '50%' }} label="Search Movies" />
               <Tab style={{ width: '50%' }} label="Search TV Series" />
            </Tabs>
         </ThemeProvider>

         <div className="trending">
            {content &&
               content.map((c) => (
                  <SingleContent
                     key={c.id}
                     id={c.id}
                     poster={c.poster_path}
                     title={c.title || c.name}
                     date={c.first_air_date || c.release_date}
                     media_type={type ? 'tv' : 'movie'}
                     vote_average={c.vote_average}
                  />
               ))}
         </div>

         {searchText &&
            !content &&
            (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
         {numOfPages > 1 && (
            <CustomPagination setPage={setPage} numOfPages={numOfPages} />
         )}
      </div>
   );
};

export default Search;
