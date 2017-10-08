import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Icon, Input, Button } from 'antd';
import * as firebase from 'firebase';
import * as NOTIFICATIONS from '../../services/notifications';

import './signup.css';

const FormItem = Form.Item;

class SignUpForm extends Component {
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
          .createUserWithEmailAndPassword(values.email, values.password)
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
      <div className="signup-container">
        <Card className="signup-card" title={'Sign Up'}>
          <Form onSubmit={this.handleSubmit} className="signup-form">
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
              <Button type="primary" htmlType="submit" className="signup-form-button" loading={loading}>
                Sign Up
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

const WrappedSignUpForm = Form.create()(SignUpForm);

export default WrappedSignUpForm;
