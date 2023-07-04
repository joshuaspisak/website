import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const database = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
database.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:We failed in trying to connect to the server' });
    } else  {
        console.log('We have connected to the MongoDB Volunteering collection using Mongoose.');
    }
});

const volunteeringSchema = mongoose.Schema({
	event:    { type: String, required: true },
	hours:     { type: Number, required: true },
	date: { type: Date, required: true, default: Date.now }
});

const Volunteering = mongoose.model('Volunteering', volunteeringSchema);

const makeVolunteering = async (event, hours, date) => {
    const volunteering = new Volunteering({ 
        event: event, 
        hours: hours, 
        date: date 
    });
    return volunteering.save();
}

const getVolunteering = async () => {
    const result = Volunteering.find();
    return result.exec();
}

const getVolunteeringByID = async (_id) => {
    const result = Volunteering.findById({_id: _id});
    return result.exec();
}

const removeVolunteeringById = async (_id) => {
    const result = await Volunteering.deleteOne({_id: _id});
    return result.deletedCount;
};

const changeVolunteering = async (_id, event, hours, date) => {
    const result = await Volunteering.replaceOne({_id: _id }, {
        event: event,
        hours: hours,
        date: date
    });
    return { 
        _id: _id, 
        event: event,
        hours: hours,
        date: date 
    }
}

export { makeVolunteering, getVolunteering, getVolunteeringByID, changeVolunteering, removeVolunteeringById }