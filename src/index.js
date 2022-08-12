let a = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
let b = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

module.exports = function toReadable (number) {
   if (number < 20) return a[number];
   let digit = number%10;
   if (number < 100) return b[~~(number/10)-2] + (digit? " " + a[digit]: "");
   if (number < 1000) return a[~~(number/100)] +" hundred" + (number%100 == 0? "": " " + toReadable(number%100));
   return toReadable(~~(number/1000)) + " thousand" + (number%1000 != 0? " " + toReadable(number%1000): "");
};
