import React from "react";

const Description = ({ description, features, slogan }) => {
  if (description && features) {
    return (
      <div className="description-features-container container">
        <div className="description-container">
          <div>
            <h1 className="description-slogan">{slogan}</h1>
            <p>{description}</p>
            <img className='social-media-icon' src='https://yourwriter.net/wp-content/uploads/2013/09/socialicons.jpg'/>
          </div>
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
      </div>
    );
  } else {
    return null;
  }
};

export default Description;
