#kwaai-chomp

A Connect like calculation engine.

##Description
Chomp is a very simple mini pipeline calc engine that can be used to chain calculation elements together and create more complex subsystems. 

Simply you add bites and then run the pipeline with a callback.

##API
###chomp.create()
Creates a new chomp to run

###chomp.runDistinct()
Runs a chomp without using the create.
```javascript
chomp.runDistinct({i:2},function(err,result){
    console.log(result);
},[bite1,bite2,bite])
```
```


###chomp.bite(function(backpack,res,next))
Each chomp bite is a simple function(backpack,res,next) that has some shared state (the backpack) that passes between steps, a result to stop processing and a next to call the next element in the chain.

```javascript
chomp.bite(function(backpack,res,next){
backpack.value=3;
next();
});
```

###chomp.run(input,callback)

The pipeline runs in the sequence it was added and once the result or an error is called the callback is triggered. The backpack is set to the initial input.

##Example
```javascript
var chomp=require('kwaai-chomp').create();

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
```

