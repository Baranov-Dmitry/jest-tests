const axios = require("axios");
const mapArrayToString = require("../../mapArrayToString/mapArrayToString");

const placeholder = async () => {
  try {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userIds = responce.data.map((user) => user.id);
    return mapArrayToString(userIds);
  } catch (error) {
    console.log(error);
  }
};

// (async () => {
//   const data = await placeholder();
//   console.log(data);
// })();

module.exports = placeholder;
