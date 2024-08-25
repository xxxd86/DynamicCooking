import React, {Component} from 'react';
import ReactECharts from 'echarts-for-react';
import { View } from 'react-native';

// 在此组件中绘制一个简单的柱状图
export default class Bar  extends Component{
  // 返回柱状图的配置对象
  option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
  };

  render() {
    return(
      <View>
        <ReactECharts option={this.option} />
      </View>
    )
  }
}
