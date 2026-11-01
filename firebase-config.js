// Firebase console → Project settings → Your apps → Web app → "firebaseConfig"
// Neeche ki values apni values se replace karo.
export const firebaseConfig = {
  apiKey: "AIzaSyC7wU97yNCZjS6AGqRhNQKNf-R4COLf-pA",
  authDomain: "barakahemart-836ec.firebaseapp.com",
  projectId: "barakahemart-836ec",
  appId: "1:90026680646:web:6633bcc1cd49c009b98547",
};

export const isConfigured = !firebaseConfig.apiKey.startsWith("PASTE");
