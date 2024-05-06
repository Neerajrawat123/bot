import axios from 'axios';
import express from 'express';

const app = express()
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}))

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/msg', (req, res) => {
    res.send('this is msg page')
})

app.post('/msg', (req, res) => {

    const { message } = req.body;

    if (!message ||  message.text.toLowerCase().indexOf("marco") < 0) {
        res.end;
        
    }


    axios
		.post(
			"https://api.telegram./bot6924736233:AAHTSnmPPW8H2dU3f5cqFI-yiqXtKZhzRc8/sendMessage",
			{
				chat_id: message.chat.id ,
				text: "Polo!!",
			}
		)
		.then((response) => {
			// We get here if the message was successfully posted
			console.log("Message posted")
			res.end("ok")
		})
		.catch((err) => {
			// ...and here if it was not
			console.log("Error :", err)
			res.end("Error :" + err)
		})


})

app.listen(3000, () => {
    console.log(`app is listening at 3000`)
})
