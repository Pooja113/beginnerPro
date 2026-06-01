//2144. Minimum Cost of Buying Candies With Discount
var minimumCost = function(cost) {
  cost.sort((a,b)=>b-a)
  let res=0
  const n= cost.length
  for(let i = 0; i<n; ++i) {
      if(i%3!==2){
          res += cost[i]
      }
  }
  return res
};