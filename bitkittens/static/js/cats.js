document.addEventListener("DOMContentLoaded", function() {
    // const url = "http://bitkittens.herokuapp.com/cats.json";  // API is down.
    const url = "https://eric-deploy-test.herokuapp.com/cats";  // Eric's API.

    const allCatBoxes = document.querySelectorAll('.cat-box');
    const summonKittensButton = document.querySelector('#summon-cats');

    console.log(allCatBoxes);
    console.log(summonKittensButton);



    summonKittensButton.addEventListener('click', () => {
        console.log('-- Clicked the \'Summon kitties!\' button.');

        axios.get(url)
        .then((response) => {
            console.log('-- Received response.');
            // console.log(response.data);

            let catsList = response.data['cats'];
            console.log(catsList);
            console.log(catsList[0]['name']);

        })
        .catch((error) => {
            console.log('-- Received error.');

        })
        .then(() => {
            console.log('-- Request is over.');

        });
    });
});
