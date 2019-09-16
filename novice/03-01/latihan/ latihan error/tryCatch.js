function func() {
    try {

        alert('Start of try runs'); // (1) <--

        lalala; // error, variable is not defined!

        alert('End of try (never reached)'); // (2)

    } catch (err) {

        alert(`Error has occurred!`); // (3) <--

    }

    // var winPoints = 3;
    // var drawPoints = 1;

    // try {
    //     if (drawPoints == 1) {
    //         throw ("Real Madrid gak lolos");
    //     } else {
    //         var qualification = winPoints + drawPoints;
    //     }
    // } catch (e) {
    //     alert("Error: " + e);
    // }
}