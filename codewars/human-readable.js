function humanReadable(seconds) {
    if (seconds < 10) return `00:00:0${seconds}`;
    if (seconds > 9 && seconds < 60) return `00:00:${seconds}`;

    if (seconds >= 60 && seconds < 3600) {
        let resMinuts = Math.floor(seconds / 60);
        let resSeconds = seconds - resMinuts * 60;

        if (resMinuts < 10) {
            if (resSeconds < 10) return `00:0${resMinuts}:0${resSeconds}`;
            if (resSeconds > 9 && resSeconds < 60) return `00:0${resMinuts}:${resSeconds}`;
        } else {
            if (resSeconds < 10) return `00:${resMinuts}:0${resSeconds}`;
            if (resSeconds > 9 && resSeconds < 60) return `00:${resMinuts}:${resSeconds}`;
        }
    } else {
        let resHours = Math.floor(seconds / 60 / 60);
        let resMinuts = Math.floor((seconds - resHours * 60 * 60) / 60);
        let resSeconds = seconds - resHours * 60 * 60 - resMinuts * 60;

        if (resHours < 10) {
            if (resMinuts < 10) {
                if (resSeconds < 10) return `0${resHours}:0${resMinuts}:0${resSeconds}`;
                if (resSeconds > 9 && resSeconds < 60) return `0${resHours}:0${resMinuts}:${resSeconds}`;
            } else {
                if (resSeconds < 10) return `0${resHours}:${resMinuts}:0${resSeconds}`;
                if (resSeconds > 9 && resSeconds < 60) return `0${resHours}:${resMinuts}:${resSeconds}`;
            }

        } else {
            if (resMinuts < 10) {
                if (resSeconds < 10) return `${resHours}:0${resMinuts}:0${resSeconds}`;
                if (resSeconds > 9 && resSeconds < 60) return `${resHours}:0${resMinuts}:${resSeconds}`;
            } else {
                if (resSeconds < 10) return `${resHours}:${resMinuts}:0${resSeconds}`;
                if (resSeconds > 9 && resSeconds < 60) return `${resHours}:${resMinuts}:${resSeconds}`;
            }
        }
    }
}
j
console.log(humanReadable(0))
console.log(humanReadable(59)) 
console.log(humanReadable(60)) 
console.log(humanReadable(90))
console.log(humanReadable(3599))
console.log(humanReadable(3600))
console.log(humanReadable(45296))
console.log(humanReadable(86399))
console.log(humanReadable(86400))
console.log(humanReadable(359999))


function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}