const http = new XMLHttpRequest();

console.log('Twawarw')
http.open('GET', 'http://localhost:3000/profile');

http.send();

http.onload = () => {
    console.log(http.response);
};