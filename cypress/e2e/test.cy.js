import { getAllAlbum, getAlbumById } from "./model/Album";
import { getAllUser } from "./model/GetAllUser";
import { getAllPost, getPostById } from "./model/Post";


describe("Method Get Pada endpoint Album", () => {
  it("GET All Album", async () => {
    const response = await getAllAlbum()
    expect(response.status).to.eq(200)
  })

  it("GET Album By Id", async () => {
    const response = await getAlbumById(1)
    expect(response.status).to.eq(200)
  })

})

describe("Method Get Pada endpoint Post", () => {
  it("GET All Posts", async () => {
    const response = await getAllPost()
    expect(response.status).to.eq(200)
  })

  it("GET Posts By Id", async () => {
    const response = await getPostById(1)
    expect(response.status).to.eq(200)
  })

})

describe("Method Get Pada endpoint User", () => {
  it("GET All User", async () => {
    const response = await getAllUser()
    expect(response.status).to.eq(200)
  })
})
