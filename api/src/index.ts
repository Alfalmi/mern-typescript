import app from './app'
import './database'
import config from './config'

app.listen(app.get('port'),() => {
    
    console.log("server en port:" + config.PORT)
})

  