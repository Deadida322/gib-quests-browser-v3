const types = {
    text: {
        title: "Текст",
        icon: "mdi-text-box-outline",
        action: "Редактор текста",
        description: "Этапы данного типа носят информационный характер"
    },
    video: {
        title: "Видео",
        icon: "mdi-youtube",
        action: "Редактор видео",
        description: "Просмотрите видео, чтобы продвинуться дальше"
    },
    qrCode: {
        title: "Qr-код",
        icon: "mdi-qrcode",
        action: "Редактор QR-кода",
        description: "В таких этапах для продвижения нужно отсканировать qr-код"
    },
    test: {
        title: "Тест",
        icon: "mdi-school-outline",
        action: "Конструктор тестов",
        description: "Решите тест, чтобы завершить тестовый этап"
    },
    map: {
        title: "Точки",
        icon: "mdi-map-outline",
        action: "Редактор карт",
        description:
            "В геолокационных этапах нужно добраться до указанной на карте точке"
    }
};

export default types;
