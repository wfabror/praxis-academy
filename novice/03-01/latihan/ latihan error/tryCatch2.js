function synchro() {
    // try {
    //     setTimeout(function() {
    //         noSuchVariable;//script berhenti disini
    //     }, 1000);
    // } catch (e) {
    //     alert("Tidak berfungsi");
    // }
    setTimeout(function() {
        try {
            noSuchVariable;
        } catch {
            alert("Ada Error!");
        }
    }, 1000);
}