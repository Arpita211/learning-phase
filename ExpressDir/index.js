import express from 'express'

const app = express()
 let PORT = 3000
app.listen(PORT,()=>{
    console.log(`hello world at ${PORT}`)
})

/*app.use( (req, res) => {
    let Fruits = "<h1>fruits</h1><ul><li>apple</li><li>orange</li></ul>"
  res.send(Fruits)
})*/

app.get('/apple',(req,res)=>{
    res.send('this is apple code')
})
app.get('/:username/:id',(req,res)=>{
    let{username,id}=(req.params)
    let code = `<h1>welcome to the page @${username},${id}</h1>`
    res.send(code)
})
app.get('/orange',(req,res)=>{
    res.send('this is orange code')
})
//app.get('*',(req,res)=>{
  //  res.send('this path does not exist')
//})
app.post('/',(req,res)=>{
    res.send("request is post")
})
app.get('/search',(req,res)=>{
    
    let{ q } =(req.query)
    if(!q){
        res.send("<h1>nothing is searched</h1>")
    }
    res.send(`<h1>this is query request for : ${q}</h1>`)
})
