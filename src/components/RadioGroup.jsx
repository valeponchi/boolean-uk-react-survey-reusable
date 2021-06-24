import Radio from './Radio'

function RadioGroup({ name, onChange, selected, options = [] }) {
  return (
    <ul>
      {options.map(option => (
        <li>
          <Radio
            id={`${name}${option.value}`}
            name={name}
            value={option.value}
            onChange={onChange}
            checked={selected === option.value}
          >
            {option.value}
          </Radio>
        </li>
      ))}
    </ul>
  )
}

export default RadioGroup
