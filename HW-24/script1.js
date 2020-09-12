const tasksCompleted = {
    'Serg': 29,
    'Alex': 29,
    'Maryna': 35,
    'Elena': 1,
    'Anton': 35
};

var tasks = 0;

var winner ;
var winner2 ;

for (let key in tasksCompleted) {
    if(tasksCompleted[key] > tasks) {
        tasks = tasksCompleted[key];
        winner = key;
        winner2 = undefined;
    } else if (tasksCompleted[key] === tasks) {
        winner2 = key;
    }
}

if (winner2 == undefined) {
    alert (winner + " has completed the most tasks")
} else {
    alert (winner + " and " + winner2 + " have completed the most tasks")
}