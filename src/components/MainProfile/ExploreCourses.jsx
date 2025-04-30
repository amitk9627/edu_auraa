import React from "react";

const ExploreCourses = () => {
  const courses = [
    {
      id: 1,
      title: "IIT Foundation Course",
      category: "IIT",
      location: "Delhi",
      price: "₹40K–₹1L",
      discount: "save 40%",
      rating: 4.7,
    },
    {
      id: 2,
      title: "JEE Main/Advanced Coaching",
      category: "JEE",
      location: "Delhi",
      price: "₹70K–₹1L",
      discount: "save 40%",
      rating: 4.7,
    },
    {
      id: 3,
      title: "NEET Crash Course",
      category: "NEET",
      location: "Delhi",
      price: "₹40K–₹1L",
      discount: "save 40%",
      rating: 4.7,
    },
    {
      id: 4,
      title: "IIT Foundation Program",
      category: "IIT",
      location: "Delhi",
      price: "₹40K–₹1L",
      discount: "save 40%",
      rating: 4.7,
    },
    {
      id: 5,
      title: "JEE Main/Advanced Coaching",
      category: "JEE",
      location: "Delhi",
      price: "₹70K–₹1L",
      discount: "save 40%",
      rating: 4.7,
    },
    {
      id: 6,
      title: "NEET Crash Course",
      category: "NEET",
      location: "Delhi",
      price: "₹40K–₹1L",
      discount: "save 40%",
      rating: 4.7,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Explore More Courses from This Institute
          </h2>
          <p className="text-sm text-gray-500">
            From national-level entrance exams to foundation courses – find the
            right prep for your academic goals.
          </p>
        </div>
        <a
          href="#"
          className="text-sm text-blue-600 font-medium hover:underline"
        >
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded border-none p-4">
            <div className="relative bg-gray-200 h-36 rounded mb-3 flex items-center justify-center">
              <span className="absolute top-2 left-2 bg-gray-300 text-xs px-2 py-0.5 rounded">
                Hybrid
              </span>
              <span className="absolute top-2 right-2 text-gray-600 text-xl">
                ♡
              </span>
              <span className="text-gray-500 text-sm">Image</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1">
              {course.title}
            </h3>
            <div className="flex justify-between">
              <p className="text-xs text-gray-500">{course.category}</p>
              <p className="text-sm text-gray-700 mt-1">📍 {course.location}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm mt-1">
                {course.price}{" "}
                <span className="text-xs text-[#333] ml-1">
                  ({course.discount})
                </span>
              </p>
              <p className="text-sm mt-1">⭐ {course.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCourses;
