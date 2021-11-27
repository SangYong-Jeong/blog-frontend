import axios from 'axios';

const client = axios.create();

/* 
  글로벌 설정 예시:

  API 주소를 다른 곳으로 사용함
  client.defaults.baseURL = 'https://external-api-server.com/'

  헤더 설정
  client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4'

  인터셉터 설정
  axios.intercepter.response.use(\
    response => {
      요청 성공 시 특정 작업 수행
      return response
    },
    error => {
      요청 실패 시 특정 작업 수행
      return Promise.reject(error)
    }
    )
*/

export default client;

// axios 인스턴스를 만들면 나중에 API 클라이언트에 공통된 설정을 쉽게 넣어줄 수 있다. ( 인스턴스를 사용하지 않는 경우 모든 API 요청에 대해 설정하게 된다. )
