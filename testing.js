var chomp=require('./lib/chomp.js');
chomp.bite(step1,step2)
chomp.bite(step3)

chomp.run({},function(err,result){
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
    res(backpack.a+backpack.b);
}