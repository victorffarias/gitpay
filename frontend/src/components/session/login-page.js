import { styled, Card, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router'
import LoginForm from '../../containers/login-form';

import styles from '../styles/style'

const backgroundImage = require('../../images/login-background.jpg');
const logoGitpay = require('../../images/logo-without-symbol.png')

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

    padding: '60px',
    width: '450px',
    height: '775px',
})

const GitpayLogo = styled('img')({
    width: '60%',
    objectFit: 'scale-down',
    marginBottom: '20px'
})

const HeadingTypography = styled(Typography)(({theme}) => ({
    fontWeight: 700,
    fontSize: '2rem',
    color: theme.palette.text.primary 
}))

const SubheadingTypography = styled(Typography) (({ theme }) => ({
    fontWeight: 450,
    fontSize: '1.2rem',
    color: theme.palette.text.secondary
}))

class LoginPage extends Component {
    render() {
        return (
            <PageWrapper>
                <FormWrapper variant="elevation">
                    <GitpayLogo src={logoGitpay} />
                    <HeadingTypography variant="h1" noWrap>
                        <FormattedMessage id="account.register.create.headline" defaultMessage="Welcome!" />
                    </HeadingTypography>
                    <SubheadingTypography variant="h2" gutterBottom noWrap>
                        <FormattedMessage id="account.register.create.subheadline" defaultMessage="Create your account" />
                    </SubheadingTypography>
                    <LoginForm />
                </FormWrapper>
            </PageWrapper>
        )
    }
}

export default withRouter(withStyles(styles)(LoginPage))