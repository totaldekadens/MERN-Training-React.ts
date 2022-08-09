import { FC } from "react"

interface Props1 {
    name: string
    handleClick: () => {}
}

interface Props2 {
    handleClick: any 
    // Find the type
    /* React.SetStateAction<boolean> */ 
    /* (value: React.SetStateAction<boolean>) => void */
}    

interface Props3 {
    name: string
}

export const WavesBtnGeneral: FC<Props1> = (props) => {
    return <button className='btn waves-effect waves-light' onClick={props.handleClick}>{props.name}</button>
}

export const WavesBtnClose: FC<Props2> = (props) => {
    return <button  className='btn waves-effect waves-light red lighten-3' onClick={props.handleClick}>Close</button>
}

export const WavesBtnSubmit: FC<Props3> = (props) => {
    return <button className='btn waves-effect waves-light' type='submit' name='action'>{props.name}</button>
}