import car from "../Models/car";

export const service = (req, res) => {
    console.log(req.body.formdata);
    const { fname, email, address, number, anumber, vnumber, engine, model, year, colour } = req.body.formdata;
    const stud = new car({
        fname, email, address, number, anumber, vnumber, engine, model, year, colour});        
    stud.save()
        .then(() => {
            res.send({});
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error while saving data");
        });
};