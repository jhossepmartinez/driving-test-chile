import {
    MultipleAnswerQuestion 
} from "../../types";

export const MultipleAnswerQuestionCard = ({ questionData, onChange, userAnswers, showAnswers }: {questionData: MultipleAnswerQuestion, onChange: (answer: string[]) => void, userAnswers: string[], showAnswers: boolean}) => {
    const { question, options, answer, image } = questionData;

    const handleCheckboxChange = (option: string) => {
        const updatedAnswers = userAnswers.includes(option)
            ? userAnswers.filter((ans) => ans !== option)
            : [...userAnswers, option];
        onChange(updatedAnswers);
    };

    return (
        <div className="card shadow-lg bg-base-100 mb-6">
            <div className="card-body">
                <h2 className="card-title">
                    {question}
                </h2>
                {image && (
                    <figure>
                        <img
                            className="rounded-md object-cover"
                            src={image}
                            alt="" />
                    </figure>
                )}
                <div className="space-y-2">
                    {options.map((option, index) => (
                        <label
                            key={index}
                            className="form-control flex items-center cursor-pointer bg-base-200 px-4 rounded-md py-2">
                            <input
                                type="checkbox"
                                name={question}
                                className="checkbox checkbox-primary checkbox-sm mr-2"
                                value={option}
                                onChange={() => handleCheckboxChange(option)}
                            />
                            <p className={showAnswers && answer.includes(option) ? "text-success" : ""}>
                                {option}
                            </p>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

