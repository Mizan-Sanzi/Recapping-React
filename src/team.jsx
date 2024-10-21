import { useState } from "react"

export default function Team(){
    const [players, newPlayers] = useState(11);
    function addPlayers (){
        const newPlayer = players + 1;
        newPlayers(newPlayer);
    }
    function removePlayers (){
        const removePlayer = players -1;
        newPlayers(removePlayer);
    }
    const teamStyle = {
        border: '2px solid green',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {players} </h3>
            <button onClick={addPlayers}>Add Players</button>
            <button onClick={removePlayers}>Remove Players</button>
        </div>
    )
}