function solve(input) {
    let regex = /(?<str>[^\d]+)(?<num>\d+)/g;
  
    let match;
    let result = "";
    let uniq = '';
  
    while ((match = regex.exec(input[0])) !== null) {
      result += match.groups.str.repeat(match.groups.num).toUpperCase();
      uniq += match.groups.str;
    }
  
    let count = [...uniq].filter((s => c => !s.has(c.toLowerCase()) && s.add(c.toLowerCase()))(new Set)).join('');
  
    console.log(`Unique symbols used: ${count.length}\n${result}`);
  }
  solve([ 'aSd2&5s@1' ])