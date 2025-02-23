import { MultipleAnswerQuestion } from "../../types";

export const MultipleAnswerQuestionCard = ({ questionData, onChange, userAnswers, showAnswers }: {questionData: MultipleAnswerQuestion, onChange: (answer: string[]) => void, userAnswers: string[], showAnswers: boolean}) => {
    const { question, options, answer, image } = questionData;

    const handleCheckboxChange = (option: string) => {
        const updatedAnswers = userAnswers.includes(option)
            ? userAnswers.filter((ans) => ans !== option)
            : [...userAnswers, option];
        onChange(updatedAnswers);
    };

    return (
        <div className="card shadow-xl bg-base-100 mb-6">
            <div className="card-body">
                <h2 className="card-title">
                    {question}
                </h2>
                { image && (
                    <figure>
                        <img
                            className="rounded-md object-cover"
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
                                    type="checkbox"
                                    name={question}
                                    className="checkbox checkbox-primary checkbox-sm"
                                    value={option}
                                    onChange={() => handleCheckboxChange(option)}
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
                        <div className=" flex flex-col space-y-2">

                            {answer.map((ans, index) => (
                                <span
                                    key={index}
                                    className="badge badge-primary badge-outline badge-sm">
                                    {ans}
                                </span>
                            ))}
                        </div>

                    </div>
                ) }
            </div>
        </div>
    );
}

