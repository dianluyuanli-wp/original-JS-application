function minNumberInRotateArray(rotateArray)
{
    // write code here
    rotateArray.sort((a,b)=>a-b)
    return rotateArray[0]
}// JavaScript Document