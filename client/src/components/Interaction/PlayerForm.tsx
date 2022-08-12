import { FC } from "react";
import { Player } from "../../data/commonData";
import { handleInput } from "../../data/inputLists";
import { WavesBtnSubmit } from "./Buttons";

interface Props {
    setState: React.Dispatch<React.SetStateAction<Player>>
    state: Player
    errors: Player
    text: {
        submitName: string;
        title: string;
    }
    handleClick:  (event: {
        preventDefault: () => void;
    }) => Promise<void>
}

const PlayerForm: FC<Props> = ({ setState, state, errors, text, handleClick }: Props) => {

    const InputPlayerTextList = handleInput(state, errors)

    return (
        <div className="row">
            <h2 className='center'>{text.title}</h2>
            <form className="col s12" onSubmit={handleClick}>
                {InputPlayerTextList.map((item) => {
                    return (
                        <div key={item.name} className="input-field col s6" style={{padding: "10px"}} >
                            <input
                                id={item.name}
                                onChange={(event) => { setState(currentState => ({ ...currentState, [item.name]: event.target.value }))}}
                                value={item.state}
                                type={item.type}
                                style={{paddingLeft: "5px"}}
                            />
                            <label className="active" htmlFor={item.name}>{item.title}</label>
                            <p style={red}>{item.error}</p>
                        </div>
                    )
                })}
                <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                    <WavesBtnSubmit name={text.submitName} />
                </div>
            </form>
        </div>
    )
}

// CSS-properties
const red = {
	margin: "0px",
    color: "red",
    fontSize: "11px"
};


export default PlayerForm;