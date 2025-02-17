const parseFirebaseError = (error) => {
  const errorCode = typeof error === "string" ? error : error?.code;

  const errorMessages =
{
    // Email & Password Errors
    "auth/email-already-in-use": "This email is already in use. Try logging in instead.",
    "auth/invalid-email": "Invalid email format. Please enter a valid email address.",
    "auth/user-disabled": "This user account has been disabled.",
    "auth/user-not-found": "No user found with this email. Please sign up first.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/invalid-password": "Invalid password format. Please check and try again.",

    // Google, Facebook, and Third-Party Auth Errors
    "auth/account-exists-with-different-credential": "An account already exists with this email. Try signing in with a different method.",
    "auth/credential-already-in-use": "This credential is already linked to another account.",
    "auth/operation-not-allowed": "This authentication method is not enabled. Contact support.",
    "auth/popup-blocked": "Popup was blocked. Please enable popups in your browser.",
    "auth/popup-closed-by-user": "You closed the popup before signing in. Try again.",
    "auth/unauthorized-domain": "This domain is not authorized for authentication. Contact support.",
    "auth/invalid-credential": "Invalid login credentials. Please check and try again.",

    // Password Reset & Email Verification Errors
    "auth/invalid-action-code": "The password reset or verification link is invalid or expired.",
    "auth/expired-action-code": "This link has expired. Please request a new one.",
    "auth/missing-email": "No email provided. Please enter an email address.",
    "auth/missing-password": "No password provided. Please enter a password.",

    // Token & Session Errors
    "auth/id-token-expired": "Your session has expired. Please log in again.",
    "auth/id-token-revoked": "Your session was revoked. Log in again.",
    "auth/session-cookie-expired": "Session has expired. Please refresh or log in again.",
    "auth/session-cookie-revoked": "Session has been revoked. Please log in again.",
    "auth/token-expired": "Your authentication token has expired. Please log in again.",
    "auth/user-token-expired": "User token has expired. Please log in again.",

    // Phone Authentication Errors
    "auth/captcha-check-failed": "Captcha verification failed. Try again.",
    "auth/invalid-phone-number": "Invalid phone number format. Check and try again.",
    "auth/quota-exceeded": "Too many requests. Please try again later.",
    "auth/missing-phone-number": "No phone number provided. Please enter a valid phone number.",
    "auth/invalid-verification-code": "Invalid verification code. Please check and try again.",
    "auth/invalid-verification-id": "Invalid verification ID. Please check and try again.",

    // Multi-Factor Authentication (MFA) Errors
    "auth/multi-factor-auth-required": "Multi-factor authentication is required. Check your email or device.",
    "auth/mfa-info-not-found": "No multi-factor authentication info found for this user.",
    "auth/mfa-required": "Multi-factor authentication is required. Please verify your identity.",
    "auth/missing-mfa-info": "Missing multi-factor authentication information.",

    // Miscellaneous Errors
    "auth/network-request-failed": "Network error. Please check your internet connection.",
    "auth/too-many-requests": "Too many attempts. Please wait and try again later.",
    "auth/internal-error": "An internal error occurred. Try again later.",
    "auth/app-not-authorized": "This app is not authorized to use Firebase authentication.",
    "auth/missing-client-identifier": "Client identifier is missing. Please check your configuration.",
    "auth/invalid-api-key": "Invalid API key. Please check your Firebase configuration.",
    "auth/invalid-app-credential": "Invalid app credential. Please check and try again.",
    "auth/app-deleted": "The Firebase app has been deleted.",
    "auth/user-mismatch": "User credentials do not match. Please try again.",
    "auth/provider-already-linked": "This provider is already linked to the user account.",
    "auth/requires-recent-login": "This action requires a recent login. Please log in again and try."
}

  return (
    errorMessages[errorCode] || "An unknown error occurred. Please try again."
  );
};

// module.exports = fireerror;
// module.exports.fireerror = fireerror;
export { parseFirebaseError as getFirebaseErrorMessage };
export default parseFirebaseError;