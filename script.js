function toggleIcon(showId, hideId) {
    var showIcon = document.getElementById(showId);
    var hideIcon = document.getElementById(hideId);
    if (showIcon && hideIcon) {
      showIcon.style.display = 'inline-block';
      hideIcon.style.display = 'none';
    }
  }