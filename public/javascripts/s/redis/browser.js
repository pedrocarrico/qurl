var layoutMessage;

layoutMessage = function(message) {
  var result;
  result = "<div class='message'><div class='meta'>" + ("<div class='channel' title='Channel'>" + message.channel + "</div>");
  if (message.pattern) {
    result += "<div class='pattern' title='Pattern'>" + message.pattern + "</div>";
  }
  return result + "</div>" + ("<div class='payload'>" + message.payload + "</div>") + "</div>";
};
