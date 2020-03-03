// First construct concatenated digit using binary representations of 1 to n numbers.
// Suppose n = 2. The we have concatenated binary digit = bin(1) || bin(2) = 1 || 10.
// Convert this number to base 10 assuming LSB on right.
// In this case, converted digit = 6 in base 10.
// Let this number be k. Task is to find k modulo 10^9 + 7.
// n can be as big as 10^9.

(function main() {
    function num(n){
        var mod = 1000000007;
    if(n==1){
            return 1;
        }
        var ans=1;
        var pow = 1;
        for(var i=2;i<=n;i++) {
            var length = (Math.floor(Math.log2(i))+1);
            pow = Math.pow(2,length);
            ans = (((ans%mod)*(pow)%mod) + i)%mod;
        }
        console.log(ans);
        return ans;
    }
    num(5);
}());
