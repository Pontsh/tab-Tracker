const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'SOFTWARE',
  password: 'Pontsho@1924',
  port: 5432,
})

app.post('/register', (req, res) => {
    
const { name, email, loginTime, loginDate } = req.body

  pool.query('INSERT INTO clients (client_name, client_email, login_date, log_in_time) VALUES ($1, $2, $3, $4 )',
   [ name, email, loginDate, loginTime], (error, results) => {
    if (error) {
        res.status(201).send("The is an error" + error)
    }else{
        res.status(201).send(`User added with ID: ${results.insertId}`)
    }
  })

})

app.get('/clients', (req, res) => {
    pool.query('SELECT * FROM clients', (error, results) => {
        if (error) {
            res.status(201).send(  "the is an error" + error)
        }
        res.status(200).json(results.rows)
    })
})


app.put('/register', (req, res) => {  
    const id = parseInt(request.params.id)
    
    const { logoutTime } = req.body
  
    pool.query(
      'UPDATE client SET  log_out_time = $1 WHERE client_id = $2',
      [logoutTime, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`client modified with ID: ${id}`)
      }
    )
})


app.listen(process.env.PORT || 3000 )
