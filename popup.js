document.getElementById('fetchTitle').addEventListener('click', function() {
    // Request the current active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      // Set the title as "chrome extension (1)"
      let customTitle = "chrome extension (1)";
  
      // Display the custom title in the popup
      document.getElementById('titleDisplay').textContent = customTitle;
    });
  });
  