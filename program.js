/* program Michał Obara 3C IX LO GDAŃSK 2019/2020 */
window.addEventListener('load', () => {
    document.getElementById('emergency-button').addEventListener('click', emButtonClick);
    document.getElementById('changeTask2Mode-button').addEventListener('click', () => {
     task2log = !task2log;
     document.getElementById('changeTask2Mode-button').innerHTML = (task2log ? 'Disable task2 log' : 'Enable task2 log');
    });
    document.getElementById('clearConsole-button').addEventListener('click', () => {
       document.getElementById('page-console').innerHTML = ''; 
    });
    
});

let slot1 = true;
let isTask3Waiting = false;
let task2log = false;

function task1() {
    slot1 = false;
    setTimeout(() => {
        PageConsole.log('Task1', 'lightgreen')
        slot1 = true;
        if(isTask3Waiting) {
            task3(1);
            isTask3Waiting = false;
        }
    }, 50)
};
function task2() {
    setTimeout(() => {
        if(task2log) PageConsole.log('Task2', 'violet');
    }, 1)
};
function task3(mode) {
    setTimeout(() => {
        PageConsole.log('Task3, mode = ' + mode, 'aqua')
        if(mode == 1) {
            setTimeout(task4, 500);
        }
    }, 10)
};
function task4() {
    setTimeout(() => {
        PageConsole.log('Task4', 'yellow')
    }, 5)
};

function emButtonClick() {
    if(slot1 == true) task3(0);
    else {
        isTask3Waiting = true;
    }
}

setInterval(() => { 
    task1()
}, 1000);

setInterval(() => { 
    task2()
}, 35);

class PageConsole {
    static log(text, color) {
        if(!color) color = 'white';
        let d = new Date()
        let h = d.getHours();
        let m = d.getMinutes()
        let s = d.getSeconds()
        let ms = d.getMilliseconds()
        document.getElementById('page-console').innerHTML += `
            <br>
            ${h + ":" + m + ":" + s + ":" + ms}: <span style="color: ${color}">${text}</span>
        `
    }
}
