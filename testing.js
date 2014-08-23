
var chomp=require('./lib/chomp.js').create();

/*
function step1(backpack,res,next){

    backpack.a=1;
    next();
}

function step2(backpack,res,next){
    backpack.b=2;
    next();
}

function step3(backpack,res,next){
    res(backpack.i*backpack.a+backpack.b);
}

function chompRun(err,res){
    console.log("chomp finished")
    if (err){console.error(err)}
    else{console.log(res)}
}
chomp.runDistinct({i:2},chompRun,[step1,step2,step3])
chomp.runDistinct({i:6},chompRun,[step1,step2,step3])

*/


chomp.bite(step1,step2)
chomp.bite(step3)

chomp.run({i:2},function(err,result){
    console.log(result);
})
chomp.run({i:5},function(err,result){
    console.log(result);
})

function step1(backpack,res,next){
    backpack.a=1;
    next();
}

function step2(backpack,res,next){
    backpack.b=2;
    next();
}

function step3(backpack,res,next){
    res(backpack.i*(backpack.a+backpack.b));
}

