"use client"

import { useState } from "react"

const faqs = [
  {
    question: "How do I update my billing information?",
    answer:
      "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
  },
  {
    question: "How do I update my profile information?",
    answer:
      "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
  },
  {
    question: "How do I find my purchase history?",
    answer:
      "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-7xl text-black font-bold mb-2">FAQ</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`accordion py-8 px-6 border-b border-gray-200 transition-all duration-500 hover:bg-gray-100 ${
                openIndex === index ? "bg-gray-100" : ""
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="accordion-toggle group inline-flex items-center justify-between w-full text-left text-black leading-8 hover:text-gray-900 transition duration-500"
              >
                <h5>{faq.question}</h5>
                <svg
                  className={`transform transition duration-500 text-black group-hover:text-gray-900 ${
                    openIndex === index ? "rotate-180 text-gray-900" : ""
                  }`}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className="accordion-content overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? "250px" : "0",
                }}
              >
                <p className="mt-4 text-base text-black leading-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
