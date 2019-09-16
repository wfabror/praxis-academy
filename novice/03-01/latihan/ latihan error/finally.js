function final() {
    let num = +prompt("Masukkan bilangan positif ", 24);
    let diff, result;

    function fib(n) {
        if (n < 0 || Math.trunc(n) != n) {
            throw new Error("BUkan negativ, dan harus integer");
        }
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }
    let start = Date.now();

    try {
        result = fib(num);
    } catch (e) {
        result = 0;
    } finally {
        diff = Date.now() - start;
    }
    alert(result || "terjadi error");

    alert(`waktu eksekusi ${diff}ms`);
}