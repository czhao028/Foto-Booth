values = {'r': 10, '4': 4, '8': 8, 'v': 10, '3': 3, '6': 6, '10': 10, '7': 7, '5': 5, '9': 9, 'd': 10, '2': 2};
function value(string){
    one = string.indexOf("_");
    two = string.indexOf(".png");
    val = string.slice(one+1, two);
    if(val == 'a'){
        return "Ace";
    }
    else{
        return values[val]
    }

}