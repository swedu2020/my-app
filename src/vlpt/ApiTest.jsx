import axios from 'axios';

function apitest(){
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    // const result1 = axios.get(url);
    // console.log(result1);
    axios.get(url).then(function (response) {
            // 성공 핸들링
            console.log('then : ', response.data);
        })
        .catch(function (error) {
            // 에러 핸들링
            console.log('error : ', error);
        })
        .finally(function () {
            // 항상 실행되는 영역
            console.log('axios get finally');
        });
    return(
        <></>
    );
}

export default function getUser() {

    const url = 'https://jsonplaceholder.typicode.com/users/1';
    try {
    const response = axios.get(url);
        console.log(response);
    } catch (error) {
        console.error(error);
    }

    return(
        <></>
    );
}
