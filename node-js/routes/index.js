var express = require('express');
var router = express.Router();

let devices = {
  devices: [
    {
      name: 'device 1',
      type: 'type 1',
      macAddress: 'device 1',
      state: true,
      id: 1
    },
    {
      name: 'device 2',
      type: 'type 2',
      macAddress: 'device 2',
      state: false,
      id: 2
    },
    {
      name: 'device 3',
      type: 'type 3',
      macAddress: 'device 3',
      state: true,
      id: 3
    }
  ]
};

router.get('/', (req, res) => {
  res.render('index', devices);
});

router.get('/remove-device/:id', function (req, res) {
  const id = +req.params.id;

  devices.devices = devices.devices.filter(item => item.id !== id);
  res.render('index', devices);
});

router.get('/switch-device/:id', function (req, res) {
  const id = +req.params.id;

  devices.devices.forEach(item => {
    if (item.id === id) {
      item.state = !item.state;
    }
  });

  res.render('index', devices);
});

router.post('/add-device', function (req, res) {
  const data = Object.assign({}, req.body, {id: +req.body.id});

  devices.devices.push(data);
  res.render('index', devices);
});

module.exports = router;
