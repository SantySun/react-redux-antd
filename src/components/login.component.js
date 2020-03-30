import React, { Component } from 'react';
import { Form, Input, Button, Modal } from 'antd';
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
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.state = { wrongCredential: false };
  }
  onFinish(values) {
    if (users[values.username]) {
      if (users[values.username]["password"] === values.password) {
        const userInfo = { username: values.username, to_do: users[values.username]["to_do"] }
        this.props.userLogin(userInfo);
      }
      else {
        // alert("Invalid password!");
        this.setState({ wrongCredential: true })
      }
    }
    else {
      // alert("Invalid user name!");
      this.setState({ wrongCredential: true })
    }
  }
  onFinishFailed(error) {
    console.log(error);
  }

  handleOk = e => {
    this.setState({
      wrongCredential: false,
    });
  };

  handleCancel = e => {
    this.setState({
      wrongCredential: false,
    });
  };


  render() {
    return (
      <div className="container border mt-5">
        <Form
          id="loginForm"
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
        <Modal
          title="Attention: Wrong Credential!"
          visible={this.state.wrongCredential}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>You have entered wrong Username or Password!</p>
        </Modal>
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