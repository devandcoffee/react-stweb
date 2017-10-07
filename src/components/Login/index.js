import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Icon, Input, Button } from 'antd';
import * as firebase from 'firebase';
import * as NOTIFICATIONS from '../../services/notifications';

import './login.css';

const FormItem = Form.Item;

class LoginForm extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true })
    this.props.form.validateFields((err, values) => {
      if (!err) {
        firebase.auth()
          .signInWithEmailAndPassword(values.email, values.password)
          .then(() => {
            this.setState({ loading: false })
            this.props.handleSubmit();
          })
          .catch((error) => {
            this.setState({ loading: false })
            const errorCode = error.code;
            const errorMessage = error.message;
            NOTIFICATIONS.showNotification(NOTIFICATIONS.NOTIFY_ERROR, errorCode, errorMessage);
          });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading } = this.state;
    return (
      <div className="login-container">
        <Card className="login-card" title={'Login'}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                  type="email"
                  placeholder="Email"
                />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                Log in
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;
