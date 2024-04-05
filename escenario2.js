import http from 'k6/http';
import { check } from 'k6';

export let options = {
    stages: [
        { duration: '2m', target: 20 },
        { duration: '2m', target: 50 },
        { duration: '2m', target: 100 },
        { duration: '5m', target: 100 },
        { duration: '2m', target: 0 },
    ],
};

export default function () {
    const paths = ['pokemon/ditto', 'ability/7', 'type/3'];
    const randomPath = paths[Math.floor(Math.random() * paths.length)];
    const res = http.get(`https://pokeapi.co/api/v2/${randomPath}`);
    check(res, { 'status was 200': (r) => r.status === 200 });
}
