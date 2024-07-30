import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item w-4/5 my-4 p-4 bg-white rounded-md shadow-md transition transform hover:bg-customregal hover:translate-y-3 ">
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium text-gray-800">{question}</p>
        <button onClick={onClick} className="focus:outline-none">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {isOpen && (
        <p className="mt-2 text-gray-600">{answer}</p>
      )}
    </div>
  )
}

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What events will it cover?',
      answer: 'The events will cover various college activities, including workshops, seminars, and cultural events.'
    },
    {
      question: 'Does this just cover college info or anything from outside?',
      answer: 'This platform covers information primarily related to college events but may include some relevant external events.'
    },
    {
      question: 'How can I contact you?',
      answer: 'You can contact us through the contact form available on our website or email us at info@example.com.'
    },
    {
      question: 'How to navigate to the events registration page?',
      answer: 'You can navigate to the events registration page by clicking on the "Register" button in the main menu.'
    },
  ]

  return (
    <section className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </section>
  )
}
