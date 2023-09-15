// firebaseAuthPersistence.js

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebaseconfig";

// Configure o Firebase Authentication com persistência
const auth = getAuth(app);

// Adicione um listener para monitorar o estado de autenticação
const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // O usuário está autenticado, faça o que for necessário aqui
    console.log("Usuário autenticado:", user);
  } else {
    // O usuário não está autenticado, faça o que for necessário aqui
    console.log("Usuário não autenticado");
  }
});

export { auth, unsubscribe };
