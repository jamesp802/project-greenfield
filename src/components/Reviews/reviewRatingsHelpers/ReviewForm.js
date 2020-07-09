import React from 'react';
import Ratings from 'react-ratings-declarative';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      summary: '',
      body: '',
      recommend: null,
      name: '',
      email: '',
      characteristics: {},
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <br />
            <label>1. Overall rating:* </label>
            <br />
            {/* STARS RATINGS */}
            <Ratings
              rating={this.state.rating}
              widgetRatedColors="black"
              changeRating={this.changeRating}
            >
              <Ratings.Widget widgetDimension="15px" />
              <Ratings.Widget widgetDimension="15px" />
              <Ratings.Widget widgetDimension="15px" />
              <Ratings.Widget widgetDimension="15px" />
              <Ratings.Widget widgetDimension="15px" />
            </Ratings>
            <span style={{ display: 'inline-block', marginLeft: '25px' }}>
              {this.state.ratingShow ? (
                <p>{this.state.ratingDefiniton}</p>
              ) : (
                <p></p>
              )}
            </span>
            {/* THIS IS RECOMMENDATION */}
            <div className="checkbox-inline">
              <br />
              <p>2. Do you recommend this product?*</p>
              <label>
                <input type="radio" name="radiobutton" />
                Yes
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="radiobutton" />
                No
              </label>
            </div>
            {/* THESE ARE CHARACTERISTICS */}
            <div>
              <p>3. Select Characteristics Ratings*</p>
              {['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'].map(
                (char, i) => {
                  return (
                    <div key={i}>
                      <p style={{ textDecoration: 'underline' }}>{char}</p>
                      <div className="char-select">
                        {/* <Radio name="groupOptions">Option 1</Radio>
                        <Radio name="groupOptions">Option 2</Radio>
                        <Radio name="groupOptions">Option 3</Radio> */}
                        <label>1</label>
                        <input type="checkbox" name="checkboxbutton" />
                        <label>2</label>
                        <input type="checkbox" name="checkboxbutton" />
                        <label>3</label>
                        <input type="checkbox" name="checkboxbutton" />
                        <label>4</label>
                        <input type="checkbox" name="checkboxbutton" />
                        <label>5</label>
                        <input type="checkbox" name="checkboxbutton" />
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <br />
            {/*THIS IS REVIEW SUMMARY*/}{' '}
            <div>
              <p>4. Review Summary:</p>
              <textarea
                maxLength="60"
                placeholder="Example: Best purchase ever!"
              ></textarea>
            </div>
            {/* REVIEW BODY */}
            <div>
              <p>5. Review Body:* </p>
              <textarea
                maxLength="1000"
                minLength="50"
                rows="4"
                cols="50"
                placeholder="Why did you like the product or not?"
              ></textarea>
            </div>
            <br />
            {/* photo upload */}
            <div>
              {/* <Form.File
                  id="exampleFormControlFile1"
                  label="Upload up to 5 pictures! "
                /> */}
              <input type="file" onChange={this.handlePhotoChange} />
              <img
                className="img-thumbnail"
                style={{
                  width: '50px',
                  height: '50px',
                  display: 'inline-block',
                }}
                src={this.state.file}
              />
            </div>
            <br />
            {/* nickname */}
            <div>
              <p>6. Nickname:*</p>
              <textarea
                maxLength="60"
                placeholder="Example: jackson11!"
              ></textarea>
              <span style={{ display: 'block', fontSize: '12px' }}>
                For privacy reasons, do not use your full name or email address
              </span>
            </div>
            <br />
            {/* email */}
            <div>
              <p>7. Email:*</p>
              <textarea
                maxLength="60"
                placeholder="Example: jackson11@email.com"
              ></textarea>
              <span style={{ display: 'block', fontSize: '12px' }}>
                For authentication reasons, you will not be emailed
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
