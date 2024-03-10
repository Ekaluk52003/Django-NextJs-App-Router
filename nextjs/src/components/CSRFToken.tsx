import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const CSRFToken = () => {
  const [csrftoken, setcsrftoken] = useState("");

  function getCookie(name) {
    let cookieValue = null;

    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

          break;
        }
      }
    }

    return cookieValue;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch("/api/auth/csrf", {
        //   method: "GET",
        //   credentials: "same-origin",
        // });
        const res = await fetch("/api/auth/get-csrf", {
          credentials: "same-origin",
          method: "POST",
          
        });
      } catch (err) {}
    };

    fetchData();

    const cookie = cookies.get("csrftoken");
    console.log(cookie);
    setcsrftoken(cookie);
  }, []);
  // return <input type='hidden' name='csrfmiddlewaretoken' />;
  return (
    <input type='hidden' name='csrfmiddlewaretoken' defaultValue={csrftoken} />
  );
};

export default CSRFToken;
