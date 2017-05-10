module.exports = (app) => {
    app.use('/', function(req, res, next) {
        console.log("bili ou/bili ou")
        next()
    })

    app.use('/service/extend/:type/:action', function(req, res, next) {
        console.log("upload Func start")
        console.log(req.params.action)
        console.log(req.params.type)
        
        try {
            require('./extend/' +  req.params.type)(req, res, next)
        } catch (e) {
            res.status(500).send(e.toString())
        }
    })
}