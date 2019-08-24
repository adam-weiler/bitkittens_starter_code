document.addEventListener("DOMContentLoaded", function() {
    const allCatBoxes = document.querySelectorAll('.cat-box');
    const summonKittensButton = document.querySelector('#summon-cats');

    console.log(allCatBoxes);
    console.log(summonKittensButton);



    summonKittensButton.addEventListener('click', () => {
        console.log('-- Clicked the \'Summon kitties!\' button.');

    });
});
