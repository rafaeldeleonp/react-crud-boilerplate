import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { connect as RConnect } from 'react-refetch';
import flow from 'lodash/flow';
import { Link } from 'react-router-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Panel from '../../commons/components/Panel';
import { Email, Password, Briefcase } from '../../commons/components/Svg';
import { loginSuccess, loginError } from './redux/actions';
import Form from '../../commons/components/Form';
import './style.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps = (nextProps) => {
    if (!nextProps.loginResponse.pending && nextProps.loginResponse.fulfilled &&
      !nextProps.data.isAuthenticated) {
      const { value } = nextProps.loginResponse;

      if (value) {
        const { token } = nextProps.loginResponse.value;
        localStorage.setItem('token', token);
        this.props.loginSuccess(token);
        window.location.replace('/');
      }
    } else if (!nextProps.loginResponse.pending && nextProps.loginResponse.rejected &&
      !nextProps.data.error) {
      this.props.loginError(nextProps.loginResponse.reason.message);
    }
  }

  getExtraFooter = () => (
    <Row className="login-account-message">
      <span className="login-no-account-message">No eres miembro?</span>
      <Link className="login-sign-up-message" to="/signup" href="/signup">Registrate ahora</Link>
    </Row>
  )

  handleSubmit = (values) => {
    const { username, password, companyIdentification } = values;
    const data = {
      username,
      password,
      companyIdentification,
    };

    this.props.submit(data);
  }

  render() {
    return (
      <div className="login">
        <Grid className="login-container">
          <Row className="login-container-row">
            <Panel
              className="login-panel"
              header="Iniciar Sesi&oacute;n"
            >
              <Form
                theme={Form.Themes.Inline}
                onSubmit={this.handleSubmit}
                primary={{
                  className: 'login-button',
                  btnStyle: 'primary',
                  text: 'Iniciar Sesion',
                }}
              >
                <Form.Text
                  name="username"
                  type="text"
                  placeholder="Usuario"
                  icon={<Email />}
                  is-required
                />
                <Form.Text
                  name="password"
                  type="password"
                  placeholder="Contrase&ntilde;a"
                  icon={<Password />}
                  is-required
                />
                <Form.Text
                  name="companyIdentification"
                  type="text"
                  placeholder="Compa&ntilde;&iacute;a"
                  icon={<Briefcase />}
                  is-required
                />
              </Form >
            </Panel>
          </Row>
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  data: PropTypes.object,
  loginResponse: PropTypes.object,
  loginSuccess: PropTypes.func.isRequired,
  loginError: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

Login.defaultProps = {
  data: {},
  loginResponse: {},
};

const loginConnect = connect(createSelector(
  state => state.login,
  login => ({ data: login.toJS() }),
), {
  loginSuccess, loginError,
});

const login = RConnect(() => ({
  submit: data => ({
    loginResponse: {
      url: `${__API__}/jwt/auth`,
      method: 'POST',
      body: JSON.stringify(data),
    },
  }),
}));

export default flow(
  loginConnect,
  login,
)(Login);
