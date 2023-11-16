import { url } from "../config";

export function getAllPost() {
    return new Promise((resolve, reject) => {
        cy.api({
            method: 'GET',
            url: `${url}/posts`,
            failOnStatusCode: false
        }).then((response) => {
            resolve(response)
        })
    })
}

export function getPostById(id) {
    return new Promise((resolve, reject) => {
        cy.api({
            method: 'GET',
            url: `${url}/posts/${id}`,
            failOnStatusCode: false
        }).then((response) => {
            resolve(response)
        })
    })
}


export function createPost(body) {
    cy.api({
        method: 'POST',
        url: `${url}/posts`,
        body: body,
        failOnStatusCode: false
    }).then((response) => {
        resolve(response)
    })
}


export function deletePost(id) {
    return new Promise((resolve, reject) => {
        cy.api({
            method: 'DELETE',
            url: `${url}/posts/${id}`,
            failOnStatusCode: false
        }).then((response) => {
            resolve(response)
        })
    })
}


export function updatePost(body, id) {
    cy.api({
        method: 'PUT',
        url: `${url}/posts/${id}`,
        body: body,
        failOnStatusCode: false
    }).then((response) => {
        resolve(response)
    })
}