import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    vus: 30,
    duration: '5m',
};

export default function () {
    const paths = [
        'pokemon/1', 'pokemon/2', 'pokemon/3',
        'ability/1', 'type/1'
    ];
    for (let path of paths) {
        const res = http.get(`https://pokeapi.co/api/v2/${path}`);
        check(res, { 'status was 200': (r) => r.status === 200 });
        sleep(0.5 + Math.random() * 1.5); // Espera entre 0.5 y 2 segundos
    }
}