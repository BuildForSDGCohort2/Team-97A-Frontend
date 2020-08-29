import React from "react";
import "./faqs.css";
import searchIcon from "../../images/search-solid.svg";

class FAQs extends React.Component {
  state = { data: { searchKeyWord: "" } };

  handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const data = { ...this.state.data };
    data[fieldName] = fieldValue;
    this.setState({ data });
    console.log(data);
  };

  render() {
    return (
      <div className="faqs">
        <div className="faq-top-area">
          <h1>We're here to help.</h1>
          <h4>Your shipments are safe with us !</h4>
          <span>
            <input
              onChange={this.handleChange}
              type="text"
              name="search"
              placeholder="Search .."
              style={{ backgroundImage: `url(${searchIcon})` }}
            />
          </span>
        </div>
        <div className="faq-answers">
          <div className="faq-basics">
            <h4>The Basics</h4>
            <ul>
              <li>
                <a href="#how">How to I make payment ?</a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora in cumque fugit, expedita dicta velit repudiandae
                  consequatur quibusdam aut magni accusamus voluptatibus iure
                  vero asperiores voluptates, optio doloremque veritatis ut.
                </p>
              </li>
              <li>
                <a href="#how">How do I become a Carrier</a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora in cumque fugit, expedita dicta velit repudiandae
                  consequatur quibusdam aut magni accusamus voluptatibus iure
                  vero asperiores voluptates, optio doloremque veritatis ut.
                </p>
              </li>
            </ul>
          </div>
          <div className="faq-other-issues">
            <h4>Something's Wrong</h4>
            <ul>
              <li>
                <a href="#how">How to I make payment ?</a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora in cumque fugit, expedita dicta velit repudiandae
                  consequatur quibusdam aut magni accusamus voluptatibus iure
                  vero asperiores voluptates, optio doloremque veritatis ut.
                </p>
              </li>
              <li>
                <a href="#how">How do I become a Carrier</a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora in cumque fugit, expedita dicta velit repudiandae
                  consequatur quibusdam aut magni accusamus voluptatibus iure
                  vero asperiores voluptates, optio doloremque veritatis ut.
                </p>
              </li>
            </ul>
          </div>
          <div className="faq-safety-standards">
            <h4>Safety and Standards </h4>
            <ul>
              <li>
                <a href="#how">How to I make payment ?</a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora in cumque fugit, expedita dicta velit repudiandae
                  consequatur quibusdam aut magni accusamus voluptatibus iure
                  vero asperiores voluptates, optio doloremque veritatis ut.
                </p>
              </li>
              <li>
                <a href="#how">How do I become a Carrier</a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora in cumque fugit, expedita dicta velit repudiandae
                  consequatur quibusdam aut magni accusamus voluptatibus iure
                  vero asperiores voluptates, optio doloremque veritatis ut.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQs;
