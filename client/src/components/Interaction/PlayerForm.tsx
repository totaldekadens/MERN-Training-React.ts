import { FC } from "react";
import { Errors, Player } from "../../data/data";
import { WavesBtnSubmit } from "./Buttons";

interface Props {
    setState: React.Dispatch<React.SetStateAction<Player>>
    state: Player
    errors: Errors
    text: {
        submitName: string;
        title: string;
    }
    handleClick:  (event: {
        preventDefault: () => void;
    }) => Promise<void>
}

// Check if you can handle the form with a list.
const PlayerForm: FC<Props> = ({ setState, state, errors, text, handleClick }: Props) => {

    return (
        <div className="row">
            <h2 className='center'>{text.title}</h2>
            <form className="col s12" onSubmit={handleClick}>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="firstName"
                            onChange={(event) => { setState(currentState => ({ ...currentState, firstName: event.target.value }))}}
                            value={state.firstName}
                            type="text"
                        />
                        <label className="active" htmlFor="firstName">* First Name</label>
                        <p style={red}>{errors.firstName ? errors.firstName : ""}</p>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="lastName"
                            onChange={(event) => { setState(currentState => ({ ...currentState, lastName: event.target.value })) }}
                            value={state.lastName}
                            type="text"
                        />
                        <label className="active" htmlFor="lastName">* Last Name</label>
                        <p style={red}>{errors.lastName ? errors.lastName : ""}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6" >
                        <input
                            id="phone"
                            onChange={(event) => { setState(currentState => ({ ...currentState, phone: event.target.value })) }}
                            value={state.phone}
                            type="text"
                        />
                        <label className="active" htmlFor="phone">Phone</label>
                        <p style={red}>{errors.phone ? errors.phone : ""}</p>
                    </div>
                    <div className="input-field col s6" >
                        <input
                            id="email"
                            onChange={(event) => { setState(currentState => ({ ...currentState, email: event.target.value })) }}
                            value={state.email}
                            type="email"
                        />
                        <label className="active" htmlFor="email">* Email</label>
                        <p style={red}>{errors.email ? errors.email : ""}</p>
                    </div>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                    < WavesBtnSubmit name={text.submitName} />
                </div>
            </form>
        </div>
    )
}

// CSS-properties
const red = {
	margin: "10% auto",
    color: "red"
};


export default PlayerForm;