document.addEventListener("DOMContentLoaded", function () {
  const storedUserName = localStorage.getItem('user_name') || 'Unknown Visitor';
  const userAgent = navigator.userAgent;
  const pageUrl = window.location.href;
  const timestamp = new Date().toISOString();

  fetch("https://munhjivj7k.execute-api.us-east-1.amazonaws.com/Development/visitor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user_name: storedUserName,
      user_agent: userAgent,
      page_url: pageUrl,
      timestamp: timestamp
    })
  });
});
