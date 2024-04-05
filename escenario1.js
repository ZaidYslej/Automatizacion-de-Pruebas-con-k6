import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    vus: 50,
    duration: '1m',
};

export default function () {
    const pokemon = ['pikachu', 'charizard', 'bulbasaur', 'squirtle', 'ditto'];
    const randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
    const res = http.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`);
    check(res, { 'status was 200': (r) => r.status === 200 });
    sleep(1);
}
