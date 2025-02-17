const getFirebaseErrorMessage = require("../index");

const errorCode = process.argv[2] || "auth/invalid-credential";
console.log(getFirebaseErrorMessage(errorCode));
