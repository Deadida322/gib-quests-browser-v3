const mockQuest = {
    title: "Квест",
    image: "https://fun-cats.ru/wp-content/uploads/9/f/c/9fcd2413fb01e0c8aa4c6bd525c65fbd.jpeg",
    description: `Описание`,
    stages: [
        {
            title: "Текстовый этап",
            type: "text",
            text: "asdadasd"
        },
        {
            title: "Видео этап",
            type: "video",
            url: "https://www.youtube.com/watch?v=es0uF-ent40"
        },
        {
            title: "Тестовый этап",
            type: "test"
        },
        {
            title: "Карточный этап",
            type: "map",
            url: "test"
        },
        {
            title: "QR этап",
            type: "qrCode",
            code: "test"
        }
    ]
};

export const mockQuestArray = [mockQuest, mockQuest, mockQuest, mockQuest];
export default mockQuest;
