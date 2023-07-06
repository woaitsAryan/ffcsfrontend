import axios from 'axios';
import Cookies from 'js-cookie';

const postHandler = async (URL: string, formData: object, protect: boolean, parameter:string,  type: string = 'application/json') => {
  const headers = {
    'Content-Type': type,
    Authorization: '',
  };
  if (protect) headers.Authorization = `Bearer ${Cookies.get('token')}`;
  const response: any = {
    status: 0,
    data: {},
    statusCode: 500,
  };

  await axios
    .post(URL, formData, { headers })
    .then(res => {
      response.status = 1;
      response.data = `res.${parameter}`;
      response.statusCode = res.status;
    })
    .catch(err => {
      response.status = 0;
      response.data = err.response.data;
      response.statusCode = 500;
      return response;
    });
  return response;
};

export default postHandler;