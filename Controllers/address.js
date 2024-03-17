import address from "../Models/address";

export const daddress = (req, res) => {
    console.log(req.body.formdata);
    const { fname, email, dno, street, district, state, pin, monum } = req.body.formdata;
    const stud = new address({
      fname, email, dno, street, district, state, pin, monum});        
    stud.save()
        .then(() => {
            res.send({});
            
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error while saving data");
        });
};