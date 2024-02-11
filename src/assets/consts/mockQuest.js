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
            type: "test"
        },
        {
            order: 4,
            title: "Карточный этап",
            type: "map",
            url: "test"
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
