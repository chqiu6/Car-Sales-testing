// import React from 'react';

// const AdditionalFeature = props => {
//   return (
//     <li>
//       {/* Add an onClick that will let you add a feature to your car */}
//       {/* onClick ={() => props.} */}
//       <button className="button">Add</button>
//       {props.feature.name} (+{props.feature.price})
//     </li>
//   );
// };

// export default AdditionalFeature;

import React from 'react';

const AdditionalFeature = props => {
  console.log("Props for additionalfeature check: ",props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick  = {()=>props.addFeatures(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;