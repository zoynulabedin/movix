
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getApiConfig } from './features/homeSlice';
import { fetchDataFromAPI } from './ulits/api';

function App() {

  const dispatch = useDispatch();
  const url = useSelector((state) => state.home.url);
  console.log(url);
  useEffect(() => {
  apiTesting()
  },[])
  const apiTesting = () => {
    fetchDataFromAPI("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfig(res))
    })
  }
  return (
    <>
    app
      {url?.tota_pages}
    </>
  )
}

export default App
