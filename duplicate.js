var name = [3, 6, 2, 7, 3, 2, 9, 11, 8, 1, 10, 25, 59];
var uniqueName = [];

for(var i = 0; i <name.length; i++) {
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1) {
        uniqueName.push(element);
    }
}
console.log(uniqueName);