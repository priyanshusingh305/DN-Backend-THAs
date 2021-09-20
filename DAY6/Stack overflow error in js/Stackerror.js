function foo(){
    return foo(console.log("a"));
}

foo();
// this program stop when stack overflow