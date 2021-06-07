import {swap} from './helper';
const SelectionSort =(array,position,arraySteps,colorSteps)=>{

let colorKey = colorSteps[colorSteps.length - 1].slice();
let min_idx;
for (let i = 0; i < array.length - 1; i++) {
        min_idx=i;
        for (let j = i+1; j < array.length ; j++) 
        {
            if (array[j] < array[min_idx]) {
            min_idx=j;
            }
        }
            array = swap(array, i, min_idx);    
            arraySteps.push(array.slice());
            colorKey[i] = 1;
            colorKey[min_idx] = 1;
            colorSteps.push(colorKey.slice());
            colorKey[i] = 0;
            colorKey[min_idx] = 0;
            colorKey[arraySteps.length - 1 - i] = 2;
            arraySteps.push(array.slice());
            colorSteps.push(colorKey.slice());
        }

    colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2);
    return;
}
export default SelectionSort;