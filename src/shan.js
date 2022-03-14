const sloteDate = [{
    slaveId: 2,
    name: "mao"
}, {
    slaveId: 2,
    name: "min"
}, {
    slaveId: 3,
    name: "maomin"
}, {
    slaveId: 6,
    name: "ma111o",
}]

const setArray = sloteDate.reduce((pre, cur) => {
    if (!(cur.slaveId in pre)) {
        pre.push(cur.slaveId);
    }
    return pre;
}, [])


console.log('setArray: ', setArray);