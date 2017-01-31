function printRange (start,end,skip) {
    if (skip === undefined) {
        skip = 1;
}
    for(var i = start; i<end; i +=skip) {
       console.log(i);
    }
}
printRange (5,12);
