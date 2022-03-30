import React, { useState } from "react";

import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import orna from "./orna.jpg";
const FORM_ENDPOINT = "";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // if (submitted) {
  //   alert("Your file is being uploaded!");
  // }

  return (
    <section className="section">
      <p className="top">
        <p className="name">
          <h3>אורנה לויט</h3>
          <h5>פסיכולוגית ומנחת מיינדפולנס</h5>
          <h5>054-4510018</h5>
        </p>
        <p className="btns">
          <button className="btn ">אודות</button>
          <a href="#middle-place">
            <button className="btn">על הטיפול</button>
          </a>
          <a href="#end-place">
            <button className="btn">צור קשר</button>
          </a>
        </p>
        <p className="line"></p>
      </p>
      <p className="middle middle-one">
        <span>היי, אני אורנה לויט, פסיכולוגית ומנחת מיינדפולנס מוסמכת.</span>
        <br />
        בוגרת תואר שני בנוירופסיכולוגיה.
        <br /> וקורס הכשרת מנחי מיינדפולנס MBSR מטעם המרכז הבינתחומי הרצליה.{" "}
        <img className="orna-img" src={orna} alt="orna" />
      </p>
      <p className="middle" id="middle-place">
        <span>הטיפול הוא ייחודי ומועבר על ידי.</span>
        <br />
        בוגרת תואר שני בנוירופסיכולוגיה וקורס הכשרת מנחי מיינדפולנס MBSR מטעם
        המרכז הבינתחומי הרצליה.{" "}
      </p>
      <p className="middle big">
        <span>
          מטרות הסדנה: הפחתת מתח ושיעורי שחיקה. שיפור הרווחה הנפשית. הפחתת
          טעויות הנובעות מהטיות קשב ושיפור בטיחות החולים. רכישת יכולות לתקשורת
          אפקטיבית ואמפתית.
        </span>
        <br />
        <span>
          המפגשים מורכבים מתרגולי קשיבות, דיונים ותרגילים ספציפיים העוסקים
          במגוון נושאים הרלוונטיים לעולמם של הרופאים כגון: זיהוי מחשבות ודפוסים
          מנטליים אוטומטיים, פיתוח תקשורת קשובה ומתן תשומת לב להטיות קשב בזמן
          קבלת החלטות.
        </span>
        <br />
        בצל הקורונה אנו מציעים סדנה ב-ZOOM מועדי הקורס: 28.6.20, 5.7.20,
        12.7.20, 19.7.20, 26.7.20, 2.8.20, 9.8.20, 16.8.20 בין השעות 20:00-22:00
        <br />
        עלות למשתתף: 40 ₪ לחבר/ת הר"י ההשתתפות מותנית בעלות סמלית להבטחת
        השתתפותך היקף הסדנה: הסדנה כוללת 8 מפגשים בני שעתיים.
        ddddddddssssssssssssss
      </p>
      <p className=" imgs middle">
        <img className="img-item" src={img1} alt="img1" />
        <img className="img-item" src={img2} alt="img2" />
        <img className="img-item" src={img3} alt="img3" />
      </p>

      <p className="end" id="end-place">
        <p className="end-part">
          <form
            className="setup-form"
            // action={FORM_ENDPOINT}
            // onSubmit={handleSubmit}
            // method="POST"
            target="_blank"
          >
            <div className="form-control">
              <label htmlFor="name">name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="telphone">telphone</label>
              <input
                type="number"
                name="telphone"
                id="telphone"
                className="form-input"
                required
              />
            </div>
            <div className="form-control ">
              <label htmlFor="mesg">message</label>
              <input
                type="text"
                id="mesg"
                className="form-input"
                maxLength="24"
                required
                aria-invalid="false"
              />
            </div>
            <button type="submit" onClick={handleSubmit} className="submit-btn">
              submit
            </button>
            <h6 className={`${submitted ? "thankyou" : "thankyou-not"}`}>
              thank you!
            </h6>
          </form>
          <div
            class="elementor-element elementor-element-358e84a8 elementor-widget elementor-widget-google_maps"
            data-id="358e84a8"
            data-element_type="widget"
            data-widget_type="google_maps.default"
          >
            <div class="elementor-custom">
              <iframe
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.6224275842937!2d34.843092015486384!3d32.16048642247086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d481206422fe7%3A0x166240c30da43737!2sBen%20Yehuda%20St%2039%2C%20Hertsliya!5e0!3m2!1sen!2sil!4v1643478873505!5m2!1sen!2sil"
                title="הרצליה"
                aria-label="הרצליה"
              ></iframe>
            </div>
          </div>
        </p>
      </p>
      <h4> {"\u00A9"}Orna Levit</h4>
      <h4>054-4510018 , ornalevit@gmail.com </h4>
      <h4>Ben Yehuda St 39 , Hertsliya</h4>
    </section>
  );
};
export default App;
