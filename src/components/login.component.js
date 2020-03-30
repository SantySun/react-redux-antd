import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { userLogin } from '../actions/index';
import { connect } from "react-redux";
import users from '../users.json';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function mapDispatchToProps(dispatch) {
  return {
    userLogin: userinfo => dispatch(userLogin(userinfo))
  };
}
// const mapStateToProps = state => {
//   return { to_do: state.to_do };
// };

class login extends Component {
  constructor(props) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
  }
  onFinish(values) {
    if (users[values.username]) {
      if (users[values.username]["password"] === values.password) {
        const userInfo = { username: values.username, to_do: users[values.username]["to_do"] }
        this.props.userLogin(userInfo);
      }
      else {
        alert("Invalid password!");
      }
    }
    else {
      alert("Invalid user name!");
    }

  }
  onFinishFailed(error) {
    console.log(error);
  }
  render() {

    return (
      <div className="container border mt-5">
        <Form
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

          <Form.Item>
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
  // mapStateToProps,
  null,
  mapDispatchToProps
)(login);

export default Login;