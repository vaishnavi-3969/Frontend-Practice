// class Welcome extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div>
//           <h1>Meet the <i style={{ color: "SteelBlue", padding: "1px" }}>{this.props.name}</i></h1>
//         </div>
//       );
//     }
//   }

import '../App.css'
import React from 'react'

const Welcome = (props) => {
    return (
        <h1>Meet the <i style={{ color: "SteelBlue", padding: "1px" }}>{props.name}</i></h1>
    )
}

export default Welcome






