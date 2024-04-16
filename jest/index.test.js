const { multiplication, concatOdds, shoppingCart } = require("../index");

describe("multiplication", () => {
  test("Test if num times num equals product of numbers", () => {
    expect(multiplication(5, 10)).toBe(50);
    expect(multiplication(0,5)).toBe(0);
  });

  test("Test if a non number is used", () => {
    expect(multiplication('a', 'b')).toBe(NaN);
    expect(multiplication('a', 2)).toBe(NaN);
  });

  test("Test if no parameters returns NaN", () => {
    expect(multiplication()).toBe(NaN);
    expect(multiplication([] ,{})).toBe(NaN);
  })
});

describe("concatOdds", () => {
  test("Test that function concat 2 arrays, grab odd, in ascending order", () => {
    expect(concatOdds([3], [-7])).toEqual([-7, 3]);
    expect(concatOdds([2, 5, 2], [2, 4, 6])).toEqual([5]);
  });
  test("Test that array does not return duplicate numbers", () => {
    expect(concatOdds([1, 2, 3, 1, 1, 3], [-1, -1, 3, 1])).toEqual([-1, 1, 3]);
    expect(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toEqual([
      -1, 1, 3, 9, 15,
    ]);
  });
  test("Test if strings are ignored when passed in array", () => {
    expect(concatOdds(['a', 1, 3, -1], [1, 2, 3, 'b'])).toEqual([-1, 1, 3])
  })
});

describe("shoppingCart", () => {
  let shoppingCartInstance;
  beforeEach(() => {
    shoppingCartInstance = new shoppingCart({
      cart: {},
      loggedIn: false,
    });
  });
  // when cart is empty
  test("When cart is empty return empty cart message", () => {
    let result = shoppingCartInstance.checkout();
    expect(result).toBe("You need to add items to checkout")
  });
  // can use the ".toBe" set it equal to the return message ie "Do you want to log in or create account?" etc
  // when user isn't logged in
  test("When the user isn't logged in", () => {
    let results = shoppingCartInstance.addProduct({name: "eggs", quantity: 1, price: 3.99})
    expect(results.checkout()).toBe("Do you want to log in or create account?")
  })

  // when user is logged in


});
