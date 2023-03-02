import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
	const navigate = useNavigate()

	const handleLogin = () => {
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
