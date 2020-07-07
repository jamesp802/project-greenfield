import React from "react";

const Description = ({ description, features, slogan }) => {
  if (description && features) {
    return (
      <div className="description-features-container container">
        <div className="description-container">
          <span>
          <h1 className='description-slogan'>{slogan}</h1>
          <p className="description-text">{description}</p>
          </span>
          <ul className="features-list">
            {features.map((feature, i) => {
              return (
                <li className="features-item" key={i}>
                  <p>{feature.feature}</p>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="features-container"> */}
      </div>
    );
  } else {
    return null;
  }
};

export default Description;
