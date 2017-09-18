function Fibonacci(n)
{
    // write code here
	if (n<3){
		return 1
	}
	var fir=1
	var sec=1
	var ans
	var i=2
	while (i<n){
		ans=fir+sec
		fir=sec
		sec=ans
		i+=1
	}
	return ans
}