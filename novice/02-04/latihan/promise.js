const fetch = require('node-fetch')
    // let janjian2 = new Promise()
    // console.log(janjian2);

// var janjian = new Promise(
//     (resolve, reject) => {
//         janjian
//             .then((result) => { console.log(result) })
//             .catch((error) => { console.log(error) })
//     }
// )

const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
const getAuthor = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)
const getComment = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)

getPost() // #1.fetch post
    .then(postResponse => postResponse.json()) // #2. get & return post json 
    .then(postResponse => getAuthor(postResponse.id) // #3. fetch author
        .then(authorResponse => authorResponse.json() // #4 get & return author json
            .then(authorResponse => getComment(postResponse.id) // #5 fetch comment
                .then(commentResponse => commentResponse.json()) // #6 get & return comment json
                .then(commentResponse => { // #7 time to combine all results
                    return ({ postResponse, authorResponse, commentResponse }) // #8 combine & return all reponses
                })
            )
        )
        .then(results => { // #9 read all responses
            console.log(results.postResponse)
            console.log(results.authorResponse)
            console.log(results.commentResponse)

        })
    )
    .catch(error => console.log(error)) //# 10 error handling