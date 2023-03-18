const OPERATIONS = {
    sum: "+",
    sub: "-",
    multiple: "*",
    divison: "/",
}

 function calculate({ a,b, op }){
    let res = null

    switch (op) {

        case OPERATIONS.sum:
            res = sum(a,b)
            break;

        case OPERATIONS.sub:
            res = sub(a,b)
            break;

        case OPERATIONS.multiple:
            res = multiply(a, b)
            break;

        case OPERATIONS.divison:
            res = divison(a,b)
            break;

        default:
            break;

    }

    return res
}