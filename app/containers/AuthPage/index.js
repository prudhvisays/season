import React from 'react';
import { connect } from 'react-redux';
import AuthStyle from './AuthStyle';
import BackgrndStyle from './BackgrndStyle';
import AuthForm from '../../components/AuthForm';
import { loginRequest } from './actions';
import Logo from './logo.gif';

class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { formState } = this.props.data;
    return (
      <BackgrndStyle>
        <div className="ink-flex push-center">
          <AuthStyle className="all-50">
            <AuthForm data={formState} onSubmit={this.props.login} />
          </AuthStyle>
        </div>
      </BackgrndStyle>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => { dispatch(loginRequest({ username, password })); }
  };
}

function mapStateToProps(state) {
  const data = state.get('auth');
  return {
    data,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
