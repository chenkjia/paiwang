function linkHtml (link, top) {
  if (top) {
    window.open(link)
  } else {
    window.location.href=link
  }
}