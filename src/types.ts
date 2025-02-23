export type SingleAnswerQuestion = {
    type: string,
    question: string,
    image?: string,
    options: string[],
    answer: string
}

export type MultipleAnswerQuestion = {
    type: string,
    question: string,
    image?: string,
    options: string[],
    answer: string[]
}

export type Question = SingleAnswerQuestion | MultipleAnswerQuestion

export const isSingleAnswerQuestion = (question: Question): question is SingleAnswerQuestion => {
    return question.type === "single"
}

export const isMultipleAnswerQuestion = (question: Question): question is MultipleAnswerQuestion => {
    return question.type === "multiple"
}
