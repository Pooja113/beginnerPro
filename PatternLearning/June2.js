// 3633. Earliest Finish Time for Land and Water Rides I

var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let nLen = landStartTime.length
    let wLen = waterStartTime.length
    let res = Infinity
  
    for (let i = 0; i < nLen; i++) {
      for (let j = 0; j < wLen; j++) {
        let landtime = landStartTime[i] + landDuration[i]
        let land_water = Math.max(landtime, waterStartTime[j]) + waterDuration[j];
        res = Math.min(res, land_water);
        
        let water_time = waterStartTime[j] + waterDuration[j];
        let water_land = Math.max(water_time, landStartTime[i]) + landDuration[i];
        res = Math.min(res, water_land);
      }  
  }
  return res;

    
};