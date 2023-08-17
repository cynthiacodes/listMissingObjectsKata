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

    for (const personOne of personsArrOne) {
        let foundMatch = false;
        for (const personTwo of personsArrTwo) {
            if (isAMatch(personOne, personTwo)) {
                foundMatch = true;
                break;
            }
        }

        if (!foundMatch) {
            missingObjects.push(personOne);
        }
    }
    return missingObjects;
}

export function listMissingObjectsUsingFilter(
    personsArrOne: Person[],
    personsArrTwo: Person[]
): Person[] {
    return personsArrOne.filter(
        (personOne) =>
            !personsArrTwo.some((personTwo) => isAMatch(personOne, personTwo))
    );
}
