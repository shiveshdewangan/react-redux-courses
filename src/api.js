export const createCourse = name => {
  return postData("http://localhost:3001/courses", {
    name
  });
};

export const getCourses = () => {
  return fetch("http://localhost:3001/courses").then(res => res.json());
};

function postData(url = "", data = {}) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
}
