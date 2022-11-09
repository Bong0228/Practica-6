let arr = [false, false, true, false, true, false, false, false, true, false];
 
    for (let i = 0, x = 0; i < arr.length; ++i) {
        if (arr[i] == true) {
            console.log('танк поврежден');
            break;
        } else {
            console.log(`танк переместился на позицию ${i+1}`);
        }
    }