export const DATA_LOAD = 'DATA_LOAD';


export function viewGraphData() {
// TODO : Remove hardcoded values
  return {
    type    : DATA_LOAD,
    payload : { graphData: [
            { name: 'Monday', views: 6 },
            { name: 'Tuesday', views: 0 },
            { name: 'Wednesday', views: 1 },
            { name: 'Thursday', views: 0 },
            { name: 'Friday', views: 12 },
            { name: 'Saturday', views: 5 },
            { name: 'Sunday', views: 2 },
    ],
    statsData: {
      data  : [{ name: 'Views', value: 2 }],
      data2 : [{ name: 'Views', value: 20 }],
      data3 : [{ name: 'Views', value: 30 }]
    }
   }
  };
}
