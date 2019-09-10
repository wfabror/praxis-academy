class mySuperClass {
    String myString;

    mySuperClass() {}

    mySuperClass(String myString) {
        this.myString = myString;
    }
}

class mySubclass extends mySuperClass {
    mySubclass(String myString) {
        super(myString);
    }

    public static void main(String[] args) {
        mySuperClass s1 = new mySubclass("Hello, World!");
        console.log(s1.myString);

        mySuperClass s2 = new mySubclass("Hello, Lur!");
        console.log(s2.myString);
    }
}