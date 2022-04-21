let int1 = document.getElementById("input-1");
let int2 = document.getElementById("input-2");
let int3 = document.getElementById("input-3");
let int4 = document.getElementById("input-4");

let data1 = document.getElementById("data-1");
let data2 = document.getElementById("data-2");
let data3 = document.getElementById("data-3");
let data4 = document.getElementById("data-4");

function calculate(nums){
      for(var i =0; i < nums.length; i++){
          if(nums[i] > 200000){
              nums[i] = Number(nums[i]) + Number(nums[i]) * 10/100;
              nums[i] = Number(nums[i]) - Number(nums[i]) * 0.2/100;

          }
          else if(nums[i] > 100000){
            nums[i] = Number(nums[i]) + Number(nums[i]) * 5/100;
            nums[i] = Number(nums[i]) - Number(nums[i]) * 0.05/100;

        }
        else{
            nums[i] = Number(nums[i]) + Number(nums[i]) * 3/100;

        }
      }
}
function oncalculate(){
    let nums = [int1.value, int2.value, int3.value, int4.value];
    calculate(nums);
    data1.innerText = nums[0];
    data2.innerText = nums[1];
    data3.innerText = nums[2];
    data4.innerText = nums[3];

}


