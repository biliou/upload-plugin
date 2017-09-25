module.exports = (app) => {
    app.set("title", "my title")

    app.use('/', function(req, res, next) {
        console.log("bili ou/bili ou")
        next()
    })

    app.use('/service/extend/:type/:action', function(req, res, next) {
        console.log("upload Func start")
        console.log(req.params.action)
        console.log(req.params.type)

        try {
            require('./extend/' + req.params.type)(req, res, next)
        } catch (e) {
            res.status(500).send(e.toString())
        }
    })

    app.get('/title/:id', function(req, res, next) {
        var title = app.get("title")

        try {
            res.send(title)
        } catch (e) {
            res.status(500).send(e.toString())
        }
    })

    app.delete('/title/:id', function(req, res, next) {
        app.set("title", null)
        var title = app.get("title")

        try {
            res.send("delete Success")
        } catch (e) {
            res.status(500).send(e.toString())
        }
    });

    app.post('/title/:id', function(req, res, next) {
        app.set("content", "content")
        var content = app.get("content")

        try {
            res.send(content)
        } catch (e) {
            res.status(500).send(e.toString())
        }
    });

    app.put('/title/:id', function(req, res, next) {
        app.set("title", "other title")
        var title = app.get("title")

        try {
            res.send(title)
        } catch (e) {
            res.status(500).send(e.toString())
        }
    });
}