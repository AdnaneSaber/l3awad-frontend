"use client"
import { useState } from "react"

export function Blog() {
  // State to track active category
  const [activeCategory, setActiveCategory] = useState("Product Updates")

  // Blog post data
  const blogPosts = [
    {
      id: 1,
      category: "Product Updates",
      title: "Here is the title for this News",
      description: "Lorem ipsum dolor sit amet elit ut aliquam",
      isLarge: true,
    },
    {
      id: 2,
      category: "Product Updates",
      title: "Here is the title for this News",
      description: "Lorem ipsum dolor sit amet elit ut aliquam",
      isLarge: true,
    },
    {
      id: 3,
      category: "Product Updates",
      title: "Here is the title for this News",
      description:
        "We make every expression of Hero Spirits with precision and passion",
      isLarge: false,
    },
    {
      id: 4,
      category: "Engaging Articles",
      title: "Latest Industry Insights",
      description: "Exploring trends and innovations in our field",
      isLarge: false,
    },
    {
      id: 5,
      category: "Reflex Workflows",
      title: "Streamlining Your Processes",
      description: "How to optimize your workflow efficiency",
      isLarge: false,
    },
    {
      id: 6,
      category: "Artificial Intelligence",
      title: "AI in Modern Applications",
      description: "Implementing machine learning in everyday tools",
      isLarge: true,
    },
    {
      id: 7,
      category: "Artificial Intelligence",
      title: "Ethics in AI Development",
      description: "Responsible approaches to artificial intelligence",
      isLarge: false,
    },
    {
      id: 8,
      category: "Reflex Workflows",
      title: "Collaboration Best Practices",
      description: "Improving team productivity with Reflex",
      isLarge: false,
    },
  ]

  // Filter posts by active category
  const filteredPosts = blogPosts.filter(
    (post) => activeCategory === "All" || post.category === activeCategory
  )

  // Separate large and small posts
  const largePosts = filteredPosts.filter((post) => post.isLarge)
  const smallPosts = filteredPosts.filter((post) => !post.isLarge)

  // Available categories
  const categories = [
    "All",
    "Engaging Articles",
    "Product Updates",
    "Reflex Workflows",
    "Artificial Intelligence",
  ]

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="text-center mb-12">
          {/* Title */}
          <h2 className="mb-4 mt-6 text-3xl font-bold md:text-5xl">
            The latest and greatest news
          </h2>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet elit ut aliquam
          </p>

          {/* Category Navigation */}
          <div className="my-10 md:my-20 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 font-semibold rounded-full transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-black text-white shadow-md"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-6xl mx-auto">
          {/* Large Posts */}
          {largePosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {largePosts.map((post) => (
                <BlogItem key={post.id} post={post} isLarge={true} />
              ))}
            </div>
          )}

          {/* Small Posts */}
          {smallPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {smallPosts.map((post) => (
                <BlogItem key={post.id} post={post} isLarge={false} />
              ))}
            </div>
          )}

          {/* No posts message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold">No posts found</h3>
              <p className="text-gray-500 mt-2">
                Try selecting a different category
              </p>
            </div>
          )}

          {/* Button */}
          <div className="mt-10 md:mt-20 text-center">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Blog Item Component
function BlogItem({ post, isLarge }: any) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <div className={`relative ${isLarge ? "h-80" : "h-72"}`}>
        <img
          className={`w-full object-cover ${isLarge ? "h-80" : "h-72"}`}
          src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
          alt="Blog post"
        />
        <span className="absolute bottom-5 right-5 bg-gray-400 text-sm font-semibold px-2.5 py-2 rounded">
          {post.category}
        </span>
      </div>

      <div
        className={`p-4 flex flex-col flex-grow ${
          isLarge ? "justify-between" : ""
        }`}
      >
        <div>
          <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
          <p className={`${isLarge ? "" : "text-gray-500"}`}>
            {post.description}
          </p>
        </div>

        {isLarge && (
          <div className="mt-4 flex justify-end">
            <button className="cursor-pointer h-14 w-14">
              <svg
                className="h-14 w-14"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.0001 52.5001C42.4265 52.5001 52.5001 42.4265 52.5001 30.0001C52.5001 17.5736 42.4265 7.5 30.0001 7.5C17.5736 7.5 7.5 17.5736 7.5 30.0001C7.5 42.4265 17.5736 52.5001 30.0001 52.5001Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M31.4297 37.9454L39.375 30L31.4297 22.0547"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.625 30H39.3751"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
