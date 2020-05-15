import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

const UserForm = () => {
  const [step, setStep] = useState(1)
  const [detail, setDetail] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  })

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleChange = (e) => {
    console.log("e", e.target)
    const { name, value } = e.target
    console.log("value", detail)
    setDetail(prevState => ({ ...prevState, [name]: value }));
  }

  const renderOutput = (step) => {
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values={detail}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={detail}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={nextStep}
            prevStep={prevStep}
            values={detail}
          />
        );
      case 4:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }

  return (
    <>
      {renderOutput(step)}
    </>
  )
}

export default UserForm
