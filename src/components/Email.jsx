function Email({ children, ...props }) {
	return (
		<label>
			<input type="email" {...props} />
			{children}
		</label>
	)
}

export default Email
