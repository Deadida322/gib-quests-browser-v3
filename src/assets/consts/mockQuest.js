const mockQuest = {
    title: "Квест для Каришечки",
    image: "https://fun-cats.ru/wp-content/uploads/9/f/c/9fcd2413fb01e0c8aa4c6bd525c65fbd.jpeg",
    description: `Квест для самой лучшей, ненаглядной, потрясающей и балдёжной Каришечки в честь дня рождения`,
    stages: [
        {
            order: 1,
            title: "Пролог",
            type: "video",
            url: "https://www.youtube.com/watch?v=es0uF-ent40"
        },
        {
            order: 2,
            title: "Поздравление",
            type: "text",
            text: `&nbsp; &nbsp; Я долгое время думал, как лучше тебя поздравить. Написать письмо физически на листочке? Написать сообщение в телеграме? 
            Так родилась идея сделать квест в неработающем приложении! <br>
            &nbsp; &nbsp; В первую очередь хочу сказать тебе множество тёплых слов, о том, какая ты удивительная, яркая и ТОКСИЧНАЯ (нежно токсичная) <br>
            За такой небольшой срок, ты сильно повлияла на мою жизнь, наполнив её тем смыслом, который я уже и не надеялся когда-либо почувствовать.
            Рядом с тобой всё обретает какую-то лёгкость и уют. Ты — мой самый верный компас. <br> &nbsp; &nbsp; Знаешь, несмотря на все сложности, которые навалились на наши отношения,
            если бы можно было стереть себе память, я бы никогда этого и не сделал, хоть так и было бы проще. Ты же знаешь, простоты я не ищу.<br>
            &nbsp; Я очень хочу, чтобы у тебя всё было хорошо и ты улыбалась, но больше всего желаю быть причастным к этой улыбке, быть её причиной. 
            С днём рождения, лучик, тебя ждёт ещё бесконечное количество счастливых моментов, я всё постараюсь сделать, чтоб их создать 🖤
            `
        },
        {
            order: 3,
            title: "Что, собственно делать?",
            type: "text",
            text: `Для начала тебе нужно одеться (напоминаю, потеплее, как ты любишь) и двинуться к точке на карте следующего этапа`
        },
        {
            order: 4,
            title: "Красивое?",
            type: "map",
            point: {
                latitude: 12,
                longitude: 10
            }
        },
        {
            order: 5,
            title: "Следующая точка",
            type: "text",
            text: `Двигайся к точке (карта следующего этапа) и собери 4 <b>QR-кода</b>, главное <b>сохрани их</b>, они пригодятся тебе в будушем, <b> порядок сканирования тоже является ключом</b>`
        },
        {
            order: 6,
            title: "Первый код",
            type: "qrCode",
            code: "code1"
        },
        {
            order: 7,
            title: "Второй код",
            type: "qrCode",
            code: "code2"
        },
        {
            order: 8,
            title: "Третий код",
            type: "qrCode",
            code: "code3"
        },
        {
            order: 9,
            title: "И четвёртый код",
            type: "qrCode",
            code: "code4"
        },
        {
            order: 10,
            title: "Flappy Артём: Набери 10 баллов",
            type: "flappy"
        },
        {
            order: 11,
            title: "А теперь нужно позвонить",
            type: "text",
            text: 'Позвони 89378788494 и назови кодовую фразу "А Ленин такой молодой"'
        },
        {
            order: 12,
            title: "Кодовая фраза",
            type: "test",
            questions: [
                {
                    title: "Что услышала в ответ?",
                    type: "insert",
                    answers: ["жую асфальт"],
                    answ: [],
                    rightAnswers: ["жую асфальт"],
                    order: 1
                }
            ]
        },
        {
            order: 13,
            title: "Найди велик по карте",
            type: "map",
            point: {
                latitude: 12,
                longitude: 10
            }
        },
        {
            order: 14,
            title: "Ехай на...",
            type: "text",
            text: "Теперь когда велосипед найден, тебе нужно вспомнить в каком порядке сканировались qr-коды - это и есть код от замка"
        },
        {
            order: 15,
            title: "Я, надеюсь, ты справилась",
            type: "text",
            text: "Теперь прежде чем ехать куда-то, давай переведём дыханием и прервёмся на тест"
        },
        {
            order: 16,
            title: "Тест обо всём",
            type: "test",
            questions: [
                {
                    title: "Лучшие автомобильные бренды",
                    type: "multiple",
                    answ: [],
                    answers: [
                        "Peugeot",
                        "BMW",
                        "Koeningseg",
                        "Тройка",
                        "Citroen"
                    ],
                    rightAnswers: ["Peugeot", "Citroen"],
                    order: 0
                },
                {
                    title: "Мой любимый писатель",
                    type: "single",
                    answers: ["Ленин", "Ты", "Джек Лондон", "Брэм Стокер"],
                    answ: [],
                    rightAnswers: ["Ты"],
                    order: 1
                },
                {
                    title: "Каким бензином заправляется Citroen?",
                    answ: [],
                    type: "insert",
                    answers: ["95"],
                    rightAnswers: ["95"],
                    order: 2
                },
                {
                    title: "Расположи грызунов по размеру",
                    type: "order",
                    answers: [
                        "Бобр",
                        "Капибара",
                        "Белка-летяга",
                        "Мыш",
                        "Хохлатый дикобраз"
                    ],
                    answ: [],
                    rightAnswers: [
                        "Капибара",
                        "Бобр",
                        "Хохлатый дикобраз",
                        "Белка-летяга",
                        "Мыш"
                    ],
                    order: 3
                },
                {
                    title: "Что означает имя Давид?",
                    answ: [],
                    type: "insert",
                    answers: ["Любимый"],
                    rightAnswers: ["Любимый"],
                    order: 4
                },
                {
                    title: "О какой peugeot я мечтаю?",
                    type: "single",
                    answers: ["RCZ", "RZC", "РЦЗО", "АБВГД"],
                    answ: [],
                    rightAnswers: ["RCZ"],
                    order: 5
                },
                {
                    title: "Расположи фреймворки по популярности",
                    type: "order",
                    answers: ["Svelte", "React", "EmberJS", "Angular", "Vue"],
                    answ: [],
                    rightAnswers: [
                        "React",
                        "Vue",
                        "Angular",
                        "Svelte",
                        "EmberJS"
                    ],
                    order: 6
                }
            ]
        },
        {
            order: 17,
            title: "Иди на запятую!",
            type: "map",
            point: {
                latitude: 12,
                longitude: 10
            }
        }
    ]
};

export const mockQuestArray = [mockQuest, mockQuest, mockQuest, mockQuest];
export default mockQuest;
