import { FC } from 'react';
import { useState } from "react";
import validateForm from "../../validation/validateForm";
import { addPlayer } from '../../helpers/fetchHelper';
import PlayerForm from './PlayerForm';
import { defaultValues } from '../../helpers/common';
import { Player } from '../../data/commonData';

const AddPlayerForm: FC = () => {
    // States
    const [newPlayer, setNewPlayer] = useState<Player>(defaultValues)
    const [errors, setErrors] = useState<Player>(defaultValues)
    
    // Text to PlayerForm
    const textToForm = {
        submitName: "Add player",
        title: "Add a new player"
    }
    // Adds new player
    const handleClick = async (event: { preventDefault: () => void; }) => {
        
        try {
            event.preventDefault();

            // Validates values from form
            const checkError = validateForm(newPlayer);

            if(Object.keys(checkError).length > 1) {
                setErrors(checkError)
                return
            }

            // Adds new player to database
            let result = await addPlayer(newPlayer)

            if(result) {
                console.log("Player was succesfully added");
                setNewPlayer(defaultValues);
                setErrors(defaultValues); 

            } else {
                console.log("Player was not added to database");
            }

        }catch(err) {
            console.error(err);
        }
    }

    return (  
        <PlayerForm 
            setState={setNewPlayer} 
            state={newPlayer} 
            errors={errors} 
            text={textToForm} 
            handleClick={handleClick}
        />      
    );
}

export default AddPlayerForm;