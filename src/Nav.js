import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
            <img
            onClick={() => navigate("/")}
                className="nav__logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="Netflix Logo" 
                aria-hidden="true" 
                focusable="false" 
            />

            <img
                onClick={() => navigate("/profile")}
                className="nav__avatar"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSogGBonHRUVITEhKSkrMC4uFx8zODMsNygtLisBCgoKDQ0NFQ8NFSsdFR0tLSsrKystKysrLSstLS0tLS0rLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBwQDAv/EADsQAQACAQICBwUEBwkAAAAAAAABAgMEEQUhBhITMUGBkQciUWFxQnKhsSMyQ1OTstIUFhdEUnPBwtH/xAAbAQEBAAMBAQEAAAAAAAAAAAAAAQMEBQIGB//EACYRAQACAQQBBAMAAwAAAAAAAAABAgMEBRExIRIiMkEUQlETFWH/2gAMAwEAAhEDEQA/APK7D8/BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUEABQQFBAAAAUAEAAAAAAAAAAABQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBAAAAAAAAAAAAAAAAAAAAAAAAAAUEAAAAABQQAAFBAAEggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUEAAABQQAAAFBAAUEABQQAAAAAAAAAFWXCeAazWR1sGL3Ocdpkt1Mcz8p758olivlrXtuYNFlzRzWPCw1XQniOOvWimLLtG81x5Pf8otEb+rxGorLYvtOescx5Z69ZrM1tE1tWdrVtE1tWfhMT3M8TEw5tq2rPFo8oV5BAAAAAUEAAAAABVtwro3rdXXr4cW2Oe7Jlt2dLfTlMz9dmK2atW7g0GbLHMR4erWdDOIYqzbs8eWI74w5Otfb7sxG/k8xqKSy5Nqz0jntn5jbfeJjadpiY2mJ+Ex4SzxMT0501mJ4nsEBAAAAAAFj0e4bGs1eHBbfqTM3y7cp7Osbz68o82LLb015bmiw/5c0Vnp2HDirStaUrFa1iIrWI2iIjwc2ZmZ8vrqViscVjiH72HriGK9o3CaTirraViMmO1MeWY+3jtO0b/GYmY9ZbOnvPPDj7tp6zj/yV7hz9vPnAQAAAAFAABAUEAXPRHhddZrKY8kb4qVtmyR4WiJiIr5zMeUSw57+mrobdgjLm4t1Hl1ulYiNoiIiOURHKIhzu31kRERxHT9A5/wC0bhFKdnrMderN79ln2jlaZj3bz8+W3nDb01/PEuFu2nrFYyVjyxLccEEAASCAAAX3QfU1xcRwzedoyUyYYnuiLWiJj+XbzYM8c0dLa8kUzxz9urue+qSKzHtC1NacPvSZjr5smOlI8Z2tFpn0ifwZsEc25c3c7xXTzDmDovlQQAAAAAAFBAAAGo9neqrj11qW2jt8Nq1mfG9Zi0R6db0a+pjmrr7RkiuaYn7h05oPpgGP9pWqrXSY8P28uatojxitOcz9O6PNsaavu5cnd8kVxRT+uct98yCAAAAAAJidpiYnaYmJiY5TEx3TCTHL1W01nmO254H07rWlcetpebV5dvjjrdaPjavfE/Tdp3088+139Nu1YrFcyy1HTzQVrM4+2y38KRitTfzttEPEae/22b7pp4jmJmWE47xjNrs3a5dqxXeMeOs71x1/5n5tzHjikODq9XbPfn6V0MjUBAAAAAAAAAAAH6x5LUtW9Jmt6Wi1bR31tHdMJMRMcS90vNLRavbe8H6e4upFdZS9LxHPLjr16X+e0c4n5c2lfTzz7X0Gn3akxxljy9ms6eaKld8UZs1/CvZ2xR5zbw9UjT3ntmybrgrHNJmWA4txPNrM05s0x1ttq0j9THTwrH/vi26UiseHz+o1Fs15taXjhka4IAAAAAACgAgKCAAAAAAAAAAAAAoAAAAIAAAAACggAAKCAAAAAAAAoIAAAAAAAAAAAAAACgAgAAAAAAAAAAAAAAAAAAAAAAAAKCAAAAAoIAASKfH5RvPyj4z8E5iHr02mOiFeQQAAAAAAFAenh/D8+qv1NPitlt4zXlSv3rd0PFslax5lmw6fJln2Q93FOjWt0mPtc2Os44261sd+v1N/jG0cvm8UzVtPDYzaDLir6phUQzNEEAAAAAAAAAAAAARedomfhCPVe4dk4Jw7Bg02LHipXqzSszbaJm8zG82mfGZcy9rTZ9lpsGOuOOIVHGuhGlzzN8E/2bLPOerG+K0/Ovh5bMlM9q9tTUbZiyT7fEsbxLorr9PvM4e2pHPr4J7Tl939b8G1XPSzjZttz4/rmP8Ailv7szFomto5TW0TW0T84ll5hpWpavyjgV5AANwTSJtPVpFr28IpWb29ISbRHcvdcd7fGF3w/onxDPt+h7Gs/bzz1No+73z6MVs9IbuHbc+T64hqeF9AtPj2tqb21Fo59SN8eKJ+kc59WvfUTPiHVw7Vjp5yeZavT6fHirFMVK46RyitKxWseUNeZme3UpStY4rHCq6Xa/Dh0WeuW1d8uK+PHTf3r2tG0REeb3irM28NXW5sdMc+uXJIdKHyEzzPIqAAAAAAAAAAAoIASK0XR/pbqNHFcV47fT15RWZ2yY4+FbeMfKfVr3werzDp6Tcr4vbbzDd8J6S6LV7RjyxW8/ssvuZPSe/yalsVq/TvYdbhyx7ZXDG2nw1Oiw5o2y4seT79K229Vi0x1LxbFjt8o5VOfofw3J/lop/t3vj/AJZZIzXj7a1tv09v1ea/QTh090Zq/TNafz3evyLsM7Vpv5KadBeHR30zW+ua8flsTqLkbVpv5L16bonw7Httpcdtp33yTbJO/wBbS8TlvP22K6HBX9IWuDS4sUbY8dMcfClYrH4PE2me2euKleo4fVHtVcT6R6LS7xkz0m8fs8f6TJ6R3eb3XFa3UNbLrcOOPdbyx/FunmfJvXS0jBX95kiL5Z+kd0fi2qaaO7OPqN3tbxijhk8+a+W83yXvkvPfe8za0titax05OTLe882nmXzemMEASCAAAABQQAAAAAAFRMb+ESk8SsTMdSstBx7W6bbstTk6sfYvPaU+m1u7yY7YqS2sWtz4/jZe6X2gaqsbZcGHLttzra2Kfr4sU6WPpv03m8fKvK1xe0LTzt19Nnr8ZrOO8fmxzprfTZrvGKflWX3/AL/6H/Rqf4Vf6k/Guy/7bTn+IGh/d6n+HWP+yfjXJ3bTvLm9oeLaez0uaZ8JvelYn03mHqNNLDbeMf61lV6rp9rL8sWLDh+fvZbRP4R+DJGmj7auTeMk/COFHruOazUb9tqcsxP2Kz2dPSu2/my1xVjqGjk1mfJ8rq+IjwZOGrKVARAAAAAoAIAAAACggAAAAKAAAAbHIAAACAAAAAoIACggAAKCAAAAAAAAAAAAAAAAAAAAAJBAAAAAoIAACgAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKCAAAAAAAoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkEAACgiQAQCQAQACQQACQQACQQACQf/2Q=="
                alt="Netflix Avatar"
            />
        </div>
    </div>
  );
}

export default Nav;