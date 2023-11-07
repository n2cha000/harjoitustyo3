
import './App.css';

function App() {
  const express = require("express")
  const cors = require("cors")
  const mysql= require()
  const config= require ('./config')

  const app= express()

  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({extended: false}))

  const port = 3001

  app.get('/', async (req, res)) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from task')


    //...
  } catch (err) {
   res.status(500).send(err.message)

  }
 
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
