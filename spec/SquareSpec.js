'use strict';

describe("Validate Square input restrictions", function() {
    var container;

    beforeEach(function () {
        container = fixture(
            '<Square id="square" />'
        );
        document.body.appendChild(container);
    });

    it("should accept alpha character in square field", function () {
        document.getElementById("square").value = "A";
        expect(document.getElementById("square").value).toBe("A");
    });
    // it("should change lowercase character in square field to uppercase", function () {
    //     document.getElementById("square").innerHTML = "a";
    //     expect(document.getElementById("square").innerHTML).toBe("A");
    // });
    // it("should accept alpha character in square field", function () {
    //     document.getElementById("square").value = "A";
    //     expect(document.getElementById("square").value).toBe("A");
    // });
    // it("should accept alpha character in square field", function () {
    //     document.getElementById("square").value = "A";
    //     expect(document.getElementById("square").value).toBe("A");
    // });
});

function fixture(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div;
}