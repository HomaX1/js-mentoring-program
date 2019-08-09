function removeItem(id) {
  $.get(/remove-device/ + id, function () {
    location.reload();
  });
}

function switchDevice(id) {
  $.get(/switch-device/ + id);
}

function saveDevice() {
  const formData = $('#createForm').serializeArray();
  const data = {
    name: formData[0].value || 'default',
    type: formData[1].value || 'default',
    macAddress: formData[2].value || 'default',
    state: false,
    id: new Date().getTime()
  };

  $.post(/add-device/, data, location.reload());
}


