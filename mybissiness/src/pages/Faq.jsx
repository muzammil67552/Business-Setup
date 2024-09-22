// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const questions = [
        {
            id: 1,
            question: "What is the meaning of PETAC Business Consultant in Oman?",
            answer: "The PETAC abbreviation stands for Paracha Enterprises Textile.",
        },
        {
            id: 2,
            question: "What services does PETAC offer?",
            answer: "PETAC offers a wide range of business consulting services for startups and established businesses.",
        },
        {
            id: 3,
            question: "How can PETAC help my business?",
            answer: "PETAC provides expert advice in business setup, legal compliance, and operational support to ensure business success.",
        },
    ];

    const toggleQuestion = (id) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
            <div className="w-[90%] max-w-[1200px] bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold mb-6 text-center">
                    Frequently Asked Questions
                </h1>
                {questions.map((q) => (
                    <div key={q.id} className="mb-4 last:mb-0">
                        <button
                            className="w-full text-left text-lg bg-gray-100 rounded-lg shadow-md flex justify-between items-center p-4"
                            onClick={() => toggleQuestion(q.id)}
                        >
                            <span>{q.question}</span>
                            <span>{activeQuestion === q.id ? <FaMinus /> : <FaPlus />}</span>
                        </button>
                        <AnimatePresence>
                            {activeQuestion === q.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden bg-gray-200 rounded-lg p-4 mt-2"
                                >
                                    <p>{q.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
