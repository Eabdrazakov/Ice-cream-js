window.addEventListener("load", function () {
    const h1 = document.createElement("h1");
    let string = "";
    const arrayFlavor = ["vanilla", "chocolate", "cookies", "salted caramel"];
    const div = document.createElement("div");
    const p = document.createElement("p");


    h1.append("My favorite ice-creams:");
    arrayFlavor.forEach(function (flavor) {
        string = string.concat(flavor + "" + ";  ");
    });

    p.append(h1, string);
    div.prepend(p);

    document.body.append(div);

});