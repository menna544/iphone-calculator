(function () {
    let result= document.querySelector('.result')
    let buttonns = document.querySelectorAll('.btn1')
    let clear = document.querySelector('.btn-clear')
    let equal = document.querySelector('.btn-equal')
    buttonns.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            result.value += value;
        })
    });
    equal.addEventListener('click', function (e) {
        if (result.value == "") {
            result.value = "Enter a value";
        } else {
            result.value = eval(result.value);
        }
    })
    clear.addEventListener('click', function (e) {
        result.value = "";
    })
})();
