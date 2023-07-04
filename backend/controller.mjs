import 'dotenv/config';
import express from 'express';
import * as volunteering from './model.mjs';

const PORT = process.env.PORT;
const application = express();
application.use(express.json());

application.post ('/volunteering', (req,res) => { 
    volunteering.makeVolunteering(
        req.body.event, 
        req.body.hours, 
        req.body.date
        )
        .then(volunteering => {
            res.status(201).json(volunteering);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'there was a mistake when making a volunteering document' });
        });
});

application.get('/volunteering', (req, res) => {
    volunteering.getVolunteering()
        .then(volunteering => { 
            if (volunteering !== null) {
                res.json(volunteering);
            } else {
                res.status(404).json({ Error: 'there was a mistake when searching for the volunteering document.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'there was a mistake when getting the volunteering document.' });
        });
});

application.put('/volunteering/:_id', (req, res) => {
    volunteering.changeVolunteering(
        req.params._id, 
        req.body.event, 
        req.body.hours, 
        req.body.date
    )
    .then(volunteering => {
        res.json(volunteering);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'there was a mistake when changing the volunteering document' });
    });
});

application.delete('/volunteering/:_id', (req, res) => {
    volunteering.removeVolunteeringById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'the volunteering document is gone' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'there was a mistake when removing the volunteering document' });
        });
});


application.listen(PORT, () => {
    console.log(`The server is currently listening on the port with number ${PORT}...`);
});