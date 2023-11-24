import { db } from "../db.js";

export const checkDrivers = (req, res) => {
    const q = `SELECT owner_id, bike_id, employees.name, gender FROM bikes, employees WHERE bikes.owner_id = employees.emp_id AND avail = ?`

    db.query(q, "yes", (err, data) => {
        if (err) {
            console.log("error occurred")
            return res.status(500).json(err)
        } if (!data.length) {
            console.log("no drivers available")
            return res.status(404).json(err)
        }

        return res.status(200).json(data)
    })
}

export const createRide = async (req, res) => {
    try {
        const { user_id, loc_pick, loc_drop, owner_id } = req.body;
        const date = new Date();

        const getLocId = async (location) => {
            const q = 'SELECT * FROM location WHERE loc_name = ?';
            return new Promise((resolve, reject) => {
                db.query(q, [location], (err, data) => {
                    if (err) {
                        console.log("Error fetching location ID:", err);
                        reject(err);
                    } else {
                        resolve(data[0].loc_id);
                    }
                });
            });
        };

        const initialLocation = await getLocId(loc_pick);
        const finalLocation = await getLocId(loc_drop);

        const amount = Math.abs(initialLocation - finalLocation) * 100;

        const getBikeId = async () => {
            const newQuery = 'SELECT * FROM bikes WHERE owner_id = ?';
            return new Promise((resolve, reject) => {
                db.query(newQuery, [owner_id], (err, data) => {
                    if (err) {
                        console.log("Error fetching bike ID:", err);
                        reject(err);
                    } else {
                        resolve(data[0].bike_id);
                    }
                });
            });
        };

        const bike = await getBikeId();

        const insertQuery = 'INSERT INTO ride(user_id, bike_id, loc_pick, loc_drop, time_pick, amount) VALUES (?,?,?,?,?,?)';
        const values = [user_id, bike, initialLocation, finalLocation, date, amount];

        db.query(insertQuery, values, (err, data) => {
            if (err) {
                console.log("Error inserting ride data:", err);
                return res.status(500).json(err);
            } else {
                const updateAvail = `UPDATE bikes SET avail = ? WHERE bike_id = ?`
                db.query(updateAvail, ["no", bike], (err, data) => {
                    if(err) {
                        console.log("some error")
                        return res.status(500).json(err)
                    } return res.status(200).json(data)
                })
            }
        });
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json(error);
    }
};

export const getDetails = (req, res) => {
    const {userid} = req.query

    const q = `SELECT * FROM ride WHERE user_id = ?`

    db.query(q, [userid], (err, data) => {
        if(err) {
            console.log("some error in backend")
            return res.status(500).json(err)
        } console.log(data)
        return res.status(200).json(data)
    })
}