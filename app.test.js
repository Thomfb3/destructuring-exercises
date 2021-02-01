describe("#object destructuring 1", function () {
    let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
    let { numPlanets, yearNeptuneDiscovered } = facts;

    it("should return object value", function () {
        expect(numPlanets).toEqual(8);
    });

    it("should return object value", function () {
        expect(yearNeptuneDiscovered).toEqual(1846);
    });
});


describe("#object destructuring 2", function () {
    let planetFacts = {
        numberPlanets: 8,
        yearNeptuneDiscovered: 1846,
        yearMarsDiscovered: 1659
    };
    let { numberPlanets, ...discoveryYears } = planetFacts;
    let output = {
        yearNeptuneDiscovered: 1846,
        yearMarsDiscovered: 1659
    };

    it("should the output object", function () {
        expect(discoveryYears).toEqual(output);
    });
});


describe("#getUserData", function () {

    it("should return the correct string based on input", function () {
        expect(getUserData({ firstName: "Alejandro", favoriteColor: "purple" })).toEqual("Your name is Alejandro and you like purple");
    });

    it("should return the correct string based on input", function () {
        expect(getUserData({ firstName: "Melissa" })).toEqual("Your name is Melissa and you like green");
    });

    it("should return the correct string based on input", function () {
        expect(getUserData({})).toEqual("Your name is undefined and you like green");
    });
});


describe("#array destructuring 1", function () {
    let [first, second, third] = ["Maya", "Marisa", "Chi"];

    it("should return array item", function () {
        expect(first).toEqual("Maya");
    });

    it("should return array item", function () {
        expect(second).toEqual("Marisa");
    });

    it("should return array item", function () {
        expect(third).toEqual("Chi");
    });
});

describe("#array destructuring 2", function () {
    let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
        "Raindrops on roses",
        "whiskers on kittens",
        "Bright copper kettles",
        "warm woolen mittens",
        "Brown paper packages tied up with strings"
    ]

    it("should return array item", function () {
        expect(raindrops).toEqual("Raindrops on roses");
    });

    it("should return array item", function () {
        expect(whiskers).toEqual("whiskers on kittens");
    });

    it("should return the rest of the array", function () {
        expect(aFewOfMyFavoriteThings).toEqual(["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]);
    });
});


describe("#array destructuring 3", function () {
    let numbers = [10, 20, 30];
    [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

    it("should return array item", function () {
        expect(numbers).toEqual([10, 30, 20]);
    });
});


describe("#Assign Variables to Object Properties ES2015 refactoring", function () {
    const obj = {
        numbers: {
            a: 1,
            b: 2
        }
    };
    const { a, b } = obj.numbers;

    it("the variable should equal the object property", function () {
        expect(a).toEqual(1);
    });

    it("the variable should equal the object property", function () {
        expect(b).toEqual(2);
    });
});


describe("#One-Line Array Swap with Destructuring", function () {
    const testArr = [1, 2];
    [testArr[0], testArr[1]] = [testArr[1], testArr[0]]

    it("should return swaped array item", function () {
        expect(testArr[0]).toEqual(2);
    });

    it("should return swaped array item", function () {
        expect(testArr[1]).toEqual(1);
    });
});


describe("#Before One-Line Array Swap with Destructuring ", function () {
    const testArr = [1, 2];

    it("should return original array item", function () {
        expect(testArr[0]).toEqual(1);
    });

    it("should return original array item", function () {
        expect(testArr[1]).toEqual(2);
    });
});


describe("#raceResults One-Line ", function () {

    const testObj = {
        first: "Tom",
        second: "Margaret",
        third: "Allison",
        rest: ['David', 'Pierre']
    }

    it("should return object with correct format", function () {
        expect(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])).toEqual(testObj);
    });

});













