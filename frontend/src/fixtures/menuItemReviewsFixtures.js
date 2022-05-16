import { getDefaultNormalizer } from "@testing-library/react"

const menuItemReviewsFixtures = {
    oneMenuItemReview: {
        "id": "1",
        "itemId": "1",
        "reviewerEmail": "genericperson@mail.com",
        "stars": 1,
        "dateReviewed": "2022-04-26T23:39:51",
        "comments": "Meh..."
    },
    threeMenuItemReviews: [
        {
            "id": "69",
            "itemId": "123",
            "reviewerEmail": "sexyreviewer123@hotmail.com",
            "stars": 5,
            "dateReviewed": "2022-04-26T23:39:51",
            "comments": "POGGERS This dish tastes nice!"
        },
        {
            "id": "420",
            "itemId": "4",
            "reviewerEmail": "randomperson@gmail.com",
            "stars": 3,
            "dateReviewed": "2022-05-10T12:00:00",
            "comments": "This is ok I guess"
        },
        {
            "id": "50",
            "itemId": "32",
            "reviewerEmail": "pvc@dvd.com",
            "stars": 2,
            "dateReviewed": "2022-05-15T12:00:00",
            "comments": ":yum:"
        } 
    ]
};


export { menuItemReviewsFixtures };