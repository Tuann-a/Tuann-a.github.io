function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
let val = document.querySelectorAll('.game button');
function shuffle(deck) {

    for (let i = 0; i < 200; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}
let image =
    [{ img: "url(2ab21d0e-5445-444e-ad8e-48d3a3cf74e9.jfif)", value: "a" }, { img: "url(2ab21d0e-5445-444e-ad8e-48d3a3cf74e9.jfif)", value: "a" },
    { img: "url(2c8b4dce-aa53-48af-8aae-dfb43edc3936.jfif)", value: "b" }, { img: "url(2c8b4dce-aa53-48af-8aae-dfb43edc3936.jfif)", value: "b" },
    { img: "url(I6zqbclA_400x400.jpg)", value: "c" }, { img: "url(I6zqbclA_400x400.jpg", value: "c" },
    { img: "url(cocuk.jpeg)", value: "d" }, { img: "url(cocuk.jpeg)", value: "d" },
    { img: "url(tsdsf.jpeg)", value: "e" }, { img: "url(tsdsf.jpeg)", value: "e" },
    { img: "url(fsfsf.enc)", value: "f" }, { img: "url(fsfsf.enc)", value: "f" },
    { img: "url(afas.jpeg)", value: "g" }, { img: "url(afas.jpeg)", value: "g" },
    { img: "url(adad.jpeg)", value: "h" }, { img: "url(adad.jpeg)", value: "h" },]
let ctr = { cardS: [], counter: 0, indexS: [], }
shuffle(image)


function control(index) {
    val[index].firstElementChild.style.background = image[index].img;
    val[index].firstElementChild.style.backgroundSize = '140px ';
    val[index].firstElementChild.style.backgroundRepeat = "no-repeat";
    if (ctr.cardS.length < 2) {
        val[index].firstElementChild.style.transform = 'rotateY(180deg)';
        ctr.cardS.push(image[index].value);
        ctr.indexS.push(index);
        if (ctr.cardS.length == 2) {

            check();
        }
    }
};
async function check() {

    if (ctr.cardS[0] == ctr.cardS[1] && ctr.indexS[0] != ctr.indexS[1]) {
        await delay(700);
        val[ctr.indexS[0]].firstElementChild.style.opacity = '0';
        val[ctr.indexS[1]].firstElementChild.style.opacity = '0';
        await delay(500);
        val[ctr.indexS[0]].firstElementChild.style.display = 'none';
        val[ctr.indexS[1]].firstElementChild.style.display = 'none';
        ctr.cardS = [];
        ctr.indexS = [];
        ctr.counter++;
        if (ctr.counter == 8) {
            document.getElementById('cong').style.visibility = 'visible'
        }
    }
    else {
        await delay(700);
        val[ctr.indexS[0]].firstElementChild.style.transform = 'rotateY(0deg)';
        val[ctr.indexS[1]].firstElementChild.style.transform = 'rotateY(0deg)';
        ctr.cardS = [];
        ctr.indexS = [];

    }


}
