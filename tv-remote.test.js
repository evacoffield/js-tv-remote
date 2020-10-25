describe("Sample Tests", function () {

    it("single character words", function () {
        Test.assertEquals(tvRemote("a"), 1);
        Test.assertEquals(tvRemote("e"), 5);
        Test.assertEquals(tvRemote("k"), 3);
        Test.assertEquals(tvRemote("h"), 4);
    });

    it("example", function () {
        Test.assertEquals(tvRemote("codewars"), 36);
    });

    it("misc", function () {
        Test.assertEquals(tvRemote("does"), 16);
        Test.assertEquals(tvRemote("your"), 23);
        Test.assertEquals(tvRemote("solution"), 33);
        Test.assertEquals(tvRemote("work"), 20);
        Test.assertEquals(tvRemote("for"), 12);
        Test.assertEquals(tvRemote("these"), 27);
        Test.assertEquals(tvRemote("words"), 25);
    });

});