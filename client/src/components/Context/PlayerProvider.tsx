import { getAllPlayers} from "../../helpers/fetchHelper";
import React, { createContext, FC, PropsWithChildren, useState, useEffect, useRef } from "react";
import { Player } from "../../data/data";

interface Props {}

interface PlayerContextData {
    players: Player[] | []
    setPlayers: React.Dispatch<React.SetStateAction<[] | Player[]>>
}

export const PlayerContext = createContext<PlayerContextData>({
    players: [],
    setPlayers: () => {}
})

export const PlayerProvider: FC<PropsWithChildren<Props>> = (props) => {
    const [players, setPlayers] = useState<[] | Player[]>([]);

    useEffect( () => {
        (async () => {

            try {
                let result = await getAllPlayers();
        
                if(result) {
                setPlayers(result);
                } else {
                    console.log("No players found");
                }
            
            } catch(err) {
                console.error(err)
            }
        }) ();
    }, [players]); // Change this one. infinityloop atm. 

    return (
        <PlayerContext.Provider value={{players, setPlayers}}>
            {props.children}
        </PlayerContext.Provider>
    );
};


