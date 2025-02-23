import { SingleAnswerQuestion } from "../../types";
const SingleAnswerQuestionCard = ({ questionData, onChange, showAnswers }: {questionData: SingleAnswerQuestion, onChange: (answer: string) => void, showAnswers: boolean}) => {
    const { question, options, answer, image } = questionData;
    return (
        <div className="card shadow-xl mb-6 bg-base-100 card-md">
            <div className="card-body">
                <h2 className="card-title">
                    {question}
                </h2>
                { image && (
                    <figure>
                        <img
                            className="rounded-md"
                            src={image}
                            alt="" />
                    </figure>
                )}
                <div className="space-y-2">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="form-control">
                            <label className="label cursor-pointer">
                                <input
                                    type="radio"
                                    name={question}
                                    className="radio radio-primary radio-sm"
                                    value={option}
                                    onChange={() => onChange(option)}
                                />
                                <span className="label-text  text-balance">
                                    {option}
                                </span>
                            </label>
                        </div>
                    ))}
                </div>
                {showAnswers && (
                    <div className="mt-4">
                        <span className="font-bold">Correct Answer:</span> 
                        {' '}
                        {answer}
                    </div>
                ) }
            </div>
        </div>
    );
}

export default SingleAnswerQuestionCard
