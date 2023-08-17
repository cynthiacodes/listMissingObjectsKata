import { listMissingObjects } from "./listMissingObjects";
import { listMissingObjectsUsingFilter } from "./listMissingObjects";

test("return an array of the objects from the first array which do not have a match in the second array", () => {
    expect(
        listMissingObjects(
            [
                { id: 1, name: "fred" },
                { id: 3, name: "omar" },
                { id: 17, name: "neto" },
            ],
            [
                { id: 2, name: "allie" },
                { id: 20, name: "omar" },
                { id: 17, name: "neto" },
            ]
        )
    ).toStrictEqual([{ id: 1, name: "fred" }]);
});

test("return an array of the objects from the first array which do not have a match in the second array", () => {
    expect(
        listMissingObjectsUsingFilter(
            [
                { id: 1, name: "fred" },
                { id: 3, name: "omar" },
                { id: 17, name: "neto" },
            ],
            [
                { id: 2, name: "allie" },
                { id: 20, name: "omar" },
                { id: 17, name: "neto" },
            ]
        )
    ).toStrictEqual([{ id: 1, name: "fred" }]);
});
