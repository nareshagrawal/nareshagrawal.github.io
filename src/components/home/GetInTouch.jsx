import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center" id="contact">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}, <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
  );
};

export default GetInTouch;


//------------------Calendly Integration-------------------
// import React from "react";

// class GetInTouch extends React.Component {
//   componentDidMount() {
//     const head = document.querySelector('head');
//     const script = document.createElement('script');
//     script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
//     head.appendChild(script);
//   }

//   componentWillUnmount() {
//   }

//   render() {
//     return (
//       <div>
//         <h2 className="display-4 pb-3 text-center" id="contact">{this.props.heading}</h2>
//         <p className="lead text-center pb-3">
//             {this.props.message}, <a href={`mailto:${this.props.email}`}>{this.props.email}</a>.
//         </p>
//         <div>
//           <div id="schedule_form">
//             <div
//               className="calendly-inline-widget"
//               data-url="https://calendly.com/nareshagrawal/30min"
//               style={{ minWidth: '320px', height: '600px' }} 
//             />       
//           </div>
//         </div>
//       </div>
//     );    
//   }
// }

// export default GetInTouch;