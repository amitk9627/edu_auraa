import React from "react";

const ratings = [
  { stars: 5, count: 1768 },
  { stars: 4, count: 491 },
  { stars: 3, count: 123 },
  { stars: 2, count: 49 },
  { stars: 1, count: 25 },
];

const totalReviews = ratings.reduce((sum, rating) => sum + rating.count, 0);

const ReviewsSection = () => {
  return (
    <div className="bg-white shadow p-6 rounded-lg max-w-4xl mx-auto">
      <div>
        <h2 className="text-lg font-semibold text-gray-700">
          Overall Rating Summary
        </h2>

        <div className="flex items-center gap-2 mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-6 h-6 ${
                star <= 4 ? "text-gray-700" : "text-gray-400"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.382-2.46a1 1 0 00-1.176 0l-3.382 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.049 9.402c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.975z" />
            </svg>
          ))}
          <span className="text-sm text-gray-500">(4.7 out of 5)</span>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          Based on {totalReviews.toLocaleString()} reviews
        </p>
      </div>
      <div>
        <div className="mt-4 space-y-2">
          {ratings.map((rating) => {
            const percentage = (rating.count / totalReviews) * 100;
            return (
              <div key={rating.stars} className="flex items-center gap-2">
                <div className="w-16 text-sm text-gray-600">
                  {rating.stars} Star{rating.stars > 1 ? "s" : ""}
                </div>
                <div className="flex-1 h-3 bg-gray-200 rounded">
                  <div
                    className="h-3 bg-gray-700 rounded"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="w-12 text-right text-sm text-gray-600">
                  {rating.count}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
