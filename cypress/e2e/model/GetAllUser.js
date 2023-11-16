import { url } from "../config";

export function getAllUser() {
    return new Promise((resolve, reject) => {
        cy.api({
            method: 'GET',
            url: `${url}/users`,
            failOnStatusCode: false
        }).then((response) => {
            resolve(response)
        })
    })
}