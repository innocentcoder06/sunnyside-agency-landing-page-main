document.addEventListener('DOMContentLoaded', function () {
  var nav_list = document.getElementById('nav-list');
  document.getElementById('ham-btn').addEventListener('click', function () {
    if (nav_list.classList.contains('expand')) {
      nav_list.classList.remove('expand');
      nav_list.classList.add('collapse');
      return;
    } else {
      nav_list.classList.remove('collapse');
      nav_list.classList.add('expand');
    }
  });
});