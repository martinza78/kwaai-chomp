
var _stack=[];
var _callback=null;
var _currentStep=0;
var _backpack=null;

var engine={
    bite:
        function(){
            var args=Array.prototype.slice.call(arguments, 0);
            _stack=_stack.concat(args);
        }

    ,run:
        function(input,callback){
            _backpack=input;

            _callback=callback;

            if (_stack.length==0){return callback(null,input)}

            _currentStep=0;
            try {
                _stack[_currentStep](_backpack, res, next);
            }catch(exp){
                return next(exp);
            }
        }

    ,runDistinct:
        function(input,callback,bites){
            _backpack=input;
            _callback=callback;
            _stack=bites;
            _currentStep=0;
            try{
                _stack[_currentStep](_backpack,res,next);
            }catch(exp){
                return next(exp);
            }
        }

}

module.exports=engine;

function next(err){
    if(err){return _callback(err);}
    _currentStep++;
    try {
        _stack[_currentStep](_backpack, res, next);
    }
    catch(exp){
        return next(exp)
    }
}

function res(result){
    _callback(null,result);

}