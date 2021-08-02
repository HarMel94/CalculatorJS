
const numb = document.querySelector(".numbers"),
      res = document.querySelector(".result");

function numbfunc(e) {
    numb.value += e;
    res.value = "";
};

function equalfunc(e) {
    res.value += eval(numb.value);
    numb.value = "";
};

function clean(e) {
    numb.value = "";
    res.value = "";
};