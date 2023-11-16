import { url } from "../config";

export function getAllAlbum() {
    return new Promise((resolve, reject) => {
        cy.api({
            method: 'GET',
            url: `${url}/albums`,
            failOnStatusCode: false
        }).then((response) => {
            resolve(response)
        })
    })
}

export function getAlbumById(id) {
    return new Promise((resolve, reject) => {
        cy.api({
            method: 'GET',
            url: `${url}/albums/${id}`,
            failOnStatusCode: false
        }).then((response) => {
            resolve(response)
        })
    })
}


export function createAlbum(body) {
    cy.api({
        method: 'POST',
        url: `${url}/albums`,
        body: body,
        failOnStatusCode: false
    }).then((response) => {
        resolve(response)
    })
}


export function deleteAlbum(id) {
    return new Promise((resolve, reject) => {
        cy.api({
            method: 'DELETE',
            url: `${url}/album/${id}`,
            failOnStatusCode: false
        }).then((response) => {
            resolve(response)
        })
    })
}