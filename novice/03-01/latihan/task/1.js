function f() {
    try {
        alert("Start!");
        return "result!";
    } catch (e) {
        if ("can't handle error") {
            throw e;
        }
    } finally {
        alert("Cleanup!");
    }
}