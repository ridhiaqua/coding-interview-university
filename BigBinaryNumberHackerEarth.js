(function main() {
    function num(n){
        var mod = 1000000007;
    if(n==1){
            return 1;
        }
        var ans=1;
        for(var i=2;i<=n;i++) {
            var length = Math.floor(Math.log(n)+1);
            ans = (((ans%mod)*(Math.pow(2,length)%mod)%mod) + i)%mod;
        }
        console.log(ans);
        return ans;
    }
    num(100000000);
}());
