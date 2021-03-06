import React from "react";
import { connect } from "react-redux";
import { List, Avatar, Card } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

const mapStateToProps = state => {
  return { to_do: state.to_do };
};


class ConnectedList extends React.Component {
  componentDidMount() {
    this.props.to_do.map(t => t = ({ title: t }))
  }
  render() {
    return (
      <div className="container mt-5" style={{ width: "100%" }}>
        <Card title="Task List" className="container">
          <List
            itemLayout="horizontal"
            dataSource={this.props.to_do}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.jing.fm/clipimg/detail/135-1353096_simple-avatar-icon-person-icon-png-free-transparent.png" />}
                  title={item}
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    );
  }
}

const ToDoList = connect(mapStateToProps)(ConnectedList);

export default ToDoList;