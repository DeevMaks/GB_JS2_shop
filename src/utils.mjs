export const pow = (a, n) => {
    let result = a;

    if(n == 0) {
      return 1;
    } else if (n < 0) {
      for(let i = -1; i > n; i--) {
        result *= a
      }

      return 1/Math.abs(result);

    } else {
      for(let i = 1; i < n; i++) {
        result *= a
      }

      return result;
    }
  }
  