import React, {createContext, useContext, useState} from "react"
import styles from "../../styles/Toggle.module.css"

const ToggleContext = createContext()
ToggleContext.displayName = "ToggleContext"

export const useExternalToggle = () => {
	const [on, setOn] = useState(false)

	const toggle = () => {
		setOn(!on)
	}
	return {on, toggle}
}

const Toggle = ({children}) => {

	const {on,toggle} = useExternalToggle()

	const value = {on, toggle}
	return (
		<ToggleContext.Provider value={value}>
			<div className={styles.toggle_container}>{children}</div>
		</ToggleContext.Provider>
	)
}

export const useToggle = () => {
	const contextValue = useContext(ToggleContext)
	if (!contextValue) {
		throw new Error("useToggle Hook  must be used in <Toggle />")
	}
	return contextValue
}

export default Toggle
