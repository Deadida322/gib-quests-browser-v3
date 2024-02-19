const mockQuest = {
    title: "Квест",
    image: "https://fun-cats.ru/wp-content/uploads/9/f/c/9fcd2413fb01e0c8aa4c6bd525c65fbd.jpeg",
    description: `Описание`,
    stages: [
        {
            order: 1,
            title: "Текстовый этап",
            type: "text",
            text: "asdadasd"
        },
        {
            order: 2,
            title: "Видео этап",
            type: "video",
            url: "https://www.youtube.com/watch?v=es0uF-ent40"
        },
        {
            order: 3,
            title: "Тестовый этап",
            type: "test",
            questions: [
                {
                    title: "1213",
                    type: "multiple",
                    answers: ["Ответ 1", "Ответ 2"],
                    rightAnswers: [],
                    order: 0
                },
                {
                    title: "2 вопрос",
                    type: "insert",
                    answers: ["Ответ 1"],
                    rightAnswers: [],
                    order: 1
                },
                {
                    title: "3 вопрос",
                    type: "single",
                    answers: ["Ответ 1", "Ответ 2", "Ответ 3"],
                    rightAnswers: [],
                    order: 1
                },
                {
                    title: "4 вопрос",
                    type: "insert",
                    answers: ["Ответ 1"],
                    rightAnswers: [],
                    order: 1
                },
                {
                    title: "5 вопрос",
                    type: "order",
                    answers: ["Ответ 1", "Ответ 2", "Ответ 3"],
                    rightAnswers: [],
                    order: 1
                }
            ]
        },
        {
            order: 4,
            title: "Карточный этап",
            type: "map",
            url: "test",
            point: {
                latitude: 12,
                longitude: 10
            }
        },
        {
            order: 5,
            title: "QR этап",
            type: "qrCode",
            code: "test"
        }
    ]
};

export const mockQuestArray = [mockQuest, mockQuest, mockQuest, mockQuest];
export default mockQuest;
