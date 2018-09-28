// ===============================================================================
// DATA
// Below data will hold all of your friends.
// Initially we just set it equal to a .
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
        name: "Muscle Man",
        photo: "https://vignette.wikia.nocookie.net/theregularshow/images/1/1e/Muscle_hq.png/revision/latest?cb=20180527094540",
        scores: [
            "2",
            "4",
            "3",
            "2",
            "1",
            "4",
            "1",
            "5",
            "3",
            "3"
        ]
    },
    {
        name: "Larry the Lobster",
        photo: "http://spongebob.wikia.com/wiki/Larry_the_Lobster?file=Oie_transparent.png",
        scores: [
            "2",
            "4",
            "3",
            "2",
            "1",
            "4",
            "1",
            "5",
            "3",
            "3"
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;