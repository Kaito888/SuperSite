var quests = [
    {//0
        title: "Общага",
        description: "Обычное студенческое утро. Тебе снится сон о том, что отменили пары, и вот... Звонит будильник.",
        image: "questsimg/questcats 00.png",
        asks: [
            {
                question: "Поспишь ещё?",
                answers: [
                    {
                        text: "да",
                        goTo: 1,
                    }, {
                        text: "посплю",
                        goTo: 1,
                    }
                ],
                goToWrong: 2,
            }, {
                question: "А на пары вообще пойдёшь?",
                answers: [
                    {
                        text: "нет",
                        goTo: 25,
                    }, {
                        text: "неа",
                        goTo: 25,
                    }
                ],
                goToWrong: 0,
            }
        ]
    }, {//1
        title: "Общага",
        description: "Ты выключил будильник и спишь... А он снова звенит!",
        image: "questsimg/questcats 01.png",
        asks: [
            {
                question: "Поспишь ещё?",
                answers: [
                    {
                        text: "да",
                        goTo: 3,
                    }, {
                        text: "посплю",
                        goTo: 3,
                    }
                ],
                goToWrong: 5,
            }, {
                question: "На пааары пойдёёёшь?",
                answers: [
                    {
                        text: "нет",
                        goTo: 25,
                    }
                ],
                goToWrong: 1,
            }
        ]
    }, {//2
        title: "Общага",
        description: "Ты встал. Каким-то образом после первого же будильника.",
        image: "questsimg/questcats 0205.png",
        asks: [
            {
                question: "",
                answers: [
                    {
                        text: "да",
                        goTo: 6,
                    }
                ],
                continue: true,
                goToWrong: 6,
            }
        ]
    }, {//3
        title: "Общага",
        description: "Ты снова спишь, а будильник снова звенит...",
        image: "questsimg/questcats 03.png",
        asks: [
            {
                question: "Может ну его, поспишь ещё?",
                answers: [
                    {
                        text: "да",
                        goTo: 4,
                    }, {
                        text: "посплю",
                        goTo: 4,
                    }
                ],
                goToWrong: 5,
            }
        ]
    }, {//4
        title: "Конец игры!",
        description: "Как же всё таки хорошо лежать утром в кроватке... Только вот ты проспал. И опоздал на пары.",
        image: "questsimg/questcats 04.png",
        asks: [
            {
                exit: true,
            }
        ]
    }, {//5
        title: "Общага",
        description: "Ты встал... Дурацкое утро... Чтож, надо одеваться и готовиться идти на пары.",
        image: "questsimg/questcats 0205.png",
        asks: [
            {
                question: "",
                answers: [
                    {
                        text: "да",
                        goTo: 6,
                    }
                ],
                continue: true,
                goToWrong: 6,
            }
        ]
    }, {//6
        title: "Общага",
        description: "Вот ты почти готов, осталось только собрать обед.",
        image: "questsimg/questcats 06.png",
        asks: [
            {
                question: "Возьмёшь с собой что-нибудь?",
                answers: [
                    {
                        text: "да",
                        goTo: 8,
                    }, {
                        text: "возьму",
                        goTo: 8,
                    }
                ],
                goToWrong: 7,
            }
        ]
    }, {//7
        title: "Конец игры!",
        description: "Ничего так ничего. Ты проголодался по пути в универ. И не дошёл.",
        image: "questsimg/questcats 07.png",
        asks: [
            {
                exit: true,
            }
        ]
    }, {//8
        title: "Общага",
        description: "Из съедобного ты нашёл только фрукты и бутер... И воду.",
        image: "questsimg/questcats 08.png",
        asks: [
            {
                question: "Что из этого берём?",
                answers: [
                    {
                        text: "фрукты",
                        goTo: 10,
                    }, {
                        text: "воду",
                        goTo: 11,
                    }, {
                        text: "бутер",
                        goTo: 12,
                    }
                ],
                goToWrong: 9,
            }
        ]
    }, {//9
        title: "Общага",
        description: "Четвёртого не дано. Работу найди, тогда нормальную еду себе выбирать и будешь.",
        image: "questsimg/questcats 09.png",
        asks: [
            {
                question: "",
                answers: [
                    {
                        text: "да",
                        goTo: 8,
                    }
                ],
                continue: true,
                goToWrong: 8,
            }
        ]
    }, {//10
        title: "Общага",
        description: "Судя по всему, ты за ЗОЖ. Поэтому, выйдя из общаги, ты пешком направился к универу.",
        image: "questsimg/questcats 10.png",
        asks: [
            {
                question: "",
                answers: [
                    {
                        text: "да",
                        goTo: 18,
                    }
                ],
                continue: true,
                goToWrong: 18,
            }
        ]
    }, {//11
        title: "Общага",
        description: "Только воду, серьёзно?.. Ну ладно, как хочешь. С голоду только не помри, а то на пары всё равно идти придётся.",
        image: "questsimg/questcats 11.png",
        asks: [
            {
                question: "",
                answers: [
                    {
                        text: "да",
                        goTo: 22,
                    }
                ],
                continue: true,
                goToWrong: 22,
            }
        ]
    }, {//12
        title: "Улица",
        description: "Ты сделал свой бутер, вышел на улицу, и вдруг увидел, что твой автобус уже на остановке.",
        image: "questsimg/questcats 12.png",
        asks: [
            {
                question: "Побежишь, чтобы успеть?",
                answers: [
                    {
                        text: "да",
                        goTo: 13,
                    }, {
                        text: "побегу",
                        goTo: 13,
                    }
                ],
                goToWrong: 21,
            }
        ]
    }, {//13
        title: "Автобус",
        description: "Вот удача - не только на автобус успел, но и место в нём свободное нашел.",
        image: "questsimg/questcats 13.png",
        asks: [
            {
                question: "Сядешь?",
                answers: [
                    {
                        text: "да",
                        goTo: 14,
                    }, {
                        text: "сяду",
                        goTo: 14,
                    }
                ],
                goToWrong: 15,
            }
        ]
    }, {//14
        title: "Конец игры!",
        description: "Это был неверный выбор...",
        image: "questsimg/questcats 14.png",
        asks: [
            {
                exit: true,
            }
        ]
    }, {//15
        title: "Автобус",
        description: "Избежав гнева злобных бабушек, ты спокойно доехал до нужной остановки.",
        image: "questsimg/questcats 15.png",
        asks: [
            {
                question: "",
                answers: [
                    {
                        text: "да",
                        goTo: 16,
                    }
                ],
                continue: true,
                goToWrong: 16,
            }
        ]
    }, {//16
        title: "Улица",
        description: "Тебе повезло, ещё есть время до начала пар.",
        image: "questsimg/questcats 16.png",
        asks: [
            {
                question: "Заскачешь в пекарню?",
                answers: [
                    {
                        text: "да",
                        goTo: 17,
                    },
                ],
                goToWrong: 26,
            }
        ]
    }, {//17
        title: "Конец игры!",
        description: "Выпечка смотрелась слишком аппетитно по сравнению с твоим бутербродом. Ты не смог удержаться... И теперь не можешь пойти на пары...",
        image: "questsimg/questcats 17.png",
        asks: [
            {
                exit: true,
            }
        ]
    }, {//18
        title: "Улица",
        description: "...Ты идешь... Пешком... Иди...",
        image: "questsimg/questcats 18.png",
        asks: [
            {
                question: "",
                answers: [
                    {
                        text: "да",
                        goTo: 19,
                    }
                ],
                continue: true,
                goToWrong: 19,
            }
        ]
    }, {//19
        title: "Улица",
        description: "Каким-то образом ты оказался около подземки, а там ещё не включили свет.",
        image: "questsimg/questcats 19.png",
        asks: [
            {
                question: "Есть с собой фонарик?",
                answers: [
                    {
                        text: "да",
                        goTo: 23,
                    }, {
                        text: "есть",
                        goTo: 23,
                    }
                ],
                goToWrong: 20,
            }
        ]
    }, {//20
        title: "Конец игры!",
        description: "Всегда носи с собой фонарик... (Иначе можно споткнуться в темноте! :3)",
        image: "questsimg/questcats 20.png",
        asks: [
            {
                exit: true,
            }
        ]
    }, {//21
        title: "Улица",
        description: "Следующий автобус не скоро... Ты думаешь пойти пешком. Хотя...",
        image: "questsimg/questcats 21.png",
        asks: [
            {
                question: "Подождёшь троллейбус?",
                answers: [
                    {
                        text: "да",
                        goTo: 22,
                    }, {
                        text: "подожду",
                        goTo: 22,
                    }
                ],
                goToWrong: 18,
            }
        ]
    }, {//22
        title: "Улица",
        description: "Ты поехал на троллейбусе и благополучно доехал до универа.",
        image: "questsimg/questcats 22.png",
        asks: [
            {
                question: "",
                answers: [
                    {
                        text: "да",
                        goTo: 23,
                    }
                ],
                continue: true,
                goToWrong: 23,
            }
        ]
    }, {//23
        title: "Улица",
        description: "Ну чтож, ты почти на месте. И вдруг в твою голову прокрадывается мысль...",
        image: "questsimg/questcats 23.png",
        asks: [
            {
                question: "Прогуляешь пары?",
                answers: [
                    {
                        text: "да",
                        goTo: 24,
                    }, {
                        text: "прогуляю",
                        goTo: 24,
                    }
                ],
                goToWrong: 26,
            }
        ]
    }, {//24
        title: "Улица",
        description: "Подумой ; - ;",
        image: "questsimg/questcats 24.png",
        asks: [
            {
                question: "Прогуляешь всё-таки?",
                answers: [
                    {
                        text: "да",
                        goTo: 25,
                    }, {
                        text: "прогуляю",
                        goTo: 25,
                    }
                ],
                goToWrong: 26,
            }
        ]
    }, {//25
        title: "Конец игры!",
        description: "Поздравляю с отчислением!",
        image: "questsimg/questcats 25.png",
        asks: [
            {
                exit: true,
            }
        ]
    }, {//26
        title: "Улица",
        description: "Ты успешно обошёл все препятствия, осталось только дойти до аудитории.",
        image: "questsimg/questcats 26.png",
        asks: [
            {
                question: "В каком корпусе первая пара?(1, 4, 6?)",
                answers: [
                    {
                        text: "1",
                        goTo: 30,
                    }, {
                        text: "4",
                        goTo: 29,
                    }, {
                        text: "6",
                        goTo: 28,
                    }, {
                        text: "в первом",
                        goTo: 30,
                    }, {
                        text: "в четвертом",
                        goTo: 29,
                    }, {
                        text: "в четвёртом",
                        goTo: 29,
                    }, {
                        text: "в шестом",
                        goTo: 28,
                    }
                ],
                goToWrong: 27,
            }
        ]
    }, {//27
        title: "Победа!",
        description: "Видимо, первым физра. Ну иди бегать тогда.",
        image: "questsimg/questcats 27.png",
        asks: [
            {
                exit: true,
            }
        ]
    }, {//28
        title: "Победа!",
        description: "С днём практики! :3",
        image: "questsimg/questcats 28.png",
        asks: [
            {
                exit: true,
            }
        ]
    }, {//29
        title: "Победа!",
        description: "Эхх, повезло... Матан, да? А у другой группы вот аиг первой парой...",
        image: "questsimg/questcats 2932.png",
        asks: [
            {
                exit: true,
            }
        ]
    }, {//30
        title: "Универ",
        description: "Яссно",
        image: "questsimg/questcats 30.png",
        asks: [
            {
                question: "А пар вообще сегодня сколько?",
                answers: [
                    {
                        text: "1",
                        goTo: 31,
                    }, {
                        text: "2",
                        goTo: 32,
                    }, {
                        text: "3",
                        goTo: 33,
                    }, {
                        text: "одна",
                        goTo: 31,
                    }, {
                        text: "две",
                        goTo: 32,
                    }, {
                        text: "три",
                        goTo: 33,
                    }
                ],
                goToWrong: 34,
            }
        ]
    }, {//31
        title: "Победа!",
        description: "Здорово! Скоро обратно в кроватку пойдёшь <3",
        image: "questsimg/questcats 31.png",
        asks: [
            {
                exit: true,
            }
        ]
    }, {//32
        title: "Победа!",
        description: "Судя по всему, день будет хорошим.",
        image: "questsimg/questcats 2932.png",
        asks: [
            {
                exit: true,
            }
        ]
    }, {//33
        title: "Победа!",
        description: "С днём лекций!) Надеюсь, ты всё успеваешь записывать.",
        image: "questsimg/questcats 33.png",
        asks: [
            {
                exit: true,
            }
        ]
    }, {//34
        title: "Победа!",
        description: "Удачи... ._.",
        image: "questsimg/questcats 34.png",
        asks: [
            {
                exit: true,
            }
        ]
    },
]