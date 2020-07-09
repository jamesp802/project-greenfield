// import React from 'react';

// class ReviewForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       summary: '',
//       body: '',
//       recommend: null,
//       nickname: '',
//       email: '',
//       characteristics: {},
//     };
//     this.validateReview = this.validateReview.bind(this);
//   }

//   validateReview() {
//     if (
//       this.state.rating === '' ||
//       this.state.recommend === null ||
//       this.state.characteristics === {} ||
//       this.state.body === '' ||
//       this.state.nickname === '' ||
//       this.state.email === '' ||
//       !validateEmail(this.state.email)
//     ) {
//       alert();
//     } else {
//       console.log('hello!!!');
//     }
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={(e) => this.handleSubmit(e)}>
//           <div>
//             <br />
//             <label>1. Overall rating:* </label>
//             <br />
//             {/* STARS RATINGS */}
//             <Ratings
//               rating={this.props.rating}
//               widgetRatedColors="black"
//               changeRating={this.props.changeRating}
//             >
//               <Ratings.Widget widgetDimension="15px" />
//               <Ratings.Widget widgetDimension="15px" />
//               <Ratings.Widget widgetDimension="15px" />
//               <Ratings.Widget widgetDimension="15px" />
//               <Ratings.Widget widgetDimension="15px" />
//             </Ratings>
//             <span style={{ display: 'inline-block', marginLeft: '25px' }}>
//               {this.props.ratingShow ? (
//                 <p>{this.props.ratingDefiniton}</p>
//               ) : (
//                 <p></p>
//               )}
//             </span>
//             {/* THIS IS RECOMMENDATION */}
//             <div className="checkbox-inline">
//               <br />
//               <p>2. Do you recommend this product?*</p>
//               <label>
//                 <input type="radio" name="radiobutton" />
//                 Yes
//               </label>
//             </div>
//             <div className="radio">
//               <label>
//                 <input type="radio" name="radiobutton" />
//                 No
//               </label>
//             </div>
//             {/* THESE ARE CHARACTERISTICS */}
//             <div>
//               <p>3. Select Characteristics Ratings*</p>
//               {['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'].map(
//                 (char, i) => {
//                   return (
//                     <div key={i}>
//                       <p style={{ textDecoration: 'underline' }}>{char}</p>
//                       <div className="char-select">
//                         {/* <Radio name="groupOptions">Option 1</Radio>
//                         <Radio name="groupOptions">Option 2</Radio>
//                         <Radio name="groupOptions">Option 3</Radio> */}
//                         <label>1</label>
//                         <input type="checkbox" name="checkboxbutton" />
//                         <label>2</label>
//                         <input type="checkbox" name="checkboxbutton" />
//                         <label>3</label>
//                         <input type="checkbox" name="checkboxbutton" />
//                         <label>4</label>
//                         <input type="checkbox" name="checkboxbutton" />
//                         <label>5</label>
//                         <input type="checkbox" name="checkboxbutton" />
//                       </div>
//                     </div>
//                   );
//                 }
//               )}
//             </div>
//             <br />
//             {/*THIS IS REVIEW SUMMARY*/}{' '}
//             <div>
//               <p>4. Review Summary:</p>
//               <textarea
//                 maxLength="60"
//                 placeholder="Example: Best purchase ever!"
//               ></textarea>
//             </div>
//             {/* REVIEW BODY */}
//             <div>
//               <p>5. Review Body:* </p>
//               <textarea
//                 maxLength="1000"
//                 minLength="50"
//                 rows="4"
//                 cols="50"
//                 placeholder="Why did you like the product or not?"
//               ></textarea>
//             </div>
//             <br />
//             {/* photo upload */}
//             <div>
//               {/* <Form.File
//                   id="exampleFormControlFile1"
//                   label="Upload up to 5 pictures! "
//                 /> */}
//               <input type="file" onChange={this.handlePhotoChange} />
//               <img
//                 className="img-thumbnail"
//                 style={{
//                   width: '50px',
//                   height: '50px',
//                   display: 'inline-block',
//                 }}
//                 src={this.state.file}
//               />
//             </div>
//             <br />
//             {/* nickname */}
//             <div>
//               <p>6. Nickname:*</p>
//               <textarea
//                 maxLength="60"
//                 placeholder="Example: jackson11!"
//               ></textarea>
//               <span style={{ display: 'block', fontSize: '12px' }}>
//                 For privacy reasons, do not use your full name or email address
//               </span>
//             </div>
//             <br />
//             {/* email */}
//             <div>
//               <p>7. Email:*</p>
//               <textarea
//                 maxLength="60"
//                 placeholder="Example: jackson11@email.com"
//               ></textarea>
//               <span style={{ display: 'block', fontSize: '12px' }}>
//                 For authentication reasons, you will not be emailed
//               </span>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
/* 
import React from 'react';

class FormsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: 'Mark',
      lname: 'Otto',
      email: '',
      city: '',
      state: '',
      zip: '',
    };
  }

  submitHandler(event) {
    event.preventDefault();
    event.target.className += ' was-validated';
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <div>
            <div>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                First name
              </label>
              <input
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="First name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Last name
              </label>
              <input
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Email
              </label>
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
          </div>

          <div>
            <div md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                City
              </label>
              <input
                value={this.state.city}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="city"
                placeholder="City"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                State
              </label>
              <input
                value={this.state.state}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="state"
                placeholder="State"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Zip
              </label>
              <input
                value={this.state.zip}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="zip"
                placeholder="Zip"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div md="4" className="mb-3">
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div color="primary" type="submit">
            Submit Form
          </div>
        </form>
      </div>
    );
  }
}

export default FormsPage;
 */
