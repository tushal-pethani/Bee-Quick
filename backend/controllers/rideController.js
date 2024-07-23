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
                    if (err) {
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
    const { userid } = req.query

    const q = `SELECT * FROM ride WHERE user_id = ?`

    db.query(q, [userid], (err, data) => {
        if (err) {
            console.log("some error in backend")
            return res.status(500).json(err)
        } console.log(data)
        return res.status(200).json(data)
    })
}

export const getDriverDetails = (req, res) => {
    const { emp_id } = req.query

    const q = `SELECT 
    r.bike_id,
    u.name AS user_name,
    l1.loc_name AS loc_pick_name,
    l1.pincode AS loc_pick_pincode,
    l1.street AS loc_pick_street,
    l1.city AS loc_pick_city,
    l1.state AS loc_pick_state,
    l1.country AS loc_pick_country,
    l2.loc_name AS loc_drop_name,
    l2.pincode AS loc_drop_pincode,
    l2.street AS loc_drop_street,
    l2.city AS loc_drop_city,
    l2.state AS loc_drop_state,
    l2.country AS loc_drop_country
FROM 
    ride r
JOIN 
    users u ON r.user_id = u.userid
JOIN 
    location l1 ON r.loc_pick = l1.loc_id
JOIN 
    location l2 ON r.loc_drop = l2.loc_id
WHERE 
    r.time_drop IS NULL
    AND r.bike_id IN (SELECT bike_id FROM bikes WHERE owner_id = ?);


`
    db.query(q, [emp_id], (err, data) => {
        if (err) {
            console.log("some error in backend")
            return res.status(500).json(err)
        }
        else {
            console.log(data)
            return res.status(200).json(data)
        }
    })
}

export const updateDropTime = (req, res) => {
    const { bike_id } = req.body
    console.log(bike_id)

    const date = new Date()

    const q = `UPDATE ride SET time_drop = ? WHERE bike_id = ?`

    db.query(q, [date, bike_id], (err, data) => {
        if (err) {
            console.log("some error in backend")
            return res.status(500).json(err)
        }
        return res.status(200).json(data)
    })
}

export const cancelRide = (req, res) => {
    const { bike_id } = req.body;

    const updateAvail = `UPDATE bikes SET avail = ? WHERE bike_id = ?`;
    db.query(updateAvail, ["yes", bike_id], (err, data) => {
        if (err) {
            console.log("Error updating availability:", err);
            return res.status(500).json(err);
        }

        const cancelRideQuery = `UPDATE ride SET time_drop = ? WHERE bike_id = ?`;
        const date = new Date();
        db.query(cancelRideQuery, [date, bike_id], (err, data) => {
            if (err) {
                console.log("Error updating drop time for canceled ride:", err);
                return res.status(500).json(err);
            }

            return res.status(200).json(data);
        });
    });
};