const {jumlah, kali} = require("../index");
test('menambahkan 2 angka', () => {
    expect(jumlah(1, 2)).toBe(3);
});

test('mengalikan 2 angka', () => {
    expect(kali(1, 2)).toBe(2);
}); 