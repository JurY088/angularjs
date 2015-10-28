var app = angular.module('offer', []);

app.controller('OfferController', function ($scope) {

    $scope.offerData = [
        {
            "regionId": 838,
            "regionName": "Liga Majstrov",
            "regionSysName": "Champions League",
            "leagueCupId": 1102,
            "leagueCupName": "Skupinová Faaza",
            "leagueCupSysName": "Group Stage",
            "count": 16,
            "chances": [
                {
                    "id": 12524290,
                    "firstOdd": [
                        {
                            "date": "03-11",
                            "time": "16:00",
                            "sportId": 54
                        },
                        {
                            "id": 43742483,
                            "name": "FC Astana",
                            "rate": "10.52"
                        },{   "id": 43742484,
                            "name": "X",
                            "rate": "5.55"
                        },
                        {
                            "id": 43742485,
                            "name": "Atletico Madrid",
                            "rate": "1.25"
                        },
                        {"eventId": 1052216}
                    ]
                },
                {
                    "id": 12524256,
                    "firstOdd": [
                        {
                            "date": "03-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43742386,
                            "name": "Šachtar Doneck",
                            "rate": "1.45"
                        },
                        {
                            "id": 43742387,
                            "name": "X",
                            "rate": "4.20"
                        },
                        {
                            "id": 43742388,
                            "name": "Malmo FF",
                            "rate": "6.78"
                        },
                        {"eventId": 1052309}
                    ]
                },
                {
                    "id": 12524238,
                    "firstOdd": [
                        {
                            "date": "03-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43742339,
                            "name": "Real Madrid",
                            "rate": "1.75"
                        },
                        {
                            "id": 43742340,
                            "name": "X",
                            "rate": "3.65"
                        },
                        {
                            "id": 43742341,
                            "name": "Paris Saint-Germain",
                            "rate": "4.35"
                        },
                        {"eventId": 1052310}
                    ]
                },
                {
                    "id": 12524281,
                    "firstOdd": [
                        {
                            "date": "03-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43742455,
                            "name": "PSV Eindhoven",
                            "rate": "2.70"
                        },
                        {
                            "id": 43742456,
                            "name": "X",
                            "rate": "3.40"
                        },
                        {
                            "id": 43742457,
                            "name": "VfL Wolfsburg",
                            "rate": "2.45"
                        },
                        {"eventId": 1052311}
                    ]
                },
                {
                    "id": 12524276,
                    "firstOdd": [
                        {
                            "date": "03-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43742441,
                            "name": "Manchester United",
                            "rate": "1.48"
                        },
                        {
                            "id": 43742442,
                            "name": "X",
                            "rate": "4.30"
                        },
                        {
                            "id": 43742443,
                            "name": "CSKA Moskva",
                            "rate": "6.00"
                        },
                        {"eventId": 1052312}
                    ]
                },
                {
                    "id": 12524296,
                    "firstOdd": [
                        {
                            "date": "03-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43742501,
                            "name": "SL Benfica",
                            "rate": "1.62"
                        },
                        {
                            "id": 43742502,
                            "name": "X",
                            "rate": "3.70"
                        },
                        {
                            "id": 43742503,
                            "name": "Galatasaray Istanbul",
                            "rate": "5.33"
                        },
                        {"eventId": 1052313}
                    ]
                },
                {
                    "id": 12524335,
                    "firstOdd": [
                        {
                            "date": "03-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43742576,
                            "name": "Sevilla FC",
                            "rate": "2.78"
                        },
                        {
                            "id": 43742577,
                            "name": "X",
                            "rate": "3.35"
                        },
                        {
                            "id": 43742578,
                            "name": "Manchester City",
                            "rate": "2.40"
                        },
                        {"eventId": 1052314}
                    ]
                },
                {
                    "id": 12524317,
                    "firstOdd": [
                        {
                            "date": "03-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43742542,
                            "name": "Borussia Monchengladbach",
                            "rate": "3.19"
                        },
                        {
                            "id": 43742543,
                            "name": "X",
                            "rate": "3.25"
                        },
                        {
                            "id": 43742544,
                            "name": "Juventus Turín",
                            "rate": "2.20"
                        },
                        {"eventId": 1052315}
                    ]
                },
                {
                    "id": 12500215,
                    "firstOdd": [
                        {
                            "date": "04-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43670840,
                            "name": "FC Barcelona",
                            "rate": "1.06"
                        },
                        {
                            "id": 43670841,
                            "name": "X",
                            "rate": "11.50"
                        },
                        {
                            "id": 43670842,
                            "name": "FC BATE Borisov",
                            "rate": "22.26"
                        },
                        {"eventId": 1060718}
                    ]
                },
                {
                    "id": 12500199,
                    "firstOdd": [
                        {
                            "date": "04-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43670803,
                            "name": "AS Rím",
                            "rate": "2.10"
                        },
                        {
                            "id": 43670804,
                            "name": "X",
                            "rate": "3.40"
                        },
                        {
                            "id": 43670805,
                            "name": "Bayer 04 Leverkusen",
                            "rate": "3.28"
                        },
                        {"eventId": 1060719}
                    ]
                },
                {
                    "id": 12500238,
                    "firstOdd": [
                        {
                            "date": "04-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43670923,
                            "name": "FC Bayern Mníchov",
                            "rate": "1.46"
                        },
                        {
                            "id": 43670924,
                            "name": "X",
                            "rate": "4.30"
                        },
                        {
                            "id": 43670925,
                            "name": "Arsenal FC",
                            "rate": "6.34"
                        },
                        {"eventId": 1060720}
                    ]
                },
                {
                    "id": 12500254,
                    "firstOdd": [
                        {
                            "date": "04-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43670958,
                            "name": "Olympiacos Pireus",
                            "rate": "1.57"
                        },
                        {
                            "id": 43670959,
                            "name": "X",
                            "rate": "3.75"
                        },
                        {
                            "id": 43670960,
                            "name": "GNK Dinamo Záhreb",
                            "rate": "5.83"
                        },
                        {"eventId": 1060721}
                    ]
                },
                {
                    "id": 12500294,
                    "firstOdd": [
                        {
                            "date": "04-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43671094,
                            "name": "Maccabi Tel Aviv",
                            "rate": "6.53"
                        },
                        {
                            "id": 43671095,
                            "name": "X",
                            "rate": "4.30"
                        },
                        {
                            "id": 43671096,
                            "name": "FC Porto",
                            "rate": "1.45"
                        },
                        {"eventId": 1060722}
                    ]
                },
                {
                    "id": 12500267,
                    "firstOdd": [
                        {
                            "date": "04-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43671003,
                            "name": "Chelsea FC",
                            "rate": "1.51"
                        },
                        {
                            "id": 43671004,
                            "name": "X",
                            "rate": "4.00"
                        },
                        {
                            "id": 43671005,
                            "name": "Dynamo Kyjev",
                            "rate": "6.13"
                        },
                        {"eventId": 1060723}
                    ]
                },
                {
                    "id": 12500345,
                    "firstOdd": [
                        {
                            "date": "04-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43671248,
                            "name": "Olympique Lyon",
                            "rate": "2.30"
                        },
                        {
                            "id": 43671249,
                            "name": "X",
                            "rate": "3.20"
                        },
                        {
                            "id": 43671250,
                            "name": "Zenit Petrohrad",
                            "rate": "3.05"
                        },
                        {"eventId": 1060724}
                    ]
                },
                {
                    "id": 12500326,
                    "firstOdd": [
                        {
                            "date": "04-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43671188,
                            "name": "KAA Gent",
                            "rate": "3.38"
                        },
                        {
                            "id": 43671189,
                            "name": "X",
                            "rate": "3.30"
                        },
                        {
                            "id": 43671190,
                            "name": "Valencia CF",
                            "rate": "2.10"
                        },
                        {"eventId": 1060725}
                    ]
                }
            ]
        },
        {
            "regionId": 1003,
            "regionName": "Euro 2016 Kvalifikácia",
            "regionSysName": "UEFA Euro - Q",
            "leagueCupId": 587865,
            "leagueCupName": "Playoff",
            "leagueCupSysName": "Playoff",
            "count": 4,
            "chances": [
                {
                    "id": 12459615,
                    "firstOdd": [
                        {
                            "date": "12-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43541784,
                            "name": "Nórsko",
                            "rate": "1.85"
                        },
                        {
                            "id": 43541785,
                            "name": "X",
                            "rate": "3.40"
                        },
                        {
                            "id": 43541786,
                            "name": "Maďarsko",
                            "rate": "4.16"
                        },
                        {"eventId": 1067165}
                    ]
                },
                {
                    "id": 12459617,
                    "firstOdd": [
                        {
                            "date": "13-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43541792,
                            "name": "Bosna a Hercegovina",
                            "rate": "2.00"
                        },
                        {
                            "id": 43541793,
                            "name": "X",
                            "rate": "3.25"
                        },
                        {
                            "id": 43541794,
                            "name": "Írsko",
                            "rate": "3.74"
                        },
                        {"eventId": 1067172}
                    ]
                },
                {
                    "id": 12459619,
                    "firstOdd": [
                        {
                            "date": "14-11",
                            "time": "18:00",
                            "sportId": 54
                        },
                        {
                            "id": 43541800,
                            "name": "Ukrajina",
                            "rate": "1.65"
                        },
                        {
                            "id": 43541801,
                            "name": "X",
                            "rate": "3.65"
                        },
                        {
                            "id": 43541802,
                            "name": "Slovinsko",
                            "rate": "5.12"
                        },
                        {"eventId": 1067170}
                    ]
                },
                {
                    "id": 12459650,
                    "firstOdd": [
                        {
                            "date": "14-11",
                            "time": "20:45",
                            "sportId": 54
                        },
                        {
                            "id": 43541907,
                            "name": "Švédsko",
                            "rate": "2.15"
                        },
                        {
                            "id": 43541908,
                            "name": "X",
                            "rate": "3.25"
                        },
                        {
                            "id": 43541909,
                            "name": "Dánsko",
                            "rate": "3.30"
                        },
                        {"eventId": 1067171}
                    ]
                }
            ]
        }
    ]

});