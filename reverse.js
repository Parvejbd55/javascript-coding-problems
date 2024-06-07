function reverseString(str) {
    var reverse = "";
    for(var i = 0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = "Hello Yousuf Brother.";
var forYousuf = reverseString(statement);
console.log(forYousuf);

var countryLove = reverseString("Amar Sonar Bangla, Ami tomay Valobashi");
console.log(countryLove);
