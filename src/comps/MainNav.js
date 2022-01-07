import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { useHistory } from 'react-router-dom';

export default function SimpleBottomNavigation() {
   const [value, setValue] = React.useState(0);
   const history = useHistory();

   React.useEffect(() => {
      if (value === 0) history.push('/');
      else if (value === 1) history.push('/movies');
      else if (value === 2) history.push('/series');
      else if (value === 3) history.push('/search');
   }, [value, history]);

   return (
      <Box
         sx={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            zIndex: 100,
         }}>
         <BottomNavigation
            sx={{
               bgcolor: '#2d313a',
            }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
               setValue(newValue);
            }}>
            <BottomNavigationAction
               sx={{
                  color: 'white',
               }}
               label="Trending"
               icon={<WhatshotIcon />}
            />
            <BottomNavigationAction
               sx={{
                  color: 'white',
               }}
               label="Movies"
               icon={<MovieIcon />}
            />
            <BottomNavigationAction
               sx={{
                  color: 'white',
               }}
               label="TV Series"
               icon={<TvIcon />}
            />
            <BottomNavigationAction
               sx={{
                  color: 'white',
               }}
               label="Search"
               icon={<SearchIcon />}
            />
         </BottomNavigation>
      </Box>
   );
}
