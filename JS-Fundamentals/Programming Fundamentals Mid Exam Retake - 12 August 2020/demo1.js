function solve(arr, entryPoint, type, rating) {

    let leftSum = 0;
    let rightSum = 0;
    for (let i = entryPoint - 1; 0 <= i; i--) {
        const element = arr[i];

        if(type == 'Expensive' && element >= entryPoint) {
            if (rating == 'positive' && element > 0) {
                leftSum += element;
            } else if (rating == 'negative' && element < 0) {
                leftSum += element
            } else {
                leftSum += element;
            }
        } else {
            if (rating == 'positive' && element > 0) {
                leftSum += element;
            } else if (rating == 'negative' && element < 0) {
                leftSum += element
            } else if(rating == 'all'){
                leftSum += element;
            }
        }  
    }

    for (let i = entryPoint + 1; i <= arr.length - 1; i++) {
        const element = arr[i];

        if(type == 'Expensive' && element >= entryPoint) {
            if (rating == 'positive' && element > 0) {
                rightSum += element;
            } else if (rating == 'negative' && element < 0) {
                rightSum += element
            } else {
                rightSum += element;
            }
        } else {
            if (rating == 'positive' && element > 0) {
                rightSum += element;
            } else if (rating == 'negative' && element < 0) {
                rightSum += element
            } else if(rating == 'all'){
                rightSum += element;
            }
        }  
    }


   if (leftSum >= rightSum) {
       console.log(`Left - ${leftSum}`);
   } else {
       console.log(`Right - ${rightSum}`);
   }
}

solve([1, 5, 1],
    1,
    "cheap",
    "all");