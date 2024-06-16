import React from 'react'
import { Checkbox, Container, Inner, Label, Switch, ToggleSwitchWrapper } from '../styles/SwiTchButton.styled'

const ToggleSwitch = ({label}) => {
  return (
    <Container>
        {label}{" "}
        <ToggleSwitchWrapper>
            <Checkbox name={label} id={label}/>
            <Label htmlFor={label}/>
            <Inner/>
            <Switch/>
        </ToggleSwitchWrapper>
    </Container>
  )
}

export default ToggleSwitch
