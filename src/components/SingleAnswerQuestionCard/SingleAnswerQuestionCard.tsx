import {
    SingleAnswerQuestion 
} from "../../types";

const SingleAnswerQuestionCard = ({ questionData, onChange, showAnswers }: { questionData: SingleAnswerQuestion, onChange: (answer: string) => void, showAnswers: boolean }) => {
    const { question, options, answer, image } = questionData;
    return (
        <>
            <div className="card shadow-lg mb-6 bg-base-100 card-md">
                { image && (
                    <figure className="px-4 pt-4">
                        <img
                            className="rounded-md"
                            src={image}
                            alt="" />
                    </figure>
                )}
                <div className="card-body">
                    <h2 className="card-title">
                        {question}
                    </h2>
                    <div className="space-y-2">
                        {options.map((option, index) => (
                            <label
                                key={index}
                                className="form-control flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name={question}
                                    className="radio radio-primary radio-sm mr-2"
                                    value={option}
                                    onChange={() => onChange(option)}
                                />
                                <p className={showAnswers && answer === option  ? "text-success" : ""}>
                                    {option}
                                </p>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleAnswerQuestionCard
