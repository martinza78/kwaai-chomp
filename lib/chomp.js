


var engine={

    create:
        function(){
           var chomper= {
                stack:[]

            }

            chomper.bite=function(){
                var args=Array.prototype.slice.call(arguments, 0);
                this.stack=this.stack.concat(args);
            }
            chomper.run=function(input,callback){
                engine.runDistinct(input,callback,this.stack)

            }
        return chomper;
    }

     ,runDistinct:
        function(input,callback,bites){
            var currentStep=0;
            var backpack=input;
            var stack=bites;

            function next(err){
                if(err){return callback(err);}
                currentStep++;
                try {
                    stack[currentStep](backpack, res, next);
                }
                catch(exp){
                    return next(exp)
                }
            }

            function res(result){
                callback(null,result);
            }

            try{
                stack[currentStep](backpack,res,next);
            }catch(exp){
                return next(exp);
            }
        }

}

module.exports=engine;
