import React from 'react';

function Badge (props) {
    const {goalData, complete, onClick} = props;
    if (goalData.badge) {
      const badge = `badges/${goalData.badge}`
      return <div>
        <img src={badge} alt={"badge"} onClick={onClick} />
        {complete && <div className="check">✔︎</div>}
    </div>
    }
    return null;
}

export default Badge;
