function formatTimestamp(date, format) {
    let newDate = new Date(parseInt(date)),
        newFormat = format || 'YYYY-MM-DD';
    let values = {
        Y: newDate.getFullYear(),
        M: newDate.getMonth() + 1,
        D: newDate.getDate(),
        h: newDate.getHours(),
        m: newDate.getMinutes(),
        s: newDate.getSeconds()
    };

    return newFormat.replace(/Y+|M+|D+|h+|m+|s+/g, function (match) {
        let result = values[match[0]];
        if (match.length > 1 && result.toString().length !== match.length) {
            result = ( ( new Array(match.length) ).join('0') + result ).slice(-2);
        }
        return result;
    });
};

module.exports = {
  formatTimestamp,
}
