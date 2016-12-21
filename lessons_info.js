const request = require("request")
const cheerio = require("cheerio")
const Task = require("data.task")

/**
 * THIS DOESN'T WORK
 * the lessons online are mixed up 
 * compared to the actual order for some reason
 */

const loadUrl = url => 
    new Task((rej, res) =>
        request(url, (err, resp, html) => 
            err ? rej(err) : res(html)))

const getAllElem = (sel) => {
    let elems = [];
    sel.each((i, elem) => elems.push(elem))
    return elems
}

const getElemText = (elem) =>
    elem.children[0].data

const inspect = (contents) => {
    console.log(contents)
    return contents
}

const url = "https://egghead.io/instructors/brian-lonsdorf?order=ASC";

const scrape = loadUrl(url)
            .map(html => cheerio.load(html))
            .map($ => $("h4.title>a"))
            .map(sel => getAllElem(sel))
            .map(elems => elems.map(getElemText))

const res = scrape.fork(e => e, 
                        d => d.map((title, i) => 
                                console.log((i + 1) + ". " + title)))