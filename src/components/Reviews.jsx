import React, { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";

register();

export const ReviewForm = () => {
  const [review, setReview] = useState({
    user: "",
    rating: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic (e.g., API call)
    console.log(review);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md"
      >
        <h2 className="text-xl mb-4 font-bold">Write a Review</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="user">
            Name
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="user"
            placeholder="Your name"
            value={review.user}
            onChange={(e) => setReview({ ...review, user: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="rating">
            Rating
          </label>
          <input
            type="number"
            min="0"
            max="5"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rating"
            placeholder="Rate (0-5)"
            value={review.rating}
            onChange={(e) => setReview({ ...review, rating: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="comment">
            Comment
          </label>
          <textarea
            rows="4"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            placeholder="Write your review here..."
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export const ReviewCard = ({ review }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
    >
      <swiper-slide key={review.index}>
        <div className="max-w-sm mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-xl">{review.user}</div>
            <div className="bg-yellow-400 text-yellow-900 py-1 px-3 rounded-full">
              {review.rating}/5
            </div>
          </div>
          <div className="text-gray-500 text-sm mb-4">
            Reviewed on {review.date}
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      </swiper-slide>
    </swiper-container>
  );
};
