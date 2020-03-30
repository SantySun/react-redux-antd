import React from "react";
import { connect } from "react-redux";

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
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <ul>
        {
          this.props.to_do.map(el => (
            <li key={el}>{el}</li>
          ))
        }
      </ul>
    );
  }
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;