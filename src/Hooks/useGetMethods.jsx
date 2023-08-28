import { useEffect, useState } from 'react';

/**
 * This hook use for get data from api
 * @param {String} apiLink api link without base URL and '/'
 * @param {String} effectDependency useEffect Dependency
 * @returns data from api and loading state
 */
const useGetMethods = (apiLink = String, effectDependency = String) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(import.meta.env.VITE_BASE_URL);
  useEffect(() => {
    setLoading(true);
    const options = {
      method: 'GET',
      credentials: "include",
      withCredentials: true
    };
    fetch(`${import.meta.env.VITE_BASE_URL}/${apiLink}`, options)
      .then(response => response.json())
      .then(response => {
        setApiData(response);
        // console.log(response);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [effectDependency && effectDependency]);

  const dataInfo = { apiData, loading };

  return dataInfo;

};

export default useGetMethods;
