import { styled, Card } from '@material-ui/core'
import React, { Component } from 'react'
import { withRouter } from 'react-router'

const backgroundImage = require('../../images/login-background.jpg');
const logoGitpay = require('../../images/logo-complete.png')

const PageWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionX: '50%',
    backgroundPositionY: '100%',

    justifyContent: 'center',
    alignItems: 'center'
});

const FormWrapper = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    alignItems: 'center',

    padding: '30px',
    width: '550px',
    height: '875px',
})

const GitpayLogo = styled('img')({
    width: '80%',
    objectFit: 'scale-down'
    
})

class LoginPage extends Component {
    render() {
        return (
            <PageWrapper>
                <FormWrapper>
                    <GitpayLogo src={logoGitpay} />
                </FormWrapper>
            </PageWrapper>
        )
    }
}

export default withRouter(LoginPage)