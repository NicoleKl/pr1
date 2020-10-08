function renderTree(selector, height) {
    let select;
    if (selector[0] === ".") {
        select = document.getElementsByClassName(selector.slice(1));
    } else if (selector[0] === "#") {
        select = document.getElementById(selector.slice(1));
    } else {
        select = document.getElementsByTagName(selector);
    }

    let twig = "";
    let tree = "";

    let levels = height;

    if (levels === undefined) {
        levels = 10;
    }

    for (let i = 1; i <= levels; i++) {
        twig += "*";
        tree = tree.concat(twig + '<br>');
    }

    for (let k = 0; k < select.length; k++) {
        select[k].innerHTML = tree;
    }
}

renderTree('.tree', 5)