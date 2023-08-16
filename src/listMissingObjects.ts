/* Write a function listMissingObjects which takes two arguments - both being arrays of objects.
 function listMissingObjects:
 Input
    - first array of objects 
    - second array of objects

 Declare missingObject variable = []
    - create a new array that contains only the person object where the name or id doesn't match in the second array 


 Output
    - array of the person object in the first array that doesnt have a match in the second array

*/

interface Person {
    id: number;
    name: string;
}

function isAMatch(personOne: Person, personTwo: Person) {
    if (personOne.id == personTwo.id || personOne.name == personTwo.name) {
        return true;
    }

    return false;
}
export function listMissingObjects(
    personsArrOne: Person[],
    personsArrTwo: Person[]
): Person[] {
    const missingObjects: Person[] = [];
    const personsArrOneLen = personsArrOne.length;
    const personsArrTwoLen = personsArrTwo.length;

    for (let i = 0; i < personsArrOneLen; i++) {
        for (let j = 0; j < personsArrTwoLen; j++) {
            const personOne = personsArrOne[i];
            const personTwo = personsArrTwo[j];
            // console.log("person one", personOne, "person two", personTwo);

            if (isAMatch(personOne, personTwo)) {
                console.log("These two are a match", personOne, personTwo);
            } else {
                missingObjects.push(personOne);
            }
        }
    }
    return missingObjects;
}

const result = listMissingObjects(
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
);

console.log(result);
