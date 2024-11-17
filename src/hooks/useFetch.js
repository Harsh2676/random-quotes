import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true
  })
  
  const fetchData = async () => {
    const resp = await fetch(url);
    const {slip} = await resp.json();

    setState({
      data: slip,
      isLoading: false
    })
  }

  useEffect(() => {
    fetchData()
  }, [url]) 

  return {
    data: state.data,
    isLoading: state.isLoading,
    fetchData
  }
}
  