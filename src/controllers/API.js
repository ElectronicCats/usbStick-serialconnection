const ctrl = {};

ctrl.index = (req, res) => {
  console.log("init API");
};

ctrl.execute = (req, res) => {
    let state = {
        data: req.body.data
    };

    console.log(state.data);

    res.send(state);
};

module.exports = ctrl;
