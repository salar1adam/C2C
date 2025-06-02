import React from 'react';

const FAQsPage: React.FC = () => {
  const faqs = [
    {
      question: "Do I need prior experience in geology or oil exploration?",
      answer: "While some background in geology or engineering is helpful, our course is designed to accommodate professionals from various backgrounds, including beginners. We start with foundational knowledge before advancing to more complex topics."
    },
    {
      question: "How much time should I commit each week?",
      answer: "We recommend dedicating 10–15 hours per week to maximize learning, but you can adjust based on your schedule."
    },
    {
      question: "Is financial aid available?",
      answer: "Contact us to learn more about payment plans and scholarship availability."
    },
    {
      question: "Will this course help me get a job in the oil and gas industry?",
      answer: "Our course is designed to equip you with practical knowledge and skills valued by employers. While we provide career guidance and support, job placement ultimately depends on your effort and the job market. Many of our graduates have successfully advanced their careers after completing the course."
    },
    {
      question: "How does the job placement assistance work?",
      answer: "We provide career support including resume reviews, interview coaching, and guidance on job searching in the industry. While we do not have formal company partnerships, we offer valuable resources to help you advance your career."
    },
    {
      question: "Can I access the course materials after completion?",
      answer: "All plans include lifetime access to course materials and updates."
    },
    {
      question: "What technical skills or software do I need before starting the course?",
      answer: "No prior software skills are required. The course includes introductory exposure to key industry tools, and all technical concepts are explained step-by-step."
    },
    {
      question: "Is the course suitable for international students or professionals?",
      answer: "Absolutely. Our online format allows learners worldwide to access the content at their own pace, and the material is designed to be relevant across global oil and gas markets."
    },
    {
      question: "Can I interact with other students or the instructor during the course?",
      answer: "Yes, depending on your plan, you’ll have access to Q&A support, community forums, and for Professional or Executive plans, personalized mentoring and networking opportunities."
    },
    {
      question: "What if I fall behind or need extra help?",
      answer: "You can revisit any course materials at any time during your access period, and you’re encouraged to reach out for support via the course forum or direct mentoring sessions."
    },
    {
      question: "Are there any prerequisites or required equipment for fieldwork components?",
      answer: "Fieldwork is optional and based on practical case studies; no special equipment is required to participate fully in the course."
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes, all students who complete the course will receive a certificate recognizing their achievement and readiness for professional roles."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;