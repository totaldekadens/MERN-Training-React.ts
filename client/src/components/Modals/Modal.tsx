import { WavesBtnClose } from '../Interaction/Buttons'
import { CSSProperties, FC, PropsWithChildren, useContext } from "react"

interface Props {
	shouldShow: boolean
	onRequestClose: (value: React.SetStateAction<boolean>) => void 
}

const Modal: FC<PropsWithChildren<Props>> = (props) => {

	return props.shouldShow ? (
		<div style={ModalBackground}>
			<div style={ModalBody} onClick={e => e.stopPropagation()}>
				<WavesBtnClose handleClick={props.onRequestClose}/>
				{props.children}
			</div>
		</div>
	) 
	: 
		null;
}

const ModalBackground: CSSProperties = {
	position: "fixed",
	zIndex: 1,
	left: 0,
	top: 0,
	width: "100%",
	height: "100%",
	overflow: "auto",
	backgroundColor: "rgba(0, 0, 0, 0.5)"
}

const ModalBody: CSSProperties = {
	backgroundColor: "white",
	margin: "10% auto",
	padding: "20px",
	width: "50%",
    borderRadius: "10px"
};

export default Modal