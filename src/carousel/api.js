import axios from 'axios';

const BASE_URL = 'http://www.mocky.io/v2/5dc56c993200005e00769a65';


const getSlideInfo = async () => {
  const url = BASE_URL;
  const slideInfo = await axios.get(url);
  const { data } = slideInfo;
  if (slideInfo.status === 404 || slideInfo.status === 403 || slideInfo.status === 500) {
    throw Error('processingError');
  }
  return data;
};




export default getSlideInfo;