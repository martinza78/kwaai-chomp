
var _stack=[];
var _callback=null;
var _currentStep=0;
//var _backpack={};

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
            //_backpack.audit=[{step:0,fn:_stack[_currentStep].toString(),time:new Date().getTime()}];
            _stack[_currentStep](_backpack,res,next);
        }

}

module.exports=engine;

function next(err){
    if(err){return _callback(err);}
    _currentStep++;
    //_backpack.audit.push({step:_currentStep,fn:_stack[_currentStep].toString(),time:new Date().getTime()});
    _stack[_currentStep](_backpack,res,next);
}

function res(result){
    //_backpack.audit.push({step:"complete",time:new Date().getTime()});
    _callback(null,result);

}