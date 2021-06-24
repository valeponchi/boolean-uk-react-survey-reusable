function Checkbox({ children, ...props }) {
  return (
    <label>
      <input type="checkbox" {...props} />
      {children}
    </label>
  )
}

export default Checkbox
