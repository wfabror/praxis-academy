function exampleScope() {
    foo(); // => “Hello, world!”

    function foo() {
        console.log("Hello, world!");
    }
}
exampleScope();