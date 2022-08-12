import React, { createContext, FC, PropsWithChildren, useState } from "react";
import { Player } from "../../data/commonData";
interface CurrentPlayerContextData {
    currentPlayer: Player | {} | any  // Check new solution. Messing with "UpdatePlayerForm"
    setCurrentPlayer: React.Dispatch<React.SetStateAction<{} | Player>>
}

export const CurrentPlayerContext = createContext<CurrentPlayerContextData>({
    currentPlayer: {},
    setCurrentPlayer: () => {}
})

export const CurrentPlayerProvider: FC<PropsWithChildren> = (props) => {
    const [currentPlayer, setCurrentPlayer] = useState<{} | Player>({});
    
    return (
        <CurrentPlayerContext.Provider value={{currentPlayer, setCurrentPlayer}}>
            {props.children}
        </CurrentPlayerContext.Provider>
    );
};