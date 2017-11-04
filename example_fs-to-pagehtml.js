fs.readFile('home.html', (err,data) => {
    res.send(data.toString())
})