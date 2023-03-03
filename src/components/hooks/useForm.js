import { useState } from 'react'

export const useForm = (initialState = {}) => {
	const [formValues, setFormValues] = useState(initialState)

	const reset = () => {
		setFormValues(initialState)
	}

	const handleInputChange = e => {
		const { name, value } = e.target

		setFormValues(prevFormValues => ({
			...prevFormValues,
			[name]: value,
		}))
	}

	return [formValues, handleInputChange, reset]
}
