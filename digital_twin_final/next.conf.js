import * as dotenv from "dotenv";

module.exports = {
      env: {
            REACT_APP_FIREBASE_CONFIG: process.env.FIREBASE_CONFIG,
            REACT_APP_IE_ROOM: process.env.IE_ROOM,
            REACT_APP_SERVICE_ACCOUNT: process.env.SERVICE_ACCOUNT,
      },
}