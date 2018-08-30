$(document).ready(() => {
    let x = {
        0: [0, 0, 0, 0],
        1: [1, 0, 0, 0],
        2: [0, 1, 0, 0],
        3: [1, 1, 0, 0],
        4: [0, 0, 1, 0],
        5: [1, 0, 1, 0],
        6: [0, 1, 1, 0],
        7: [1, 1, 1, 0],
        8: [0, 0, 0, 1],
        9: [1, 0, 0, 1]
    };
    let t = new Date().toString().split(' ')[4].replace(/:/g, '').split('')
        .map(t => {
            return parseInt(t);
        });
    let incr = n => {
        t[n]++;
        if (t[n] == (n % 2 == 1 ? 10 : 6)) {
            t[n] = 0;
            if (n) incr(--n);
        }
        if (t.join('') == '240000') t = [0, 0, 0, 0, 0, 0];
        $('#clock >div').each((i, v) => {
            $(v).find('.dot').each((index, dot) => {
                $(dot).css('background-color', x[t[i]][index] == 0 ? '#fff' : 'rgba(5, ' + (i + 1) * 0.5 + ', 5,' + (index + 1) * 0.25 + ')');
            });
        });

    };
    setInterval(() => {
        incr(5);
    }, 1000);

});
