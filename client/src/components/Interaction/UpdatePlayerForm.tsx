import { FC, useContext } from 'react';
import { useState } from "react";
import validateForm from "../../validation/validateForm";
import { modifyPlayer } from '../../helpers/fetchHelper';
import PlayerForm from './PlayerForm';
import { defaultValues } from '../../helpers/common';
import { CurrentPlayerContext } from '../Context/CurrentPlayerProvider';
import { Player } from '../../data/commonData';

const UpdatePlayerForm: FC = () => {

    // Context
    const {currentPlayer, setCurrentPlayer } = useContext(CurrentPlayerContext);

    // States
    const [updatePlayer, setUpdatePlayer] = useState<Player | any>(currentPlayer) // Check "any" later
    const [errors, setErrors] = useState<Player>(defaultValues)

    // Text to PlayerForm
    const textToForm = {
        submitName: "Update player",
        title: "Update player"
    }
    
    // Updates new player
    const handleClick = async (event: { preventDefault: () => void; }) => {
        
        try {
            event.preventDefault();

            // Validates values from form
            const checkError = validateForm(updatePlayer);
            
            if(Object.keys(checkError).length > 1) {
                setErrors(checkError)
                return
            }

            // Updates player in database
            if(!currentPlayer || !updatePlayer) {
                return console.log("Player was NOT updated"); 
            }

            let result = await modifyPlayer(currentPlayer._id, updatePlayer)

            if(result) {
                alert("Player was succesfully updated" ); 
                setCurrentPlayer(updatePlayer);
                setUpdatePlayer(updatePlayer);
                setErrors(defaultValues);

            } else {
                console.log("Player was NOT updated"); 
            }

        }catch(err) {
            console.error(err);
        }
    }

    return ( 
        <PlayerForm 
            setState={setUpdatePlayer} 
            state={updatePlayer} 
            errors={errors} 
            text={textToForm} 
            handleClick={handleClick}
        />  
    );
}

export default UpdatePlayerForm;