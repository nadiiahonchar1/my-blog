import articles from './db.json'
import { delayed } from './delay'

export function getAllArticles() {
    return delayed(articles,{timeout: 1500, shouldFail: false})
}

export function getAricleByName(articleName:string) {
    const article = articles.find((x) => x.name === articleName)
    if (!article) { throw new Error('Not fount') }
    return article
}