import React, { FC } from 'react';
import PlayerList from "../Player/PlayerList";
import PlayerSingle from "../Player/PlayerSingle";

interface Props{}

const FrontPage: FC<Props> = () => {

    return (
        <div className="row">
            <div className="col s3"><PlayerList /></div>
            <div className="col s9"><PlayerSingle /></div>
        </div>
    )
}

export default FrontPage;