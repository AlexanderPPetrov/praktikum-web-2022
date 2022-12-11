const firstName = "Ivan"
const lastName = "Petrov"

console.log(
    `My full name is: ${firstName} ${lastName}`
)

const person = {
    firstName: "Ivan",
    surName: "Petrov",
    lastName: "Petrov",
    address: {
        city: "Plovdiv",
        street: "Preslav",
        number: "23A"
    },
    documents: [
        "id",
        "credit_card",
        "driving_license"
    ]
}
const person2 = {
    firstName: "Peter",
    surName: "Ivanov",
    lastName: "Petrov",
    address: {
        city: "Plovdiv",
        street: "Preslav",
        number: "23A"
    },
    documents: [
        "id",
        "passport",
        "bank_account",
    ]
}

const hasDrivingLicense =
    person.documents.includes("driving_license")

if(hasDrivingLicense) {
    person.age = "Above 17 years"
    person.city = "Pernik"
}

const documentsWithoutCC = person.documents.filter(personDocument => personDocument !== 'credit_card')
console.log(documentsWithoutCC)

const documentTitles = {
    id: "Лична карта",
    credit_card: "Кредитна карта",
    driving_license : "Шофьорска книжка",
    passport: "Международен паспорт",
    bank_account: "Банкова сметка"
}


function getDocuments() {
    const userDocuments
        = person.documents.map(documentType => {
        return {
            type: documentType,
            title: documentTitles[documentType],
        }
    })
    return userDocuments
}

const userDocuments = getDocuments()

const allDocuments = [
    ...person.documents,
    ...person2.documents,
]

const uniqueDocuments = allDocuments.reduce((acc, curr) => {
    if(acc.includes(curr)) {
        return acc
    }
    return [...acc, curr]

},[])


const temp = [23,18,14,12,10,28,19]


const getAverageTemp = (temp = []) => {
    const accTemp = temp.reduce((acc, curr) => {
        return acc + curr
    }, 0)

    return accTemp / temp.length
}

console.log(getAverageTemp(temp))
