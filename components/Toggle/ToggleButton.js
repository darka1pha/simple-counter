import {Switch} from "../Switch/Switch"
import {useToggle} from "./Toggle"

const ToggleButton = () => {
	const {on, toggle} = useToggle()
	return <Switch on={on} onClick={toggle} />
}

export default ToggleButton
