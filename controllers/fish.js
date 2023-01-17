const Fish = require("../models/Fish");

exports.list = async (req, res) => {
  try {
    const fishes = await Fish.find({});

    res.render("fishes", { fishes: fishes, message: req.query?.message });
  } catch (e) {
    res.status(404).send({ message: "could not list fishes" });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    await Fish.findByIdAndRemove(id);
    res.redirect("/fishes");
  } catch (e) {
    res.status(404).send({
      message: `could not delete record ${id}.`,
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    await Fish.updateOne({ _id: id }, req.body);
    const fish = await Fish.findById(id);
    res.redirect(`/fishes/?message= ${fish.name} as been updated.`);
  } catch (e) {
    if (e.errors) {
      console.log(e.errors);
      return res.render("update-fish", { errors: e.errors });
    }

    res.status(404).send({
      message: `could not update fish: ${id}.`,
    });
  }
};

exports.edit = async (req, res) => {
  const id = req.params.id;
  try {
    const fish = await Fish.findById(id);
    res.render("update-fish", { fish: fish, id: id, errors: {} });
  } catch (e) {
    res.status(404).send({
      message: `could not find fish ${id}.`,
    });
  }
};

exports.create = async (req, res) => {
  let fish = new Fish({ name: req.body.name, price: req.body.price });
  try {
    await fish.save();
    res.redirect(`/fishes/?message=${req.body.name} has been created`);
  } catch (e) {
    if (e.errors) {
      return res.render("create-fish", { errors: e.errors });
    }
    return res.status(400).send({ message: JSON.parse(e) });
  }
};
