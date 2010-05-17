var Chromac = (function(){
  return {
    handleBookmarksBar: function(e) {
      if (e.metaKey === true && (e.keyCode >= 48 && e.keyCode <= 57)) {
        chrome.extension.sendRequest({ name: "bookmarksBar", id: (-48 + parseInt(e.keyCode)) });
        e.preventDefault();
      }
    }
  }
})();

window.addEventListener("keydown", Chromac.handleBookmarksBar, false);