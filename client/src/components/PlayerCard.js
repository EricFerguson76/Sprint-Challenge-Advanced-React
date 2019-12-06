import React from 'react';


const PlayerCard = props => {

    return(
        <div>
            {props.players.map((player, id) =>
                <div key={id}>
                <h2>{player.name}</h2>
                <h2>{player.country}</h2>
                </div>
            )}
        </div>
    )
}

export default PlayerCard;