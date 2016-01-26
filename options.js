// Saves options to chrome.storage.sync.
function save_options() {
  var size = document.getElementById('size').value;
  chrome.storage.sync.set({
    size: size
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value size = 'small'
  chrome.storage.sync.get({
    size: 'small'
  }, function(items) {
    document.getElementById('color').value = items.size;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
