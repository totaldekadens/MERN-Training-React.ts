import { Player } from "../data/data";

interface Body {
        method: string
        headers?: {}
        body?: string
}

const makeRequest = async (url : string, body?: Body ) => {
    try {
        let response = await fetch(url, body)
        let result = await response.json();

        return result
    } catch(err) {
        console.error(err)
    }
}

// GET All
export const getAllPlayers = async () => {
    let result = await makeRequest('http://localhost:4000/players');
    return result;
}

// DELETE
export const deletePlayer = async (playerId: number) => {
    const requestOptions = {
        method: 'DELETE',
    };

    let result = await makeRequest(`http://localhost:4000/player/${playerId}`, requestOptions) 

    return result;
}

// POST
export const addPlayer = async (newPlayer : Player) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlayer)
    };

    let result = await makeRequest('http://localhost:4000/players', requestOptions)

    return result;
}

// PUT
export const modifyPlayer = async (playerId: number, updatePlayer: Player) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatePlayer)
    };

    let result = await makeRequest(`http://localhost:4000/player/${playerId}`, requestOptions)

    return result
}
