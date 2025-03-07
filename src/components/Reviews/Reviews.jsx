import React from "react";
import "./Reviews.css";

const Reviews = () => {
  const testimonials = [
    {
      text: "Amazing food, a different concept the ambience is just on point, loved their shakes, hazelnut shake is a must have and the staff is also friendly!",
      author: "Vipul Shah",
      rating: 5,
    },
    {
      text: "Loved it!! Pizza cones and the hazel shake my new fav! A must visit for every foodie lover. Ambiance and food a perfect combo at krusty cone!!!",
      author: "Jitendra Jain",
      rating: 5,
    },
    {
      text: "Amazing and cute lil place!! Ferrero Rocher shake was simply awesome. Had Jalapeno and olive creme cheese cone served with salted fries. You have to keep ur stomach half empty for this cheesy fun!! A must visit!",
      author: "Rakhi Sonkuare",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="review-title">
          <h1>Testimonials</h1>
          <div className="underline"></div>
        </div>

        <div className="review-grid">
          {testimonials.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-content">
                <div className="stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="review-text">{review.text}</p>
                <div className="review-author">- {review.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

/*import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <div id="reviews" className="container">
        <div className="review-title">
          <h1>TESTIMONIALS</h1>
        </div>
        <div className="review-sections">
          <div className="review-left">
            <h3>
              Amazing food , a different concept the ambience is just on point ,
              loved their shakes , hazelnut shake is a must have and the staff
              is also friendly !. - Vipul Shah
            </h3>
          </div>
          <div className="review-right">
            <h3>
              Loved it!! Just amazing 😊😍😍😍 Pizza cones and the hazel shake
              my new fav😍💕💕 A must visit for every foodie lover. Ambiance and
              food a perfect combo at krusty cone!!!❤️❤️. - Jitendra Jain
            </h3>
          </div>
          <div className="review-mid">
            <h3>
              Amazing and cute lil place!! I tried Ferrero Rocher shake was
              simply awesome. Also had Jalapeno and olive creme cheese cone
              served with salted fries and trust me you have to keep ur stomach
              half empty for this cheesy fun!! A must visit🤩!!. - Rakhi
              Sonkuare
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reviews;*/
