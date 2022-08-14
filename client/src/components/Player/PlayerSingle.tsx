import React, { useState, useContext, FC } from 'react';
import Modal from '../Modals/Modal';
import UpdatePlayerForm from '../Interaction/UpdatePlayerForm';
import { CurrentPlayerContext } from '../Context/CurrentPlayerProvider';

const PlayerSingle: FC = () => {

    // Context
    const {currentPlayer} = useContext(CurrentPlayerContext);

    // States
    const [shouldShowModal, setShouldShowModal] = useState(false);
    
    return ( 
        <>
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.jpeg" alt='bild' />
                        {Object.keys(currentPlayer).length > 0 ? 
                            <>
                            <span className="card-title">{currentPlayer.firstName} {currentPlayer.lastName}</span>
                            <div 
                                onClick={() => setShouldShowModal(!shouldShowModal) } 
                                className="btn-floating halfway-fab" 
                                style={{width: "100px", textAlign: "center", borderRadius: "5px"}}
                            >
                                Update player
                            </div>
                            </>
                        : 
                            ""
                        } 
                    </div>
                    {Object.keys(currentPlayer).length > 0 ? 
                        <>
                        <div className="card-content">
                            <p>Phone: {currentPlayer.phone} - Email: {currentPlayer.email}</p>
                        </div>
                        <div className='card-action'>
                            Team: {currentPlayer.team}
                        </div>
                        </>
                    : 
                        ""
                    }
                </div>
            </div>
        </div>
        <Modal shouldShow={shouldShowModal} onRequestClose={() => setShouldShowModal(false)} >
            {Object.keys(currentPlayer).length > 0 ? 
                <UpdatePlayerForm />
            : 
                <p>Player was not found</p>
            }
        </Modal> 
        </>
    );
};

export default PlayerSingle;