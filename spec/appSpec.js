describe("App", () => {
    describe("Counter", () => {
        it("is set to 120 when the button is clicked", () => {
            document.getElementById('click-me').click();
            expect(document.getElementById('counter').textContent).toBe('120');
        })
    })

    describe("Button", () => {
        it("has an ID of 'click-me'", () => {
            expect(document.getElementById('click-me').tagName).toBe('BUTTON');
        })
    })

    describe("Factorial", () => {
        it("returns the factorial of positive numbers", () => {
            expect(factorial(1)).toBe(1);
            expect(factorial(3)).toBe(6);
            expect(factorial(11)).toBe(39916800);
        })

        it("returns 1 if the provided number is less than 1 ", () => {
            expect(factorial(0)).toBe(1);
            expect(factorial(-1)).toBe(1);
        })
    })

    describe("Computer", () => {
        let computerA;
        beforeEach(() => {
            computerA = new Computer();
        });

        afterEach(() => {
            computerA = undefined;
        });

        it("is created with a hard drive size of 512", () => {
            expect(computerA.hardDriveSpace).toBe(512);
        });

        describe("installProgram", () => {
            let computerB;
            beforeEach((done) => {
                computerB = new Computer();
                computerA.installProgram(400, () => {
                    computerB.installProgram(600, done);
                });
            });

            it("can install a program if there is sufficient space", (done) => {
                expect(computerA.hardDriveSpace).toBe(112);
                done();
            })

            it("is unable to install a program if there is insufficient space", (done) => {
                expect(computerB.hardDriveSpace).toBe(512);
                done();
            })
        })

        describe("format", () => {
            beforeEach((done) => {
                computerA.installProgram(300, done);
            });
            it("resets the hard drive to 512, even after programs have been installed", (done) => {
                computerA.format();
                expect(computerA.hardDriveSpace).toBe(512);
                done();
            });
        })

    })

})