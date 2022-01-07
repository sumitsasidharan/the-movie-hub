import Badge from '@mui/material/Badge';
import React from 'react';
import { img_300, unavailable } from '../config/config';
import ContentModal from './ContentModal';

const SingleContent = ({
   id,
   poster,
   title,
   date,
   media_type,
   vote_average,
}) => {
   return (
      <ContentModal media_type={media_type} id={id}>
         <Badge
            badgeContent={vote_average}
            color={vote_average > 6 ? 'primary' : 'secondary'}
         />

         <img
            className="poster"
            src={poster ? `${img_300}/${poster}` : unavailable}
            alt={title}
         />
         <h2 className="title">{title}</h2>

         <div className="subtitle">
            <span>{media_type === 'tv' ? 'TV Series' : 'Movie'}</span>
            <span>{date}</span>
         </div>
      </ContentModal>
   );
};

export default SingleContent;
// 1.46.37
