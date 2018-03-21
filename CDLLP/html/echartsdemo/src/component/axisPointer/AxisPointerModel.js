define(function(require) {

    var echarts = require('../../echarts');

    var AxisPointerModel = echarts.extendComponentModel({

        type: 'axisPointer',

        coordSysAxesInfo: null,

        defaultOption: {
            // 'auto' means that show when triggered by tooltip or handle.
            show: 'auto',
            // 'auto' | 'click' | 'mousemove' | 'handle' | 'none'
            triggerOn: 'mousemove',

            zlevel: 0,
            z: 50,

            type: 'line',
            snap: false,
            triggerTooltip: true,

            value: null,
            status: null, // Init value depends on whether handle is used.

            // [{mapper: function () {}, xAxisId: ..., yAxisName: ..., angleAxisIndex: ...}, ...]
            // mapper: can be ignored.
            //      input: {axisInfo, value}
            //      output: {axisInfo, value}
            link: [],

            // Do not set 'auto' here, otherwise global animation: false
            // will not effect at this axispointer.
            animation: null,
            animationDurationUpdate: 200,

            lineStyle: {
                color: '#555',
                width: 1,
                type: 'solid'
            },

            shadowStyle: {
                color: 'rgba(150,150,150,0.3)'
            },

            label: {
                show: true,
                formatter: null, // string | Function
                precision: 'auto', // Or a number like 0, 1, 2 ...
                margin: 3,
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                },
                padding: [5, 7, 5, 7],
                backgroundColor: 'auto', // default: axis line color
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: '#aaa',
                shadowOffsetX: 0,
                shadowOffsetY: 2
            },

            handle: {
                icon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z', // jshint ignore:line
                size: 45,
                // handle margin is from symbol center to axis, which is stable when circular move.
                margin: 50,
                // color: '#1b8bbd'
                // color: '#2f4554'
                color: '#333',
                shadowBlur: 3,
                shadowColor: '#aaa',
                shadowOffsetX: 0,
                shadowOffsetY: 2
            }
        }

    });

    return AxisPointerModel;

});