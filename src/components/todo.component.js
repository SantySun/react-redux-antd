import React from "react";
import { connect } from "react-redux";
import { List, Avatar } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

const mapStateToProps = state => {
  return { to_do: state.to_do };
};

// const ConnectedList = ({ to_do }) => (
//     <ul>
//         {to_do.map(el => (
//             <li key={el}>{el}</li>
//         ))}
//     </ul>
// );

class ConnectedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }
  componentDidMount() {
    this.props.to_do.map(t => t = ({ title: t }))
  }
  render() {
    return (
      <div className="border container mt-5">
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
      </div>
    );
  }
}

const ToDoList = connect(mapStateToProps)(ConnectedList);

export default ToDoList;