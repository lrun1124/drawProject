var Facilities = [
    {
        name: "高1", //设备名字
        id: "GY3283832", //设备编号
        width : 50, //宽度
        height : 50, //高度
        safe : { //安全距离
            left : 50,  //左侧安全距离
            right:  100, //右侧安全距离
            up : 50, //上侧安全距离
            down : 100, //下侧安全距离
            operation: 50,
            back : 0
        },
        cost: 2890, //花费
        face: "1", //操作面朝向，"0"-上，"1"-右，"2"-下，"3"-左
        kind : 3 //类型，无需修改
    },
    {
        name: "低1", //设备名字
        id: "DY32838",
        width : 60, //宽度
        height : 60, //高度
        safe : { //安全距离
            left : 50,  //左侧安全距离
            right:  130, //右侧安全距离
            up : 50, //上侧安全距离
            down : 100, //下侧安全距离
            operation: 50,
            back : 50
        },
        cost: 10000, //花费
        face: "1", //操作面朝向，"0"-上，"1"-右，"2"-下，"3"-左
        kind : 3 //类型，无需修改
    },
    {
        name: "高2", //设备名字
        id: "GYXD22", //设备编号
        width : 80, //宽度
        height : 80, //高度
        safe : { //安全距离
            left : 50,  //左侧安全距离
            right:  80, //右侧安全距离
            up : 50, //上侧安全距离
            down : 80, //下侧安全距离
            operation: 50,
            back : 0
        },
        cost: 12890, //花费
        face: "1", //操作面朝向，"0"-上，"1"-右，"2"-下，"3"-左
        kind : 3 //类型，无需修改
    },
    {
        name: "低1", //设备名字
        id: "DY3FD23",
        width : 90, //宽度
        height : 90, //高度
        safe : { //安全距离
            left : 50,  //左侧安全距离
            right:  150, //右侧安全距离
            up : 50, //上侧安全距离
            down : 120, //下侧安全距离
            operation: 50,
            back : 50
        },
        cost: 20000, //花费
        face: "1", //操作面朝向，"0"-上，"1"-右，"2"-下，"3"-左
        kind : 3 //类型，无需修改
    }
    
]


export default Facilities;
