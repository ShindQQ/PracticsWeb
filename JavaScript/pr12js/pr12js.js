const arg = 5;

function addGlobalVariable(arg1 = 0)
{
    return arg + arg1;
}

function divideOnGlobalVariable(arg1 = 0)
{
   return arg1 / arg; 
}

alert(addGlobalVariable(5));
alert(divideOnGlobalVariable(10));