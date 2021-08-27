import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useAxios = (opts, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  const [trigger, setTrigger] = useState(0);

  if(!opts.url) return;

  const refetch = () => {
    setState({...state, loading: true});
    setTrigger(Date.now());
  }

  useEffect(()=>{
    axiosInstance(opts)
      .then(data => {
        setState({
          ...state,
          loading: false, data
        })
      })
      .catch(error => {
        setState({
          ...state,
          loading: false, error
        })
      })
  }, [trigger])

  return {...state, refetch};
}



export const UseAxios = () => {
  const {loading, data, error, refetch} = useAxios({
    url: "https://yts.am/api/v2/list_movies.json"
  });


  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading" }</h2>
      <button onClick={refetch}>ReRe</button>
    </div>
  )
}
