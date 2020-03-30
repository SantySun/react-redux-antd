import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { userLogin } from '../actions/index';
import { connect } from "react-redux";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function mapDispatchToProps(dispatch) {
  return {
    userLogin: userinfo => dispatch(userLogin(userinfo))
  };
}
const mapStateToProps = state => {
  return { to_do: state.to_do };
};

class login extends Component {
  constructor(props) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
  }
  onFinish(values) {
    this.props.userLogin(values);
    if (!this.props.to_do.length) alert("Invalid username or password!");
  }
  onFinishFailed(error) {
    console.log(error);
  }
  render() {
    return (
      <div className="container border mt-5">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            className="mt-3 mx-auto"
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
        </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(login);

export default Login;