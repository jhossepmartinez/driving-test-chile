import { useEffect, useState } from 'react'
import './App.css'
import { MultipleAnswerQuestionCard } from './components/MultipleAnswerQuestionCard/MultipleAnswerQuestionCard'
import SingleAnswerQuestionCard from './components/SingleAnswerQuestionCard/SingleAnswerQuestionCard'
import questions from "./questions.json"
import { isMultipleAnswerQuestion, isSingleAnswerQuestion, MultipleAnswerQuestion, Question, SingleAnswerQuestion } from './types'

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "emerald")
    const [showAnswers, setShowAnswers] = useState(false)
    
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html")?.setAttribute("data-theme", localTheme || "emerald")
    }, [theme])

    const quizQuestions: Question[] = questions

    const [userAnswers, setUserAnswers] = useState<{ [key: number]: string | string[] }>({});
    const [results, setResults] = useState<{ correct: number; total: number } | null>(null);

    const handleSingleAnswerChange = (index: number, answer: string) => {
        setUserAnswers((prev: { [key: number]: string | string[] }) => ({ ...prev, [index]: answer }));
    };

    const handleMultipleAnswerChange = (index: number, answers: string[]) => {
        setUserAnswers((prev) => ({ ...prev, [index]: answers }));
    };

    const handleSubmit = () => {
        let correctCount = 0;

        quizQuestions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            if (question.type === "single") {
                if (userAnswer === (question as SingleAnswerQuestion).answer) {
                    correctCount++;
                }
            } else if (question.type === "multiple") {
                const correctAnswers = (question as MultipleAnswerQuestion).answer;
                if ( Array.isArray(userAnswer) && userAnswer.length === correctAnswers.length && userAnswer.every((ans) => correctAnswers.includes(ans))) {
                    correctCount++;
                }
            }    
        });

        setResults({ correct: correctCount, total: quizQuestions.length });
    };

    return (
        <>

            <div className="fixed space-x-4">
                <button
                    className="btn btn-neutral"
                    onClick={() => setTheme(theme => theme === "emerald" ? "dark" : "emerald")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                </button>
                <button
                    onClick={handleSubmit}
                    className="btn btn-primary"
                >
                    Submit
                </button>
                <button
                    onClick={() => setShowAnswers(showAnswers => !showAnswers)}
                    className="btn btn-ghost"
                >
                    Show answers
                </button>
                {results && (
                    <div
                        role="alert"
                        className="alert alert-success alert-soft">
                        <span>
                            {results.correct}
                            {' '}
                            correcta
                            {results.correct === 1 ? '' : 's'}
                            {' '}
                            de 
                            {' '}
                            {results.total}
                        </span>
                    </div>
                )}
            </div>

            <div className="self-center bg-base-200 flex justify-center pt-6">
                <div className="w-xl">
                    {quizQuestions.map((question, index) => {
                        if (isSingleAnswerQuestion(question)) {
                            return (
                                <SingleAnswerQuestionCard
                                    key={index}
                                    showAnswers={showAnswers}
                                    questionData={question}
                                    onChange={(answer) => handleSingleAnswerChange(index, answer)} />
                            )
                        } else if (isMultipleAnswerQuestion(question)) {
                            return <MultipleAnswerQuestionCard
                                key={index}
                                showAnswers={showAnswers}
                                questionData={question as MultipleAnswerQuestion}
                                userAnswers={(userAnswers[index] as string[]) || []}
                                onChange={(answers) => handleMultipleAnswerChange(index, answers)}
                            />
                        }
                    })}
                </div>

            </div>
        </>
    )
}

export default App
