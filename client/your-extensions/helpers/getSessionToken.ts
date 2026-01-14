  import { SessionManager } from "jimu-core";
  
  // Función helper para obtener el token de la sesión
  export const getSessionToken = (): string | null => {
    try {
      const sessionManager = SessionManager.getInstance();
      const sessions = sessionManager?.getSessions();
      // Obtener el token de la primera sesión activa
      if (sessions && sessions.length > 0) {
        return sessions[0].token || null;
      }
      return null;
    } catch (error) {
      console.error("Error al obtener el token de sesión:", error);
      return null;
    }
  };
