import {useToggle} from "./Toggle"

const ToggleOff = ({children}) => {
	const {on} = useToggle()
	return !on ? children : null
}

export default ToggleOff
