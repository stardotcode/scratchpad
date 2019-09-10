import React from 'react';

class SocialCard extends React.Component {
  render() {
    const { firstName, lastName, email, image } = this.props;
    return (
      <section className="social-card">
        <h2>
          {firstName} {lastName}
          <small>{email}</small>
        </h2>
        <img src={image} alt="" />
      </section>
    );
  }
}

export default SocialCard;
