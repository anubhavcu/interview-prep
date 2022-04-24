// O(N^2) time | O(1) space
var threeSum = function (nums) {
  var ans = [];
  if (nums.length < 3) {
    // at least 3 no's should be there
    return ans;
  }
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return ans;
    }
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue; // we don't want repetitive triplets, so we skip no's we already have checked.
    }
    for (var j = i + 1, k = nums.length - 1; j < k; ) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] == nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return ans;
};
