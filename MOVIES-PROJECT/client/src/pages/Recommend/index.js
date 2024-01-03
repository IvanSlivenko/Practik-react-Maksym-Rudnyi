import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { split, useQuery } from "@apollo/client";

import { MOVIES_BY_IDS_QUERY } from "./queries";


const Recommend = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const d =searchParams.get('ids')?.split(',')
  // const [params, setParams] = useState({
  //   ids: [],
  //   title: ''

  // });
debugger
  const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
    variables: {
      ids: searchParams.get('ids')?.split(',')
    }
  });
  if (data) { 
    console.log(data);
    debugger
  }
  

//   useEffect(() => {
//     const ids = searchParams.get('ids')
//     const title = searchParams.get('title')

//     setParams({
//       ids: ids.split(','),
//       title
//       }
// )
//    },[searchParams])
  
  return (
    <div>
      <Typography variant="h1" component="h1" gutterBottom>
        {searchParams.get('title')}
      </Typography>
      {searchParams}
    </div>
  );
};
export default Recommend;
