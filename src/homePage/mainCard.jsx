import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form';
import { Button, Card, Elevation, Classes } from "@blueprintjs/core";

const InputBar = styled.input`
    width: 125px;
    margin-right:4px;
`

const BluePrintInput = (props) => (
    <InputBar className={Classes.INPUT} placeholder={props.placeholder}  type="text" {...props.input}  />
)

BluePrintInput.propTypes = {
    input: PropTypes.object,
    placeholder: PropTypes.string
}

class MainCard extends React.Component {
    render() {
        const { handleSubmit, placeholder, buttonText } = this.props
        return (
        <Card elevation={Elevation.TWO}>
            <form onSubmit={handleSubmit}>
                <h5>Card heading</h5>
                <p><Field name="itemInput" id="itemInput" placeholder={placeholder} component={BluePrintInput} /></p>
                <p><Button type="submit">{buttonText}</Button></p>
            </form>
        </Card>
        )
    }
}
MainCard.defaultProps = {
    handleSubmit: () => {},
    placeholder: "Type Here",
    buttonText:  "SubMit"
}
MainCard.propTypes = {
    handleSubmit: PropTypes.func,
    placeholder: PropTypes.string,
    buttonText: PropTypes.string
}

export default reduxForm()(MainCard)