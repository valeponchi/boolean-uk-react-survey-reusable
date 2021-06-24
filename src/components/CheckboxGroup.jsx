import Checkbox from './Checkbox'

//OPTIONS is going to be allOptions.features or allOptions.timeSpent
// const allOptions = {
// 	features: [
// 		{ value: 'colour', text: "It's yellow!" },
// 		{ value: 'sound', text: 'It squeaks!' },
// 		{ value: 'logo', text: 'It has a logo!' },
// 		{ value: 'size', text: 'Its big!' },
// 	],
// 	timeSpent: [
// 		{ value: 'swimming', text: 'Swimming' },
// 		{ value: 'bathing', text: 'Bathing' },
// 		{ value: 'chatting', text: 'Chatting' },
// 	],
// 	ratings: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }],
// }

//SELECTEDOPTIONS is coming from state, what the user is typing, called ANSWERS (an OBJ)
//it looks like:
// const ANSWER_EXAMPLE = {
//   username: 'Nicolas',
//   email: 'nico@nico.las',
//   logo: '4',
//   colour: '2',
//   consistency: '3',
//   timeSpent: ['swimming', 'chatting'],
//   review: 'I love my rubber ducky! ❤️',
//   bestFeatures: ['colour', 'size'],
//   worstFeatures: ['sound']
// }

function CheckboxGroup({ name, onChange, options, selectedOptions = [] }) {
	return (
		<ul className={name}>
			{options.map(option => (
				<li key={`${name}-${option.value}`}>
					<Checkbox
						key={`${name}-${option.value}`}
						name={name}
						value={option.value}
						onChange={onChange}
						checked={selectedOptions.includes(option.value)}>
						{option.text}
					</Checkbox>
				</li>
			))}
		</ul>
	)
}

export default CheckboxGroup
