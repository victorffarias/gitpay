import React, { Component } from 'react';
import { withRouter } from 'react-router'
import {
    Button,
    styled,
    TextField
} from '@material-ui/core'

const Input = styled(TextField)({
    margin: '10px'
})

const HalfInput = styled(Input)({

})

const RowWrapper = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'

})


class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    }

    render() {
        return (
            <form>
                <RowWrapper>
                    <Input
                        name="name"
                        onChange={this.handleChange('name')}
                        label='Name'
                        variant="outlined"
                    />
                    <Input
                        name="lastname"
                        onChange={this.handleChange('lastname')}
                        label="Lastname"
                        variant="outlined"
                    />
                </RowWrapper>
                <RowWrapper>
                    <Input
                        name="email"
                        onChange={this.handleChange('email')}
                        fullWidth
                        label="E-mail"
                        variant="outlined"
                    />
                </RowWrapper>
                <RowWrapper>
                    <Input
                        name="password"
                        onChange={this.handleChange('password')}
                        fullWidth
                        type="password"
                        label="Password"
                        variant="outlined"
                    />
                </RowWrapper>
                <RowWrapper>
                    <Input
                        name="confirm_password"
                        onChange={this.handleChange('confirmPassword')}
                        fullWidth
                        type="password"
                        label="Confirm password"
                        variant="outlined"
                    />
                </RowWrapper>

            </form>
        );
    }
}

export default withRouter(LoginForm)