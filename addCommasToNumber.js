//给数字添加逗号--美元数字:10,000
// Add commas to a number
my={
    
}
    my.addCommas = function (n) {
      while (/(\d+)(\d{3})/.test(n.toString())) {
        n = n.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
      }
      return n;
};