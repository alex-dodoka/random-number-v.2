function getRandomNumber() {
    let min = parseInt($('#min-number').val()),
        max = parseInt($('#max-number').val());
    let res = Math.floor(Math.random() * (max - min) + min);
    console.log(res);
}