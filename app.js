const axios = require("axios");
const email = /(?<=['"]mailto:)(.*?)(?=['"])/g;
const url = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;

function getEmails (emailURL) {
    console.log("\x1b[1m\x1b[31mEMAILS FOR \x1b[32m"+emailURL+"\n\x1b[0m===============================\x1b[34m");
    var buffer = [];
    if (emailURL.match(url)) {
        axios.get(emailURL).then((res) => {
            l = res.data.match(email);
            if (l) {
                l.map(a => {
                    if (a.length < 20 && !(buffer.includes(a))) {
                        console.log(a)
                        buffer.push(a)
                    }
                })
            }
            res.data.match(url).map(x => {
                if (!(x.includes("png") || x.includes("png") || x.includes("svg") || x.includes("jpeg"))) {
                axios.get(x).then(y => {
                    z = y.data.match(email);
                    if (z) {
                        z.map(a => {
                            if (a.length < 50 && !(buffer.includes(a))) {
                                console.log(a)
                                buffer.push(a)
                            }
                        })
                    }
                }).catch(e => {return e});
            }
            })
        }).catch(e => {
            console.log("\x1b[1m\x1b[31mNot a URL...\x1b[0m")
        })
    } else {
        console.log("\x1b[1m\x1b[31mNot a URL...\x1b[0m")
    }
}

exports.getEmails = getEmails;