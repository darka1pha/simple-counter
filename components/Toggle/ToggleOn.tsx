import {useToggle} from "./Toggle"

const ToggleOn = ({children}) => {
	const {on} = useToggle()
	return on ? children : null
}

export default ToggleOn
