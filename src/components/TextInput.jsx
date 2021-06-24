function TextInput({ children, ...props }) {
	return (
		<label>
			<input type="text" {...props} />
			{children}
		</label>
	)
}

export default TextInput
