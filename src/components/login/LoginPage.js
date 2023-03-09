import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'
import { types } from '../types/types'

export default function LoginPage() {
	const navigate = useNavigate()

	const { dispatch } = useContext(AuthContext)
	const handleLogin = () => {
		const action = {
			type: types.login,
			payload: {
				name: 'Jose Luis Colcha Conejo',
			},
		}

		dispatch(action)
		navigate('/marvel', {
			replace: true,
		})
	}

	return (
		<div>
			<h1>Login</h1>
			<hr />

			<button className='btn btn-primary' onClick={handleLogin}>
				Login
			</button>
		</div>
	)
}
