const recommendationsFixtures = {
    oneRecommendation: {
        "id": 1,
        "requesterEmail": "supman@gmail.com",
        "professorEmail": "drbob@ucsb.edu",
        "explanation": "PLEASE",
        "dateRequested": "2022-01-03T00:00:00",
        "dateNeeded": "2022-01-05T00:00:00",
        "done": false
    },
    threeRecommendations: [
        {
            "id": 1,
            "requesterEmail": "supbub@gmail.com",
            "professorEmail": "drbobby@ucsb.edu",
            "explanation": "PLEASEEEE",
            "dateRequested": "2022-02-03T00:00:00",
            "dateNeeded": "2022-02-05T00:00:00",
            "done": false
        },
        {
            "id": 2,
            "requesterEmail": "timetravel@gmail.com",
            "professorEmail": "drdonezo@ucsb.edu",
            "explanation": "it is already done",
            "dateRequested": "2022-01-06T00:00:00",
            "dateNeeded": "2022-02-05T00:00:00",
            "done": true
        },
        {
            "id": 3,
            "requesterEmail": "loltown@gmail.com",
            "professorEmail": "pappy@ucsb.edu",
            "explanation": "I would like to request a recommendation",
            "dateRequested": "2022-05-03T00:00:00",
            "dateNeeded": "2022-05-15T00:00:00",
            "done": false
        } 
    ]
};

export { recommendationsFixtures };