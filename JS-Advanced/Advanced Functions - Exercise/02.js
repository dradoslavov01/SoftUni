function solve(...args) {
   let obj = {};
   let output = '';
   args.forEach(ele => {
      let key = typeof ele;
      obj[key] = ele;
   })    
   for (const key in obj) {
      output += `${key}: ${obj[key]}\n`
   }
   for (const key in obj) {
      let type = typeof obj[key];
      if(key == type) {
          type = 0;
          type++;
          output += `${typeof obj[key]}: ${type}\n`;
      }
   }

   return output
}
console.log(solve('cat', 'cat', 42, function () { console.log('Hello world!'); }));