const error = 'Uh oh, an error, please dm Phenomenon#7777 on discord. Did you provide a text?'
const fs = require('fs')
const request = require('request')

class logo {
    async angrycat(text) {
        if (!text) {
            throw new Error(error)
        }
        const encodedQuestion = text.replace(/[' '_]/g, "+");
        const image = `https://dynamic.brandcrowd.com/asset/logo/065b4535-d123-4261-accb-2f21e3eac3cf/logo?v=4&text=${encodedQuestion}`

        return image
    }
    async anaglyphopera(text) {
        if (!text) {
            throw new Error(error)
        }
        const encodedQuestion = text.replace(/[' '_]/g, "+");
        const image = `https://dynamic.brandcrowd.com/asset/logo/afa0be93-d4ae-46d5-b741-64bd3b4b6148/logo?v=4&text=${encodedQuestion}`
    
        return image
    }
    async angrywolf(text) {
        if (!text) {
            throw new Error(error)
        }
        const encodedQuestion = text.replace(/[' '_]/g, "+");
        const image = `https://dynamic.brandcrowd.com/asset/logo/6458e177-55ec-4b2d-8be7-4094431378ad/logo?v=4&text=${encodedQuestion}`
    
        return image
    }
    async arcade(text) {
        if (!text) {
            throw new Error(error)
        }
        const encodedQuestion = text.replace(/[' '_]/g, "+");
        const image = `https://dynamic.brandcrowd.com/asset/logo/362270db-6933-4ccc-8c11-25b2fe97f023/logo?v=4&text=${encodedQuestion}`
    
        return image
    }
    async beautybright(text) {
        if (!text) {
            throw new Error(error)
        }
        const encodedQuestion = text.replace(/[' '_]/g, "+");
        const image = `https://dynamic.brandcrowd.com/asset/logo/b97103b8-3b7c-4f1d-8c91-451c11e8cde3/logo?v=4&text=${encodedQuestion}`
    
        return image
    }
    async berserkerbear(text) {
        if (!text) {
            throw new Error(error)
        }
        const encodedQuestion = text.replace(/[' '_]/g, "+");
        const image = `https://dynamic.brandcrowd.com/asset/logo/0c963355-e735-4cdd-bec8-1373ba2a222e/logo?v=4&text=${encodedQuestion}`
    
        return image
    }
    
}

module.exports = logo