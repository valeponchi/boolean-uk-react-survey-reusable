import { useState } from 'react'
import CheckboxGroup from './CheckboxGroup'
import RadioGroup from './RadioGroup'

const initialFormState = {
  username: '',
  email: '',
  logo: '',
  colour: '',
  consistency: '',
  timeSpent: [],
  review: '',
  bestFeatures: [],
  worstFeatures: []
}

const ANSWER_EXAMPLE = {
  username: 'Nicolas',
  email: 'nico@nico.las',
  logo: '4',
  colour: '2',
  consistency: '3',
  timeSpent: ['swimming', 'chatting'],
  review: 'I love my rubber ducky! ❤️',
  bestFeatures: ['colour', 'size'],
  worstFeatures: ['sound']
}

const allOptions = {
  features: [
    { value: 'colour', text: "It's yellow!" },
    { value: 'sound', text: 'It squeaks!' },
    { value: 'logo', text: 'It has a logo!' },
    { value: 'size', text: 'Its big!' }
  ],
  timeSpent: [
    { value: 'swimming', text: 'Swimming' },
    { value: 'bathing', text: 'Bathing' },
    { value: 'chatting', text: 'Chatting' }
  ],
  ratings: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }]
}

function Form(props) {
  const [answers, setAnswers] = useState({
    username: '',
    email: '',
    logo: '4',
    colour: '2',
    consistency: '2',
    timeSpent: ['bathing', 'noTime'],
    review: '',
    bestFeatures: [],
    worstFeatures: []
  })

  function handleSubmit(event) {
    event.preventDefault()
    props.addAnswer(answers)
    setAnswers(initialFormState)
  }

  function handleChange(event) {
    setAnswers({ ...answers, [event.target.name]: event.target.value })
  }

  function handleCheckboxGroupChange(event) {
    const updatedArray = event.target.checked
      ? [...answers[event.target.name], event.target.value]
      : answers[event.target.name].filter(feature => feature !== event.target.value)

    setAnswers({ ...answers, [event.target.name]: updatedArray })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group">
        <h3>What would you say that are the best features of your rubber duck?</h3>
        <CheckboxGroup
          key="bestFeatures"
          name="bestFeatures"
          onChange={handleCheckboxGroupChange}
          options={allOptions.features}
          selectedOptions={answers.bestFeatures}
        />
      </div>
      <div className="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        <CheckboxGroup
          key="worstFeatures"
          name="worstFeatures"
          onChange={handleCheckboxGroupChange}
          options={allOptions.features}
          selectedOptions={answers.worstFeatures}
        />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        <RadioGroup
          key="consistency"
          name="consistency"
          onChange={handleChange}
          selected={answers.consistency}
          options={allOptions.ratings}
        />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioGroup
          key="colour"
          name="colour"
          onChange={handleChange}
          selected={answers.colour}
          options={allOptions.ratings}
        />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        <RadioGroup
          key="logo"
          name="logo"
          onChange={handleChange}
          selected={answers.logo}
          options={allOptions.ratings}
        />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <CheckboxGroup
          key="timeSpent"
          name="timeSpent"
          onChange={handleCheckboxGroupChange}
          options={allOptions.timeSpent}
          selectedOptions={answers.timeSpent}
        />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={answers.review}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={answers.username}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" onChange={handleChange} value={answers.email} />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  )
}

export default Form
