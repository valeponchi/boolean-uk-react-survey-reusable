function Textarea({ children, ...props }) {
	return (
		<label>
			<input type="textarea" {...props} />
			{children}
		</label>
	)
}

export default Textarea
