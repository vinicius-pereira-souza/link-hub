import reorderArray from "./reorderArray";

describe("reorderArray", () => {
  it(`moves an item to the end of the array correctly`, () => {
    const originalArray = [
      { id: 1, name: "Instagram" },
      { id: 2, name: "Facebook" },
      { id: 3, name: "LinkedIn" },
    ];

    const newArray = reorderArray(originalArray, 1, 3);

    expect(newArray[0].name).toBe("Facebook");
    expect(newArray[1].name).toBe("LinkedIn");
    expect(newArray[2].name).toBe("Instagram");
    expect(newArray[newArray.length - 1].name).toBe("Instagram");
  });

  it(`moves an item to the beginning of the array correctly`, () => {
    const originalArray = [
      { id: 1, name: "Instagram" },
      { id: 2, name: "Facebook" },
      { id: 3, name: "LinkedIn" },
    ];

    const newArray = reorderArray(originalArray, 3, 1);

    expect(newArray[0].name).toBe("LinkedIn");
    expect(newArray[1].name).toBe("Instagram");
    expect(newArray[2].name).toBe("Facebook");
    expect(newArray[newArray.length - 1].name).toBe("Facebook");
  });

  it(`moves an item to the same array index correctly`, () => {
    const originalArray = [
      { id: 1, name: "Instagram" },
      { id: 2, name: "Facebook" },
      { id: 3, name: "LinkedIn" },
    ];

    const newArray = reorderArray(originalArray, 1, 1);

    expect(newArray[0].name).toBe("Instagram");
    expect(newArray[1].name).toBe("Facebook");
    expect(newArray[2].name).toBe("LinkedIn");
  });

  it(`should return the same array if the ID is not found`, () => {
    const originalArray = [
      { id: 1, name: "Instagram" },
      { id: 2, name: "Facebook" },
      { id: 3, name: "LinkedIn" },
    ];

    const newArray = reorderArray(originalArray, 5, 8);

    expect(originalArray).toEqual(newArray);
  });
});
