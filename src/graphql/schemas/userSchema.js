const {gql} = require('apollo-server');

module.exports = gql`
type User {
    username: String
    email: String
    password: String
}

input UserSignup {
    username: String
    email: String
    password: String
}

input UserLogin {
    email: String
    password: String
}

`

