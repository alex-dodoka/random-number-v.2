function getRandomNumber() {
    let min = +$('#min-number').val(),
        max = +$('#max-number').val();
    let res = Math.floor(Math.random() * (max - min) + min);
    console.log(res);
}