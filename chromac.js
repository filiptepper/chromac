var Chromac = (function(){
  return {
    handleBookmarksBar: function(e) {
      if ((e.metaKey === true || e.ctrlKey === true) && (e.keyCode >= 49 && e.keyCode <= 57)) {
        chrome.extension.sendRequest({ name: "bookmarksBar", id: (-48 + parseInt(e.keyCode)), new_tab: e.altKey });
        e.preventDefault();
      }
    }
  }
})();

window.addEventListener("keydown", Chromac.handleBookmarksBar, false);