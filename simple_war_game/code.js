// var randomLoc = Math.random();
//生成随机数，但是并非整数
function WithNoName(name,weight) {
    return name+weight;
}
//使用function字段来声明一个函数
var randomLoc = Math.floor(Math.random()*5);
//get five times and using floor to finish

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
//    返回值就是我的输出
    if (guess < 0 || guess > 6) {

        alert("Please enter a valid cell number!");
    } else {

        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
        }
        if (hits == 3) {
            isSunk = true;
            alert("You sank my battleship!");
        }else {
            alert("not hit down")
        }

    }
    var stats = "You took " + guesses + " guesses to sink the battleship, " +
        "which means your shooting accuracy was " + (3 / guesses);
    alert(stats);

}
