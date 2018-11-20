import dictionaries, {languages} from './'

describe('Translations', () => {
    describe('Dictionaries', () => {
        test('all dictionaries should have the same entries', () => {
            languages
            .map(lang => lang.code)
            .map(code => dictionaries[code])
            .map(entries)
            .reduce((precDictEntries, currDictEntries) => 
                expect(precDictEntries).toEqual(currDictEntries)
            )  
        })
    });
});

function entries(dictionary: object): string[] {
    return Object.getOwnPropertyNames(dictionary).map((propertyName) => {
        if (typeof dictionary[propertyName] === 'object'){
            return entries(dictionary[propertyName]).map((childPropName: string) => propertyName + '.' + childPropName)
        } else {
            return [propertyName]
        }
    }).reduce((prev, curr) => curr.concat(prev), []);
}
