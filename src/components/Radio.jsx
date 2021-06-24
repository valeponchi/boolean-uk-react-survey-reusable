function Radio({ children, ...props }) {
  return (
    <>
      <input type="radio" {...props} />
      <label htmlFor={props.id}>{children}</label>
    </>
  )
}

export default Radio
