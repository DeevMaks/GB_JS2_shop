export const pow = (a, n) => {
    if(n == 0) return 1;
  
    let result = a;
  
    for(let i = 1; i < n; i++) {
      result *= a
    }
  
    return result;
  }
  