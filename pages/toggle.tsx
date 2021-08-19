import { Switch } from "../components/Switch/Switch"
import {Toggle, ToggleOn, ToggleOff, ToggleButton} from "../components/Toggle"
import { useExternalToggle } from "../components/Toggle/Toggle"
import styles from "../styles/Toggle.module.css"

const TogglePage = () => {
	const {on,toggle} = useExternalToggle()

	return (
		<div className={styles.toggle_page}>
			<Toggle>
				<ToggleButton />
				<ToggleOff>Toggle is OFF</ToggleOff>
				<ToggleOn>Toggle is ON</ToggleOn>
			</Toggle>
			<Switch on={on} onClick={toggle} style={{marginTop:"2rem"}}/>
		</div>
	)
}

export default TogglePage
