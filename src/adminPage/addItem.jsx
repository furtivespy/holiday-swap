import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form';
import { Button} from '@blueprintjs/core'

const FullDiv = styled.div`
    width: 100%;
    margin-top:2px;
    padding: 2px;
    display: flex;
    align-items: center;    
`

const InputBar = styled.input`
    width: 125px;
    margin-right:4px;
`

const BluePrintInput = (props) => (
    <InputBar className="pt-input" placeholder={props.placeholder}  type="text" {...props.input}  />
)

const AddItem = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <FullDiv>
                <Field name="itemInput" id="itemInput" placeholder={props.placeholder} component={BluePrintInput} />
                <Button type="submit">Add</Button>
            </FullDiv>
        </form>
    )
}

BluePrintInput.propTypes = {
    input: PropTypes.object,
    placeholder: PropTypes.string
}
AddItem.propTypes = {
    handleSubmit: PropTypes.func,
    placeholder: PropTypes.string
}


export default reduxForm()(AddItem)