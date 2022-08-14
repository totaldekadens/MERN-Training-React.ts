import { useContext, FC } from 'react';
import { deletePlayer } from '../../helpers/fetchHelper';
import { PlayerContext } from '../Context/PlayerProvider';
import { CurrentPlayerContext } from '../Context/CurrentPlayerProvider';
import { Player } from '../../data/commonData';

const PlayerList: FC = () => {

    // Context
    const {players} = useContext(PlayerContext)
    const {currentPlayer, setCurrentPlayer } = useContext(CurrentPlayerContext)
    
    const updateCurrentPlayer = (item: Player) => {
        setCurrentPlayer(item);
    }

    // Deletes player
    const handleClick = async (playerId: number) => {

        try {
            
            if(playerId) {
                // Todo: Set up a confirmation modul with a "Are you sure?" before it proceeds.
                let result = await deletePlayer(playerId);
                
                if(result) {
                    if(currentPlayer._id === playerId) {
                        setCurrentPlayer({});
                    }
                } else {
                    console.log("Player was not deleted");
                }

            } else {
                console.log("Id was not found")
            }  

        }catch(err) {
            console.error(err);
        }
    }

    return ( 
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4>Players</h4></li>
                {players.length > 0 ? players.map((item) => (
                    <div 
                        key={item._id} 
                        className="collection-item"
                        style={{ 
                            display: "flex",  
                            flexDirection: "row", 
                            justifyContent: "space-between", 
                            width: "100%", 
                            alignItems: "center"}}
                        >
                        <div 
                            style={{ color: "darkCyan", cursor: "pointer" }}
                            onClick={() => {updateCurrentPlayer(item);}}
                        >
                            {item.firstName} {item.lastName}
                        </div> 
                        <div onClick={() => {handleClick(item._id)}} style={{cursor: "pointer", color: "red"}}>X</div> {/* Fix icon later */}
                    </div>
                )) 
                : 
                    <p>No players added yet</p>
                }
            </ul>
        </div> 
    );
}

export default PlayerList;